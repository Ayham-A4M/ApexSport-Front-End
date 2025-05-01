import axios from "axios"
import toast from "react-hot-toast";
export const handleDeleteProductFromCart = async (productId, customes,refresh, setSendingReq) => {
    try {
        const response = await axios.put('http://localhost:8000/api/deleteProductFromCart', { productId: productId,customes:customes }, { withCredentials: true });
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