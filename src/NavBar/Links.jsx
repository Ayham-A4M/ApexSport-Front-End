import Log_in_Out from "./Log_in_Out";
import { useContext } from "react";
import { User } from "../App";
import DirectionsLinks from "./DirectionsLinks";
import { userDirections, adminDirections } from "./Directions"

const Links = () => {

    const userContext = useContext(User);


    return (
        <div className="links w-fit flex shrink flex-row items-center gap-[10px] max-[850px]:hidden">
            <DirectionsLinks directions={(!userContext.user || userContext.user.Role === "user") ? userDirections : userContext.user.Role === "Admin" ? adminDirections : false} />
            <Log_in_Out />

        </div>
    )
}
export default Links