import InformationCard from "./InformationCard"
import Attention from "../assets/Adminpage/attentionSupport.json"
import Lottie from "lottie-react";

function SupportAdmin() {
    return (
        <InformationCard title={'Support'}>
            <div className="flex flex-col gap-[20px]">
                <div className="w-full flex justify-center">
                    <div>
                        <Lottie className="w-[60px] rotate-[-80deg]" animationData={Attention} loop={true} />
                        <Lottie className="w-[60px] rotate-[-80deg]" animationData={Attention} loop={true} />
                        
                    </div>
                </div>
                <div className="description text-slate-800 flex flex-col gap-[15px]">
                    <p className="text-[15px]">
                        If you need any assistance or face any issues, feel free to reach out via email or chat, and our support team will be happy to help.
                    </p>
                    <span>Email:jkadjk@.com</span>
                    <span className="text-[20px] font-bold">Enjoy managing your store!</span>
                </div>

            </div>
        </InformationCard>
    )
}

export default SupportAdmin