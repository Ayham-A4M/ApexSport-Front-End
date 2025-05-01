import axios from "axios"
import toast from "react-hot-toast";
import useGetEnviroment from "../../hooks/useGetEnviroment";
const { url } = useGetEnviroment()
const SaveRegister = async (RegisterUser, setSendingReq) => {
    try {
        const res = await axios.post(`${url}/api/registerUser`, RegisterUser);
        if (res.status < 300) {
            toast.success(res.data)
            return;
        }
    } catch (err) {
        toast.error(err.response.data.msg ? err.response.data.msg : err.response.data.errors[0].msg)
        return;
    } finally {
        setSendingReq(false);
    }

}
export default SaveRegister