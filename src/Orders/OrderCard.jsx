import srcImage from "../functions/srcImage"
import StatusOrder from "./StatusOrder"
import { MdDateRange } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { IoPricetag } from "react-icons/io5";
import InformationLine from "./InformationLine";

const OrderCard = ({ order }) => {
    return (
        <div className="w-full flex flex-col bg-gradient-to-br bg-[#d9e1f9] border-[--main-blue] hover:drop-shadow-md duration-300 flex-between gap-[20px] bg-[--card-background] px-[10px] py-[5px] rounded-[20px]">
            <div className="flex gap-y-[10px] flex-wrap items-center justify-between">
                <div className="flex px-[10px] py-[5px] rounded-[10px] bg-slate-300 items-center justify-start  gap-[50px] ">

                    {
                        order.ProductsInfo.map((item,i) => (
                            <div key={i} className="shrink-0 p-[5px] border-[1px] border-[--main-blue] w-fit rounded-full">
                                <img src={srcImage(item.Image)} alt="image" className="w-[50px] aspect-square" />
                            </div>
                        ))
                    }
                </div>
                <span className="px-[10px] py-[5px] bg-slate-300 rounded-[10px] flex items-center gap-[5px]"><MdDateRange />{order.Date.split('(')[0]}</span>
            </div>
            {/* information about the order */}
            <span className="text-[--main-blue] font-bold text-[20px]">{`Status Order : ${order.Status}`}</span>
            <div className="flex gap-[15px] max-[490px]:flex-col text-[15px] font-[cursive] text-wrap font-meduim  text-[--text-color] ">

                {/* left information */}
                <div className="flex flex-col max-[490px]:pl-0 gap-[10px] w-full pl-[20px]">
                    <InformationLine icon={<HiLightBulb className="text-yellow-400 text-[20px]" />} title={'items'} value={order.ProductsInfo.length} />
                    <InformationLine icon={<HiLightBulb className="text-yellow-400 text-[20px]" />} title={'product name'} value={order.ProductsInfo.reduce((acc, current) => { acc.push(current.ProductName); return acc }, []).join(' , ')} />
                    <div>
                        <InformationLine icon={<HiLightBulb className="text-yellow-400 text-[20px]" />} title={'product name'} value={''} />

                        <ul className="pl-[15px] flex flex-col" style={{ listStyle: 'disc' }}>
                            {
                                order.ProductsInfo.map((item) => (
                                    <li>{`${item.ProductName} : ${item.PriceAfterDiscount}`}</li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

                {/* right information */}
                <div className="flex text-zinc-600 flex-col gap-[10px] justify-start w-full">
                    <div>
                        <InformationLine icon={<HiLightBulb className="text-yellow-400 text-[20px]" />} title={'quantity for each item :'} value={''} />
                        <ul className="pl-[20px] flex flex-col" style={{ listStyle: 'disc' }}>
                            {
                                order.ProductsInfo.map((item,i) => (
                                    <li key={i}>{`${item.ProductName} : ${item.Quantity}`}</li>
                                ))
                            }
                        </ul>

                    </div>
                    <hr className="w-full h-[3px] bg-[--main-blue] " />
                    <InformationLine icon={<IoPricetag className="text-blue-600 text-[20px]" />} title={'original price'} value={`${parseFloat(order.TotalPrice) - parseFloat(order.Tax)}$`} />
                    <InformationLine icon={<IoPricetag className="text-blue-600 text-[20px]" />} title={'tax value'} value={order.Tax} />
                    <InformationLine icon={<IoPricetag className="text-blue-600 text-[20px]" />} title={'total price'} value={order.TotalPrice} />
                </div>
            </div>


            {/* status line */}
            <div className="py-[50px] rounded-[10px] bg-slate-300">
                <StatusOrder Status={order.Status} />
            </div>

        </div>
    )
}

export default OrderCard