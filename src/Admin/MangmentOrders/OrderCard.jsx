import axios from "axios";
import toast from "react-hot-toast";
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import srcImage from "../../functions/srcImage";
import OrderStatusIcon from "./OrderStatusIcon";
import useGetEnviroment from "../../hooks/useGetEnviroment";
const OrderCard = ({ singleOrder }) => {
    const { url } = useGetEnviroment();
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

    return (
        <div className=" text-center relative bg-slate-300 py-[5px] rounded-[6px] px-[10px] grid grid-cols-6 place-items-center  gap-x-2 text-[13px]">
            <div className="w-fit absolute top-[5px] right-[10px] text-[20px]">
                <OrderStatusIcon status={singleOrder.Status} />
            </div>
            <div className="images text-[10px] gap-[5px] flex w-full justify-start flex-wrap">
                {
                    singleOrder.ProductsInfo.length > 0 &&
                    singleOrder.ProductsInfo.map((product) => (
                        <div className="flex flex-col justify-center items-center gap-[10px]">
                            <div className="w-[30px] aspect-square rounded-full border-[1px] border-gray-400">
                                <img src={srcImage(product.Image)} alt="" />
                            </div>
                            <span className="text-[--main-blue] ">
                                Qty : {product.Quantity}
                            </span>


                            <div>
                                {product.Custome &&
                                    product.Custome.length > 0 &&
                                    product.Custome.map((custome) => (
                                        <span className="py-[2px] px-2  rounded-full border-2 border-[--main-blue]">
                                            {`${custome.customeName} : ${custome.option}`}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="flex items-center">
                <CiLocationOn /> {singleOrder.Address}
            </div>

            <span className="flex items-center gap-[5px]"><MdDateRange />{singleOrder.Date.split('G')[0]}</span>
            <span>{singleOrder.UserName}</span>

            <span >{singleOrder.TotalPrice}</span>


            <select className="inputStyle w-[130px] cursor-pointer" defaultValue={singleOrder.Status} onChange={(e) => { handleUpdateStatus(singleOrder._id, e.target.value) }}>
                <optgroup  >
                    <option value="pending">pending</option>
                    <option value="processing">processing</option>
                    <option value="shipping">shipping</option>
                    <option value="completed">completed</option>
                </optgroup>
            </select>
        </div>
    )
}

export default OrderCard