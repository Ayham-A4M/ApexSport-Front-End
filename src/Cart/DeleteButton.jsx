import { handleDeleteProductFromCart } from "./cartFunctions/handleDeleteProductFromCart"
import { useContext, useState } from "react";
import { refreshFetchProducts } from "../Cart/DisplayCart";
import { IoMdCloseCircle } from "react-icons/io";
import Loader from "../components/Loader";
function DeleteButton({ productId, customes }) {
  const refresh = useContext(refreshFetchProducts)
  const [sendingReq, setSendingReq] = useState(false)
  return (
    <>
      {
        sendingReq ? <Loader /> :
          <IoMdCloseCircle className='text-red-600 cursor-pointer text-[1em]'
            onClick={() => { setSendingReq(true); handleDeleteProductFromCart(productId, customes, refresh, setSendingReq) }}>
          </IoMdCloseCircle>
      }
    </>

  )
}

export default DeleteButton