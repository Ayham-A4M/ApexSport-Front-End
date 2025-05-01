import axios from "axios"
import toast from 'react-hot-toast';
import useGetEnviroment from "../../hooks/useGetEnviroment";
const LoginProccess = async (LoginUser,userContext,setSendingReq) => {
    const {url}=useGetEnviroment();
    try {
        const res = await axios.post(`${url}/api/login`, LoginUser, { withCredentials: true });
        if (res.status < 300) {
            userContext.setUser(res.data.User);
            toast.success(res.data.msg)
            return res.data.User.Role;
        } else { throw res }
    } catch (err) {
        toast.error(err.response.data.msg)
        return;
    } finally {
        setSendingReq(false);
    }


}
export default LoginProccess