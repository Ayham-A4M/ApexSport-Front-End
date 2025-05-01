import useFetchWishListIDS from "../hooks/useFetchWishListIDS"
import ProductCard from "../components/ProductCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TrendingUpDown } from "lucide-react";

const SimilarProducts = ({ similarProducts }) => {
    const settings = {
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: similarProducts && similarProducts.length > 4 ? 4 : similarProducts.length,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,

                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }

        ]
    };
    const  {wishListIDS}  = useFetchWishListIDS()
    const wishListSet = (wishListIDS ? new Set(wishListIDS) : null);
    return (
        <Slider {...settings}>
            {console.log(similarProducts)}
            {
                (similarProducts && wishListSet) && similarProducts.map((product) => (
                    <ProductCard wishListStatus={wishListSet.has(product._id)} name={product.ProductName} pic={product.Images[0]} priceAfterDiscount={product.PriceAfterDiscount} inStock={product.InStock} price={product.Price} prdouctID={product._id} discount={product.DiscountPercentage} />
                ))
            }

        </Slider>
    )
}


// 


export default SimilarProducts