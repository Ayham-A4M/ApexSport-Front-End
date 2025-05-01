import axios from "axios"
import toast from "react-hot-toast";
import useGetEnviroment from "../../hooks/useGetEnviroment";
export const handleDeleteProductFromCart = async (productId, customes,refresh, setSendingReq) => {
    const {url}=useGetEnviroment();
    try {
        const response = await axios.put(`${url}/api/deleteProductFromCart`, { productId: productId,customes:customes }, { withCredentials: true });
        if (response.status < 300 && response.data) {
            toast.success(response.data.msg,)
            refresh.setRefreshFetch(true);
        }
    } catch (err) {
        toast.error('something went wrong')        
    } finally {
        setSendingReq(false);       
    }
}