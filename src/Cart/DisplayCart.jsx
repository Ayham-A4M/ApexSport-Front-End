import { createContext, useState } from "react";
import LoadingPage from "../pages/LoadingPage";
import Summary from "./Summary";
import CartIsEmpty from './CartIsEmpty';
import ProductsInCart from "./ProductsInCart";
import OopsSomthingWrong from "../components/OopsSomthingWrong";

export const refreshFetchProducts = createContext({});
const DisplayCart = ({ productsCart, setRefreshFetch, subTotalPrice, setShowPopUp }) => {
    return (
        <>
            {
                productsCart ?
                    (productsCart.length > 0 ?
                        <div className="flex gap-[20px] max-[700px]:items-center flex-col" >
                            <div className="w-full flex flex-col items-center gap-[30px]">
                                <refreshFetchProducts.Provider value={{ setRefreshFetch }}>
                                    <ProductsInCart productsCart={productsCart} />
                                </refreshFetchProducts.Provider>
                            </div>
                            <div className="w-full flex justify-end">
                                <Summary productNumber={productsCart.length} setShowPopUp={setShowPopUp} subTotalPrice={subTotalPrice} />

                            </div>
                        </div>
                        : <CartIsEmpty />
                    )

                    :
                    typeof productsCart ==='undefined'?<OopsSomthingWrong/>:<LoadingPage />
                    
            }
        </>

    )

}

export default DisplayCart