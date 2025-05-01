import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"
import { useContext } from "react"
import { User } from "../App"
const Log_in_Out = ({ setClicked }) => {
    const userContext = useContext(User);
    return (
        <>
            {
                setClicked ?
                    (userContext.user) ?
                        <LogoutButton setClicked={setClicked} />
                        :
                        <LoginButton />
                    :
                    (userContext.user) ?
                        <LogoutButton setClicked={setClicked} />
                        :
                        <LoginButton />
            }

        </>
    )
}

export default Log_in_Out