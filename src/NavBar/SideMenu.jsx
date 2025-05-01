import { useContext } from "react";
import Log_in_Out from "./Log_in_Out";
import { User } from "../App";
import { userDirections,adminDirections } from "./Directions";
import DirectionsLinks from "./DirectionsLinks";

const SideMenue = ({ clicked, setClicked }) => {
    const userContext = useContext(User);
  
    return (

        <div className="MenuSideLinks  flex flex-col bg-[--dark-blue] pt-[20px]   w-full h-[calc(100vh-71px)] justify-start items-center absolute top-[71px] duration-500 left-[-100%]" style={{ left: (clicked ? '0px' : '-100%') }}>
            <DirectionsLinks setClicked={setClicked} directions={(!userContext.user || userContext.user.Role === "user")?userDirections:userContext.user.Role==="Admin"?adminDirections:false}/>   
            <div className="flex justify-between py-[13px] flex-col items-center h-full">
                <Log_in_Out setClicked={setClicked} userContext={userContext}/>
                <span className="font-normal text-[10px] text-[--white-one]">developed by Ayham Abo Ajeeb :)</span>
            </div>

        </div>



    )
}
export default SideMenue