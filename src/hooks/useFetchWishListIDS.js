import axios from "axios";
import { useState, useEffect } from "react"
import useGetEnviroment from '../hooks/useGetEnviroment'
const useFetchWishListIDS = () => {
    const {url} =useGetEnviroment();
    const [wishListIDS, setWishListIDS] = useState(null);
    useEffect(()=>{
        const getWishListIDS=async ()=>{
            const response=await axios.get(`${url}/api/getWishListIDS`,{withCredentials:true});
            console.log(response.data,'response');
            setWishListIDS(response.data);
        }
        getWishListIDS();
    },[])
    return wishListIDS?{wishListIDS}:false
}

export default useFetchWishListIDS