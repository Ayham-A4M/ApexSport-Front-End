import logoutProccess from "./logoutProccess";


const handleLogout = async () => {

    const isLoggedout_Successfully = await logoutProccess();
    
    return isLoggedout_Successfully;

}

export default handleLogout