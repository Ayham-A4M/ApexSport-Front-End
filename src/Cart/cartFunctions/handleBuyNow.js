import axios from "axios"
const handleBuyNow = async (country, city, street,setSendingReq) => {
    try {
        const address = `${country + '-' + city + '-' + street}`
        const response = await axios.post('http://localhost:8000/api/createOrder', { address }, { withCredentials: true });
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