import OopsSomthingWrong from "../components/OopsSomthingWrong";
import { useEffect, useState } from "react"
import SectionHeader from "../components/SectionHeader"
import ProductCard from "../components/ProductCard";
import axios from "axios";
import EmptyWishList from "../WishList/EmptyWishList";
import LoadingPage from "./LoadingPage";
import { v4 as uuidv4 } from 'uuid';
const WishListPage = () => {
    const [wishlist, setWishList] = useState(null);
    useEffect(() => {
        const getWishList = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACK_END_URL}/api/getWishList`, { withCredentials: true })
                if (response.status < 300) {
                    setWishList(response.data)
                }
            } catch (err) {
                setWishList(undefined);
            }

        }
        getWishList();
    }, [])
    return (
        <div className="flex flex-col gap-[50px] pt-[20px]">
            <SectionHeader sectionName={'My favorite'} />



            {
                wishlist ?
                    (
                        wishlist.length > 0 ?
                            <div className="grid grid-cols-4 items-center gap-y-[30px] justify-between max-[1270px]:grid-cols-3 max-[991px]:grid-cols-2 max-[776px]:grid-cols-1">
                                {
                                    wishlist.map((element) => (
                                        <div className="flex w-full items-center justify-center" key={uuidv4()}>
                                            <ProductCard  wishListStatus={true} pic={element.image} name={element.productName} price={element.productPrice} inStock={element.inStock} prdouctID={element.productId} discount={element.discount} priceAfterDiscount={element.priceAfterDiscount}/>
                                        </div>
                                        ))
                                }
                            </div>
                            : <EmptyWishList />
                    )
                    :
                    typeof wishlist == 'undefined' ? <OopsSomthingWrong /> : <LoadingPage />

            }


        </div>
    )
}

export default WishListPage