import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import poster1 from '../assets/Carousel/poster1.png'
import poster2 from '../assets/Carousel/poster2.png'
import poster3 from '../assets/Carousel/poster3.png'
// import poster4 from '../assets/Carousel/poster4.png'
import poster5 from '../assets/Carousel/poster5.png'
import ImageSlide from "./ImageSlide";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="w-full flex justify-center py-[10px]">
      <div className="w-[80%] max-[700px]:w-full">
        <Slider {...settings}>
          <ImageSlide imageSrc={poster1} />
          <ImageSlide imageSrc={poster2} />
          <ImageSlide imageSrc={poster3} />
          {/* <ImageSlide imageSrc={poster4} /> */}
          <ImageSlide imageSrc={poster5} />
        </Slider>
      </div>
    </div>


  )
}

export default Carousel
