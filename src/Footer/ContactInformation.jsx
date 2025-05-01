import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "./Contact";
const ContactInformation = () => {
    return (
        
            <div data-aos="fade-right" className="capitalize contactInfo flex flex-col  max-[550px]:items-center text-slate-200 gap-[15px]">
                <h3 className="capitalize font-bold text-[16px]">contact info</h3>
                <Contact icon={<MdMarkEmailUnread className="text-[--main-blue]"/>} value={'EShop_Fire@gmail.com'}  />
                <Contact icon={<FaPhone className="text-[--main-blue]"/>} value={'+734--918273'}  />
                <Contact icon={<FaMapMarkerAlt className="text-[--main-blue]"/>} value={'USA_NewYork...'}  />
            </div>
        
    )
}
export default ContactInformation