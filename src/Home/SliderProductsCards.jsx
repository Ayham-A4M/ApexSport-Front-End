import SectionHeader from "../components/SectionHeader"
import ProductCard from "../components/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchWishListIDS from "../hooks/useFetchWishListIDS";
const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,

    // focusOnSelect :true,
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
const SliderProductsCards = ({sectionName,products}) => {
    const { wishListIDS } = useFetchWishListIDS();
    const wishListSet = (wishListIDS ? new Set(wishListIDS) : null);
    return (
        <div className='pt-[50px] flex flex-col gap-[50px]'>
            {
                (products && wishListSet) ?
                    <>
                        <SectionHeader sectionName={sectionName} />
                        <Slider {...settings}  >
                            {
                                products.map((element) => (
                                    <ProductCard wishListStatus={wishListSet.has(element._id)} key={element._id} name={element.ProductName} priceAfterDiscount={element.PriceAfterDiscount} inStock={element.InStock} pic={element.Images[0]} price={element.Price} prdouctID={element._id} discount={element.DiscountPercentage} />
                                ))
                            }
                        </Slider>
                    </> : <span className='text-[--main-blue] text-[25px] font-semibold'>Loading....</span>
            }
        </div>
    )
}

export default SliderProductsCards