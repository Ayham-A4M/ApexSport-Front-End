import axios from "axios";
import useGetEnviroment from "../../hooks/useGetEnviroment";
export const fetchProductByID = async (id) => {
    const {url}=useGetEnviroment();
    if (id) {
        const res = await axios.get(`${url}/api/product/?id=${id}`)
        if (res.status < 300 && res.data) {
            console.log(res);
            return res.data;
        } else {
            console.log(res);
        }
    }
    return false

}           
