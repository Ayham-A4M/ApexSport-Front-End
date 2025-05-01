import axios from "axios"
import useGetEnviroment from "../hooks/useGetEnviroment";

const getPersonalInformation = async () => {
  const {url}=useGetEnviroment();
 const response= await axios.post(`${url}/api/personalInformation`,{},{
    withCredentials: true
  });
  return response;   
}

export default getPersonalInformation;