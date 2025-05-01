import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"

const Log_in_Out = ({ setClicked,userContext }) => {
   
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