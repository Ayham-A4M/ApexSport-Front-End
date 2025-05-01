import { FaShippingFast } from "react-icons/fa";
import { RxMagicWand } from "react-icons/rx"; 
import { MdHeadset } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import ServiceCard from './ServiceCard'
import SectionHeader from '../components/SectionHeader'
const Services = () => {
    return (

        <div className="Services flex flex-col gap-[100px] pt-[30px]">
            <div className="headerService flex flex-row justify-center items-center">
                <SectionHeader  sectionName={'Our Services'} />
            </div>
            <div className='flex flex-wrap justify-evenly items-stretch gap-y-[30px]'>
                <ServiceCard delay={100} bgColor={'bg-orange-200'} Icon={<FaShippingFast/>} Service={'Experience lightning-fast delivery! We ensure your orders arrive at your doorstep quickly and safely with tracking updates every step of the way'} Title={'Fast & Reliable Shipping'} />
                <ServiceCard delay={200} bgColor={'bg-pink-200'} Icon={<RxMagicWand />} Service={'Shop your way! With tailored recommendations based on your preferences, finding the perfect products has never been easier.'} Title={'Personalized Shopping Experience'} />
                <ServiceCard delay={300} bgColor={'bg-green-200'} Icon={<PiCertificateFill />} Service={'Buy with confidence! Every product is thoroughly inspected to meet high-quality standards, ensuring you receive only the best.'} Title={'Quality Assurance Guarantee'} />
                <ServiceCard delay={400} bgColor={'bg-blue-200'} Icon={<MdHeadset />} Service={'Get help anytime! Our friendly customer support team is available around the clock to assist you with any questions or concerns, no matter the time.'} Title={'24/7 Customer Support'} />
                <ServiceCard delay={500} bgColor={'bg-violet-200'} Icon={<RiSecurePaymentFill />} Service={'Shop safely and securely! We offer multiple trusted payment methods with advanced encryption to keep your transactions and personal data safe.'} Title={'Secure Payment Options'} />

            </div>
        </div>

    )
}
export default Services