import { MdDeleteSweep } from "react-icons/md";
import srcImage from "../../functions/srcImage"

import { useNavigate } from "react-router-dom";




const ProductField = ({Images,ProductName,InStock,ProductId,Catagory,Price,setProductIdForDelete}) => {
    const navigate=useNavigate();
    return (
        <div className="grid  grid-cols-7 justify-end p-[10px] items-center  ">
            <div className="image flex items-center justify-center w-fit rounded-full border-[1px] border-gray-500">
                <img src={srcImage(Images[0])} alt="productImage" className="w-[50px] h-[50px] rounded-full" />
            </div>

            <span className="flex justify-center">{ProductName}</span>
            <span className="flex justify-center">{InStock}</span>
            <span className="flex justify-center">{Price}</span>
            <span className="flex justify-center">{Catagory}</span>

            <div className="flex justify-center items-center">
                <button className="w-fit hover:bg-slate-600 duration-200  bg-slate-500 text-slate-100  px-[20px] py-[4px] rounded-[4px]"
                    onClick={(e)=>{e.preventDefault();navigate(`/mangmentProduct/?productId=${ProductId}`)}}               
                >Edit</button>
            </div>
            <div className="flex justify-center items-center">
                <MdDeleteSweep className="text-[25px] text-red-500 hover:text-red-600 duration-200" role="button" onClick={()=>{setProductIdForDelete(ProductId)}}/>
            </div>


        </div>
    )
}

export default ProductField