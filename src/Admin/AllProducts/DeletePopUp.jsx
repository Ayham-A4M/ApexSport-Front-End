import handleDeleteProduct from "./functions/handleDeleteProduct";
import { IoIosWarning } from "react-icons/io";
const DeletePopUp = ({productIdForDelete, setRefetch, setProductIdForDelete}) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-[6px] bg-[#cecece80]">
            <div className="w-full   max-w-[500px] px-[20px] py-[15px] rounded-[5px] bg-slate-200 ">
                <div>
                    <IoIosWarning className="mx-auto text-red-600 text-[50px]" />
                </div>
                <div className="text-center py-[20px]">
                    <span className="text-red-600 font-bold">Important</span>
                </div>
                <div>
                    <p className="text-center textred">if you confirm to delete this product <span className="text-red-600 font-bold">All </span>
                        the information that related with this product will deleted like: <span className="text-red-600 font-bold" >Orders</span>
                    </p>
                </div>
                <div className="flex justify-between items-center py-[20px]">
                    <button className="px-[25px] py-[3px] rounded-[5px] bg-blue-500 text-slate-100" onClick={(e) => { e.preventDefault(); setProductIdForDelete(false) }}>Cancle</button>
                    <button className="px-[25px] py-[3px] rounded-[5px] bg-red-600 text-slate-100" onClick={(e) => { e.preventDefault(); handleDeleteProduct(productIdForDelete, setRefetch, setProductIdForDelete) }}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp