import axios from "axios"
import useGetEnviroment from "../../hooks/useGetEnviroment";
export const fetchProductsByCatagory=async (catagory)=>{
    const {url}=useGetEnviroment()
   try{
    const response=await axios.get(`${url}/api/products/${catagory}`);
    if(response.status>300){
        return undefined
    }
    if(response){
        return response.data;
    }
   }catch(err){
        return undefined
   }
}