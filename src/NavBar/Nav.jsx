import Links from "./Links"
import Logo from "../assets/logo.svg"
import {  useState } from "react"
import './NavBar.css'
import MenueIcone from "./MenuIcon"
import SideMenue from "./SideMenu"
const Nav = () => {
    const [clicked, setClicked] = useState(0)
    return (
        <div className="navBar bg-[--main-blue] border-b-[1px] border-[--main-blue] w-full fixed top-0 z-50">
            <div className="containerNav md:px-[100px] px-[20px] py-[20px] gap-[15px] flex flex-row justify-between items-center">
                <div className="logo w-fit h-fit  ">
                    {/* <img src={Logo} className="  w-[40px] h-[40px]" /> */}
                    <span className="text-[20px] font-bold text-[--white-two] font-[Lemonada] ">ApexSport</span>
                </div>
                <Links />
                <MenueIcone clicked={clicked} setClicked={setClicked}  />
            </div>
            <SideMenue clicked={clicked} setClicked={setClicked} />
        </div>
    )
}
export default Nav