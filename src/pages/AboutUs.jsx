import picture from '../assets/AboutUs/AboutUs.png'
import nike from '../assets/AboutUs/Brands/nike-logo.svg'
import puma from '../assets/AboutUs/Brands/puma-logo.svg'
import adidas from '../assets/AboutUs/Brands/adidas-logo.svg'
import BrandCard from "../About/BrandCard"
import SectionHeader from "../components/SectionHeader"
import UnderArmour from '../assets/AboutUs/Brands/under-armour-logo.svg'
import ContactUs from "../About/ContactUs"

const AboutUs = () => {
    return (

        <>
            <div className="contentAboutUs   flex flex-col gap-[100px]  py-[30px]">
                <div className="w-full flex  flex-row gap-[50px]">

                    <div data-aos="fade-right" className="picture max-[991px]:hidden w-[50%] flex items-center justify-center">
                        <div className="w-full h-fit">
                            <img src={picture} className="aspect-square  max-h-[650px]" />
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="InfoWhoWeAre w-[50%] max-[991px]:w-full  flex justify-center items-center">
                        <div className="flex flex-col items-start gap-[20px] max-[991px]:text-center  max-[991px]:items-center">
                            <h1 className="font-semibold text-[--main-blue] text-[30px]">Who We Are?!</h1>
                            <p className="text-[16px] font-medium" style={{ lineHeight: '35px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque, iusto harum nisi expedita quod repellendus debitisus debitis inventore earum repellat quidem accusantium sed omnis, nobis beatae dolorem illum esse consequuntur!us debitis inventore earum repellat quidem accusantium sed omnis, nobis beatae dolorem illum esse consequuntur!us debitis inventore earum repellat quidem accusantium sed omnis, nobis beatae dolorem illum esse consequuntur!us debitis inventore earum repellat quidem accusantium sed omnis, nobis beatae dolorem illum esse consequuntur! inventore earum repellat quidem accusantium sed omnis, nobis beatae dolorem illum esse consequuntur!</p>
                        </div>
                    </div>
                </div>

                <div className="OurBrands w-full  flex flex-col gap-[75px]">

                    <SectionHeader sectionName={'Our Client'} />

                    <div className=" flex flex-wrap gap-[25px] items-center w-full justify-evenly">
                        <BrandCard bgColor={'bg-blue-200'} logo={UnderArmour} name={'under armour'} />
                        <BrandCard bgColor={'bg-orange-200'} logo={adidas} name={'adidas'} />
                        <BrandCard bgColor={'bg-violet-200'} logo={nike} name={'nike'} />
                        <BrandCard bgColor={'bg-green-200'} logo={puma} name={'puma'} />
                    </div>
                </div>

                <div className="ContactUs flex flex-col w-full gap-[75px]">
                    <div className="flex justify-center items-center">
                        <SectionHeader sectionName={'contact with us'} />
                    </div>
                    <ContactUs />
                </div>
            </div>
        </>

    )
}
export default AboutUs