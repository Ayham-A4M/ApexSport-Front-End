import { useEffect, useState } from "react"
import SectionHeader from "../components/SectionHeader"
import axios from "axios";
import useGetEnviroment from "../hooks/useGetEnviroment";
import InformationCard from "../AdminPage/InformationCard";
import DisplayOrdersCards from "../Admin/MangmentOrders/DisplayOrdersCards";
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";
import ControllingPage from "../components/ControllingPage";
const MangmentOrders = () => {
    const [orders, setOrders] = useState([]);
    // const [refetch, setRefetch] = useState(true);
    const { url } = useGetEnviroment();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchByUserName, setSearchByUserName] = useState('');
    const [debounceSearchByUserName] = useDebounce(searchByUserName, 2000);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                console.log(searchByUserName);
                const response = await axios.get(`${url}/api/orders/?page=${page}&userName=${searchByUserName}`, { withCredentials: true });
                if (response.status < 300) {
                    console.log(response);
                    setOrders(response.data.orders)
                    setTotalPages(response.data.totalPages)
                }
            } catch (err) {
                toast.error('server error !!');
            }
        }

        fetchOrders();
    }, [page, debounceSearchByUserName])
    const handleUpdateStatus = async (orderId, status) => {
        const updateStatus = async () => {
            try {
                const response = await axios.post(`${url}/api/updateOrderStatus`, { orderId, status }, { withCredentials: true })
                return response.data
            } catch (err) {
                throw err
            }


        }
        const result = await toast.promise(
            updateStatus(),
            {
                loading: 'wait a moment ....',
                error: 'An error occurred',
                success: 'operation complete'
            }
        );

    }
    const handleIncreasePage = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)

        }
    }

    const handleDecreasePage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);

        }
    }
    const handleSearchByUserName = (value) => {
        setSearchByUserName(value);
        setPage(1);
    }
    // const 
    return (
        <div className="mt-[50px] flex flex-col gap-[30px]">
            <SectionHeader sectionName={'Mangment Orders'} />
            <div className="flex items-center justify-center">
                <input type="text" className="inputStyle w-[90%] max-w-[300px]" placeholder="search by user name" onChange={(e) => { handleSearchByUserName(e.target.value) }} />
            </div>
            <InformationCard overflow={true} title={'All orders'}>

                <div className="flex flex-col gap-[20px] pt-[20px]">
                    <div className=" text-center  py-[5px] font-medium text-[--main-blue] rounded-[6px] px-[10px] grid grid-cols-6 place-items-center  gap-x-2 text-[16px]">
                        <span></span>
                        <span>Location</span>
                        <span>Date</span>
                        <span>User Name</span>
                        <span>TotalPrice + 5% tax</span>
                        <span>Status</span>
                    </div>

                    <DisplayOrdersCards orders={orders} />
                </div>

            </InformationCard>
            <ControllingPage handleDecreasePage={handleDecreasePage} handleIncreasePage={handleIncreasePage} page={page} />
        </div>
    )
}

export default MangmentOrders