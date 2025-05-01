import InformationCard from "./InformationCard"
import messageLottie from "../assets/Adminpage/messageAdmin.json"
import Lottie from "lottie-react";

function WelcomeAmdin() {
    return (
        <InformationCard title={'Welcome, Admin!'}>
            <div className="flex flex-col gap-[20px]">
                <div className="w-full flex justify-center">
                    <div>
                        <Lottie className="aspect-[7/2]" animationData={messageLottie} loop={true} />
                    </div>
                </div>
                <div className="description text-slate-800 flex flex-col gap-[15px]">
                    <p className="text-[15px]">
                        You have full control over the ecommerce platform. Below are the key functionalities available to you:

                        Manage Products: Perform CRUD operations Create, Read, Update, Delete  on product listings to keep the store up to date.
                        View Statistics: Track sales, user activity, and other important metrics to analyze the performance of the store.
                        
                    </p>
                    <span className="text-[20px] font-bold">Enjoy managing your store!</span>
                </div>

            </div>
        </InformationCard>
    )
}

export default WelcomeAmdin