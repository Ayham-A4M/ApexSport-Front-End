import SectionHeader from "../components/SectionHeader"
import DisplayCart from "../Cart/DisplayCart"
import useFetchProductsCart from '../hooks/useFetchProductsCart'
import { PopUpBuyNow } from "../Cart/PopUpBuyNow"
import { useState } from "react"
const CartPage = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const { productsCart, setRefreshFetch, subTotalPrice } = useFetchProductsCart();
    return (
        
            <div className="CartPage relative">
                <div className="ContentCartPage  py-[20px] flex flex-col gap-[50px]">
                    <SectionHeader sectionName={'Product Cart'} />
                    <DisplayCart setShowPopUp={setShowPopUp} productsCart={productsCart} setRefreshFetch={setRefreshFetch} subTotalPrice={subTotalPrice} />
                </div>
                {
                    showPopUp &&
                    <>
                        <PopUpBuyNow numberOfItems={productsCart.length} setRefreshFetch={setRefreshFetch} setShowPopUp={setShowPopUp} subTotalPrice={subTotalPrice} />
                    </>
                }
            </div>

       

    )
}
export default CartPage