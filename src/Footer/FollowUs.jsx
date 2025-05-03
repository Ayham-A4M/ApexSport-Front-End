import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
const FollowUs = () => {
    return (
        <div className="FollowUs flex items-center flex-col gap-[25px] text-slate-200">
            <h2 className="capitalize font-bold text-[18px] ">Follow Us</h2>
            <div className="flex felx-row gap-[15px] flex-wrap justify-center items-center">
                <a href="" data-aos="fade-in" data-aos-delay="100" className="text-[25px]"><FaInstagram className="hover:text-pink-600" /></a>
                <a href="" data-aos="fade-in" data-aos-delay="200" className="text-[25px]"><FaXTwitter className="hover:text-gray-500" /></a>
                <a href="" data-aos="fade-in" data-aos-delay="300" className="text-[25px]"><FaFacebookSquare className="hover:text-blue-600" /></a>
                <a href="" data-aos="fade-in" data-aos-delay="400" className="text-[25px]"><IoLogoWhatsapp className="hover:text-green-500" /></a>
                <a href="" data-aos="fade-in" data-aos-delay="500" className="text-[25px]"><IoLogoLinkedin className="hover:text-blue-500" /></a>
            </div>
            <span className="text-[20px] font-bold font-[Lemonada]">ApexSport</span>
        </div>
    )
}
export default FollowUs