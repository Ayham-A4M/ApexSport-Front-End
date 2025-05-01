import { ImTruck } from "react-icons/im";
import { SiTicktick } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
const OrderStatusIcon = ({ status }) => {
    if (status === 'completed') {
        return <SiTicktick className=" text-green-400" />
    } else if (status === 'shipping') {
        return <ImTruck className=" text-blue-400" />
    } else if (status === 'processing') {
        return <GiGearStickPattern className="text-orange-400" />
    }
    return <CgSandClock className=" text-red-400" />
}

export default OrderStatusIcon