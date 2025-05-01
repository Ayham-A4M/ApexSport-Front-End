import useGetEnviroment from "./useGetEnviroment";
import { useEffect, useState } from "react";
import axios from 'axios'
const useFetchAdminStatistics = () => {
    const {url} = useGetEnviroment();
    const [statistics, setStatistics] = useState(null);
    const [ordersStatus, setOrderStatus] = useState(null);
    const [topProducts, setTopProducts] = useState(null);
    const [incomeLast7Days, setIncomeLast7Days] = useState(null);
    useEffect(() => {
        const getStatistics = async () => {
            const response = await axios.get(`${url}/api/getStatistics`);
            if (response.status < 300) { setStatistics(response.data) }
        }
        getStatistics();
    }, [])
    useEffect(() => {
        const getTopProducts = async () => {
            const response = await axios.get(`${url}/api/TopProducts`);
            if (response.status < 300) { setTopProducts(response.data) }
        }
        getTopProducts();
    }, [])

    useEffect(() => {
        const getOrdersStatus = async () => {
            const response = await axios.get(`${url}/api/getOrdersStatus`);
            if (response.status < 300) { setOrderStatus(response.data) }
        }
        getOrdersStatus();
    }, [])
    useEffect(() => {
        const getIncomeLast7Days = async () => {
            const response = await axios.get(`${url}/api/last7Days`);
            if (response.status < 300) { setIncomeLast7Days(response.data) }
        }
        getIncomeLast7Days();
    }, [])

    return { statistics, ordersStatus, topProducts, incomeLast7Days }
}
export default useFetchAdminStatistics