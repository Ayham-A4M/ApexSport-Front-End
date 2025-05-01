import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import useGetEnviroment from "../hooks/useGetEnviroment";
import { User } from "../App";
const WishListHeart = ({ wishListStatus, prdouctID }) => {
    const user=useContext(User)
    const { url } = useGetEnviroment()
    const [status, setStaus] = useState(wishListStatus)
    
    const handleAddToWishList = async () => {
        try {
            const response = await axios.put(`${url}/api/addToWishList`, { productId: prdouctID }, { withCredentials: true });
            if (response.status < 300)
                toast.success(response.data.msg)
           
        } catch (err) {
            if(user&&user.user){
                toast.error('something went wrong')
            }
            setStaus(false)
        }
    }



    const handleRemoveFromWishList = async () => {
        try {
            const response = await axios.put(`${url}/api/removeFromWishList`, { productId: prdouctID }, { withCredentials: true });
            if (response.status < 300)
                toast.success(response.data.msg)
        } catch (err) {
            toast.error('something went wrong')
            setStaus(false)
        }
    }
    return (
        <>
            {

                status ?
                    < FaHeart className='text-red-600 cursor-pointer text-[15px]' onClick={() => { setStaus(false); handleRemoveFromWishList() }} />
                    :
                    <FaRegHeart className='text-red-600 cursor-pointer text-[15px]' onClick={() => { setStaus(true); handleAddToWishList() }} />
            }
        </>
    )
}

export default WishListHeart