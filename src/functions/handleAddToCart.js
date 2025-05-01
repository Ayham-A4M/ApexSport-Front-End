import axios from "axios"
import useGetEnviroment from "../hooks/useGetEnviroment";
import toast from "react-hot-toast";
const handleAddToCart = async (productId, quantity, customes,setSendingReq) => {
   const { url } = useGetEnviroment();
   try {
      const res = await axios.put(`${url}/api/addToCart`, { productId, quantity,customes }, { withCredentials: true });
      if (res.statusText == "OK") {
         toast.success(res.data.msg);
      }

   } catch (err) {
      toast.error(err.response.data.msg);

   } finally {
      setSendingReq(false);
   }
}
export default handleAddToCart