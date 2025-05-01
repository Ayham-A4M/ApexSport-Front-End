import { useNavigate } from "react-router-dom";
import handleLogout from "../Login-SignUp/Functions/handleLogout"
import { IoLogOutOutline } from "react-icons/io5";
import { useContext } from "react";
import { User } from "../App";
const LogoutButton = ({setClicked}) => {
    const  userContext=useContext(User);
    const navigate=useNavigate();
    const processLogout = () => {
        const res = handleLogout();
        if (res) {
            userContext.setUser(undefined);
            navigate('/', { replace: true });
            if(setClicked){
                setClicked(false)
            }
        }
    }
    return (
        <div className="bg-[--white-two] w-8 h-8 rounded-full flex items-center justify-center ">
            <IoLogOutOutline role="button" className="text-red-600" onClick={(e) => processLogout()  } />
        </div>
    )
}

export default LogoutButton