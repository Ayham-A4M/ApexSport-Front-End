import { PiShoppingBagLight } from "react-icons/pi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { CiBoxes } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { RiDatabase2Line } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
export const userDirections = [
    { dierction: '/', name: 'home', icon: <AiOutlineHome /> },
    { dierction: '/Products', name: 'products', icon: <CiShoppingTag /> },
    { dierction: '/About', name: 'about', icon: <IoIosInformationCircleOutline /> },
    { dierction: '/cart', name: 'cart', icon: <PiShoppingBagLight /> },
    { dierction: '/orders', name: 'orders', icon: <CiBoxes /> },
    { dierction: '/wishlist', name: 'favorite', icon: <MdFavoriteBorder /> },
]
export const adminDirections = [
    { dierction: '/AdminPage', name: 'admin', icon: <FaRegUser /> },
    { dierction: '/mangmentproduct', name: 'mangment product', icon: <IoCreate /> },
    { dierction: '/stock', name: 'stock', icon: <RiDatabase2Line /> },
    { dierction: '/mangmentOrders', name: 'orders', icon: <BsTruck /> },
]
