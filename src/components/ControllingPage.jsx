import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const ControllingPage = ({handleDecreasePage,handleIncreasePage,page}) => {
    return (
        <div className="flex items-center justify-center gap-[15px]">
            <div className="group px-[5px] duration-300 py-[5px] rounded-[4px] border-[1px] border-slate-400 hover:bg-[--main-blue]">
                <FaChevronCircleLeft className=" text-[20px] group-hover:text-slate-100 text-[--main-blue] cursor-pointer " onClick={() => handleDecreasePage()} />
            </div>
            <span className="text-[18px] text-slate-100 text-[--text-color] bg-[--main-blue] py-[3px] px-[15px] rounded-[4px]">{page}</span>
            <div className="group px-[5px] duration-300 py-[5px] rounded-[4px] border-[1px] border-slate-400 hover:bg-[--main-blue]">
                <FaChevronCircleRight className="text-[20px] group-hover:text-slate-100 text-[--main-blue] cursor-pointer " onClick={() => handleIncreasePage()} />
            </div>
        </div>
    )
}

export default ControllingPage