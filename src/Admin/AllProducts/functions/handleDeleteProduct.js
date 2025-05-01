import axios from "axios";
import toast from "react-hot-toast";
import useGetEnviroment from "../../../hooks/useGetEnviroment";
const handleDeleteProduct = async (productId, setRefetch, setProductIdForDelete) => {
    const { url } = useGetEnviroment();
    try {
        const response = await axios.post(`${url}/api/deleteProduct`, { productId }, { withCredentials: true });
        if (response.status < 300) {
            setRefetch(prev => !prev);
            toast.success(response.data.msg)
        } else {
            toast.error(response.data.msg)
        }
    } catch (err) {
        toast.error('unexpected error')
    } finally {
        setProductIdForDelete(false);
    }
}
export default handleDeleteProduct