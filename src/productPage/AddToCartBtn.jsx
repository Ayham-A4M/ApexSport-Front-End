import handleAddToCart from "../functions/handleAddToCart";
import Loader from "../components/Loader";
import { useState } from "react";
import toast from "react-hot-toast";
const AddToCartBtn = ({ quantity, productId, customes, requiredLength }) => {

    const [sendingReq, setSendingReq] = useState(false);

    return (
        <button className="py-[7px] px-[25px] min-w-[125px] text-slate-100 hover:text-[--main-blue] hover:bg-slate-100 duration-300 border-[2px] border-slate-100 hover:border-[--main-blue]   flex flex-row justify-center rounded-[3px] gap-[15px] items-center bg-[--main-blue]" onClick={async (e) => {
            e.preventDefault();
            if (requiredLength || customes.length > 0) {
                if (requiredLength === customes.length) {
                    setSendingReq(true);
                    await handleAddToCart(productId,quantity,customes, setSendingReq);
                             
                } else {
                    toast('please customize your product !!')
                }
            } else {
                setSendingReq(true);
                await handleAddToCart(productId, quantity,[],setSendingReq);
                
            }
        }
        }>
            <span className=" font-medium">{sendingReq ? <Loader /> : 'Add To Cart'}</span>
        </button>
    )
}
export default AddToCartBtn