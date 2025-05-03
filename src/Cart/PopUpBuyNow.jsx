import { useContext, useState } from "react";
import { User } from "../App";
import { IoMdCloseCircle } from "react-icons/io";
import useInformationAddress from "../hooks/useInformationAddress";
import { InputAddress } from "./InputAddress";
import handleBuyNow from "./cartFunctions/handleBuyNow";
import Loader2 from "../components/Loader2";

export const PopUpBuyNow = ({ numberOfItems, setShowPopUp, subTotalPrice }) => {
    const user = useContext(User);
    const { country, setCountry, city, setCity, street, setStreet } = useInformationAddress();
    const [errorsFields, setErrorsFields] = useState({});
    const [sendingReq, setSendingReq] = useState(false);

    const handleErrorFields = () => {
        const obj = {}
        if (country == "") { obj.country = 'country shouldn`t be empty' }
        if (city == "") { obj.city = 'city shouldn`t be empty' }
        if (street == "") { obj.street = 'street shouldn`t be empty' }
        setErrorsFields(obj);
        console.log(obj);
        return Object.keys(obj).length > 0 ? false : true
    }
    const buyNow = () => {
        if (handleErrorFields()) {
            setSendingReq(true)
            handleBuyNow(country, city, street, setSendingReq);
        }
        return false
    }

    return (
        <div className="fixed inset-0 flex z-[100] justify-center items-center backdrop-blur-[6px] bg-[#cecece80]">
            <div className=" relative z-50 rounded-[10px] px-[15px] py-[20px] flex flex-col gap-[30px]  text-[--text-color] w-[98%] max-w-[500px]  bg-slate-100">
                <IoMdCloseCircle className="absolute top-[-7px] cursor-pointer right-[-7px] z-50 text-red-600 text-[30px]" onClick={() => setShowPopUp(false)} />
                <div className="flex justify-center">
                    <h2 className="text-[30px]">Check Out</h2>
                </div>
                <div className="flex flex-col gap-[20px] text-[16px]">
                    <span>{`Items : #${numberOfItems}`}</span>
                    <span>{`Full Name : ${user.user.FirstName + user.user.LastName}`}</span>
                    <span>{`Email : ${user.user.Email}`}</span>
                    <span>{`Total : ${(subTotalPrice + subTotalPrice * 0.05).toFixed(2)}$`}</span>
                </div>
                <form action="" className="felx flex-col">
                    <div className="flex flex-wrap justify-between gap-[10px]">
                        <InputAddress placeholder={'country'} setAddressState={setCountry} errorsFields={errorsFields} />
                        <InputAddress placeholder={'city'} setAddressState={setCity} errorsFields={errorsFields} />
                        <InputAddress placeholder={'street'} setAddressState={setStreet} errorsFields={errorsFields} />
                    </div>
                    {/* await handleBuyNow(country, city, street, setShowPopUp, setRefreshFetch) */}
                    <div className="flex justify-center mt-[30px] ">
                        <button disabled={sendingReq} className="w-fit px-[20px] flex justify-center items-center py-[4px] rounded-[20px] border-[--main-blue] border-[2px]" onClick={async (e) => { e.preventDefault(); buyNow() }}>{sendingReq ? <Loader2 /> : 'Buy Now'}</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
