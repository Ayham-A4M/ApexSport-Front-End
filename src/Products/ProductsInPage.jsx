import ProductCard from "../components/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import LoadingPage from "../pages/LoadingPage";
import ProductNotFound from "./ProductNotFound";
import useFetchWishListIDS from "../hooks/useFetchWishListIDS";

const ProductsInPage = ({ data }) => {

    const { wishListIDS } = useFetchWishListIDS();
    const wishListIDSSet = wishListIDS ? new Set(wishListIDS) : null

    return (
        <>

            {(data && wishListIDSSet) ?
                data.length > 0 ?
                    <div className="grid grid-cols-4 items-center gap-y-[30px] justify-between max-[1270px]:grid-cols-3 max-[991px]:grid-cols-2 max-[776px]:grid-cols-1">
                        {
                            data.map((element) => (
                                <div className="w-full flex justify-center" key={uuidv4()}>
                                    <ProductCard wishListStatus={wishListIDSSet.has(element._id)} name={element.ProductName} priceAfterDiscount={element.PriceAfterDiscount} inStock={element.InStock} pic={element.Images[0]} price={element.Price} prdouctID={element._id} discount={element.DiscountPercentage} />
                                </div>
                            )
                            )
                        }

                    </div>
                    : <ProductNotFound />
                : <LoadingPage />
            }

        </>
    )
}
export default ProductsInPage