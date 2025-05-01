import axios from "axios"
import useGetEnviroment from "../../hooks/useGetEnviroment";
const handleBuyNow = async (country, city, street,setSendingReq) => {
    const {url}=useGetEnviroment();
    try {
        const address = `${country + '-' + city + '-' + street}`
        const response = await axios.post(`${url}/api/createOrder`, { address }, { withCredentials: true });
        if (response.status < 300)
            window.location = response.data.url
        else
            throw response.data.msg
    } catch(err){
        console.log(err)
    } finally {
        setSendingReq(false)
    }
}
export default handleBuyNow