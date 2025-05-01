import { IoIosArrowDropupCircle } from "react-icons/io";
import useScrollPosition from "../hooks/useScrollPosition";
import { useEffect, useState } from "react";

const ScrollUpButton = () => {
    const scrollPosition = useScrollPosition();

    return (
        <IoIosArrowDropupCircle className={`${scrollPosition > 1000 ? 'fixed' : 'hidden'} cursor-pointer top-[70%] right-[1%] text-[--main-blue] text-[30px]`} onClick={() => {
            window.scrollTo(0, 0);

        }} />
    )
}

export default ScrollUpButton