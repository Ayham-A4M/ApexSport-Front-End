import InformationCard from "./InformationCard"
import OrderStatusField from "./OrderStatusField"
import { ImTruck } from "react-icons/im";
import { SiTicktick } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
const OrdersStatus = ({ ordersStatus }) => {
    return (
        <InformationCard title={'Orders status'}>
            {
                ordersStatus &&
                <div className="flex pt-[10px] flex-col gap-[20px]  w-full pr-[10px]">
                    <OrderStatusField status={'pending'} value={ordersStatus.pendingOrders} icon={<CgSandClock className=" text-red-400" />} />
                    <OrderStatusField status={'processing'} value={ordersStatus.processingOrders} icon={<GiGearStickPattern className=" text-orange-400" />} />
                    <OrderStatusField status={'shipping'} value={ordersStatus.shippingOrders} icon={<ImTruck className=" text-blue-400" />} />
                    <OrderStatusField status={'completed'} value={ordersStatus.completedOrders} icon={<SiTicktick className=" text-green-400" />} />
                </div>
            }


        </InformationCard>
    )
}

export default OrdersStatus