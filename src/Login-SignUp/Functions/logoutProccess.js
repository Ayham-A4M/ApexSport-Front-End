import axios from "axios"
import useGetEnviroment from "../../hooks/useGetEnviroment";

const logoutProccess=async ()=>{
   const {url}=useGetEnviroment()
 try{
    const response=await axios.post(`${url}/api/logout`,{},{
        withCredentials:true
    })
    if(response.status<300){return true;}
    else{throw response;}
 }catch(err){
    return false
 }
}
export default logoutProccess