import './Home.css'
import { Link } from 'react-router-dom';
import image1 from "../assets/Carousel/poster1.png"
import image2 from "../assets/Carousel/poster2.png"
import image3 from "../assets/Carousel/poster3.png"
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
};

const HomeHero = () => {
    return (

        <div className="relative mt-[10px] flex flex-col min-[1050px]:flex-row items-center justify-between gap-8 py-16 md:py-[118px] px-6 md:px-12 min-h-[60vh] bg-gradient-to-br from-[#4d8df5] via-[#2a6fdf] to-[#15478a] rounded-xl shadow-xl animate-fade-in">
            {/* Textual content */}
            <div className="flex-1 max-w-xl z-10">
                <h1 data-aos="fade-zoom-in" className="text-4xl md:text-6xl font-poppins font-bold leading-tight text-white drop-shadow-lg mb-6 animate-fade-in">
                    Unleash Your <span className="text-[#FEC6A1]">Inner Champion</span>
                </h1>
                <p data-aos="fade-zoom-in" data-aos-delay="200" className="text-lg md:text-2xl text-white font-medium mb-8 animate-fade-in">
                    Gear up for greatness. Discover the best sports apparel and equipment for every athlete—
                    from grassroots heroes to legends in the making.
                </p>
                <div className='w-fit rounded-lg hover:scale-[1.02] duration-300 hover:bg-[#FFD1A1] '> 
                    {/* wrapped it in div because hover and animation does not working with aos animation it is override it */}
                    <Link
                        data-aos="zoom-in-up"
                        data-aos-delay="300"

                        to={'/products'}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#FEC6A1] text-[#4d8df5] font-bold text-lg shadow-lg  focus:outline-none focus:ring-2 focus:ring-[#D6BCFA] animate-scale-in"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Hero image (sports themed) */}
            <div data-aos="fade-left" className="flex-1  flex items-center justify-center animate-scale-in">
                {/* <Carousel /> */}
                <Slider  {...settings} className='homeHero  w-[340px] md:w-[440px] rounded-2xl shadow-2xl border-4 border-white'>
                    <img
                        src={image1}
                        alt="Athlete hero-Sporty action"
                        className="rounded-2xl"
                    />

                    <img
                        src={image2}
                        alt="Athlete hero-Sporty action"
                        className="  h-full rounded-2xl"
                    />

                    <img
                        src={image3}
                        alt="Athlete hero-Sporty action"
                        className="  rounded-2xl"
                    />

                </Slider>


            </div>


        </div>



        // <div className='relative min-h-[calc(100vh-50px)] pb-[30px] max-[700px]:pb-0  flex flex-col'>

        //             <Carousel/>

        //     <div className='w-full py-[25px] max-[980px]:translate-y-[0%]  flex flex-col gap-[25px] items-center justify-center '>
        //         <div className='mainTitle w-fit text-transparent  text-center bg-clip-text bg-gradient-to-r from-[#39964d] to-[#4dab9f]'>
        //             <h1 className='max-[700px]:text-[30px] text-[40px] font-extrabold  '>
        //                 Elevate Your Performance Up with Us
        //             </h1>
        //         </div>
        //         <div className='flex items-center gap-[20px] text-[20px] text-[--main-blue] justify-center'>
        //             <IoMdFootball className='football' />
        //             <CiBasketball className='basketball' />
        //             <IoTennisballOutline className='tennis' />
        //             <IoShirt className='t-shirt' />
        //             <MdSportsVolleyball className='volleyball' />
        //             <CgGym className='gym' />
        //         </div>


        //     </div>
        //     <BsFillMouseFill className='mouse absolute  top-[calc(80%+50px)] translate-x-[-50%] left-[50%] text-[30px] text-[--main-blue]'/>
        // </div>


    )
}




export default HomeHero