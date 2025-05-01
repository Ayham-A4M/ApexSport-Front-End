import { useEffect,useState } from "react"
import useGetEnviroment from "./useGetEnviroment";
import axios from "axios";
const useGetOrders = () => {
    const [orders, setOrders] = useState(null);
    const [order, setOrder] = useState(-1);
    const { url } = useGetEnviroment()

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await axios.get(`${url}/api/userOrders/?order=${order}`, { withCredentials: true });
                if (response.status < 300) {
                    setOrders(response.data);
                }
            } catch (err) {
                setOrders(undefined)
            }
        }
        getOrders()
    }, [order])
return {orders,setOrder}
}
export default useGetOrders