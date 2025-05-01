import ContactInformation from "../Footer/ContactInformation"
import '../Footer/Footer.css'
import FollowUs from "../Footer/FollowUs"
import Legal from "../Footer/Legal"
const Footer = () => {
    return (
        <div className="Footer md:px-[100px] px-[20px] py-[25px] bg-[--dark-blue]" >
            <div className="contentFooter w-full flex flex-row max-[550px]:flex-col max-[550px]:items-center gap-[30px] justify-between pb-[20px]">
                <ContactInformation />
                <FollowUs />
                <Legal />

            </div>
            <div className="flex justify-center border-t-[2px] border-t-[--main-blue] border-[--main-blue]">
                <p className="font-light font-sans text-[15px] text-slate-200 pt-[20px]">&copy; developed by Ayham Abo Ajeeb</p>
            </div>
        </div>
    )
}
export default Footer