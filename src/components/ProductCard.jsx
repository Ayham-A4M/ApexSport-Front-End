import { useNavigate } from 'react-router-dom';
import WishListHeart from '../ProductCard/WishListHeart';
import { IoEye } from "react-icons/io5";
import { User } from '../App';
import { isThereDiscount } from '../functions/isThereDiscount';
import { useContext } from 'react';
import InStockCircle from '../ProductCard/InStockCircle';
import useGetEnviroment from '../hooks/useGetEnviroment';

const ProductCard = ({ wishListStatus, pic, name, price, inStock, prdouctID, discount, priceAfterDiscount }) => {
    const navigate = useNavigate();
    const userContext = useContext(User);
    const { url } = useGetEnviroment()

    return (
        <div className=" group productCard relative shrink-0  w-[95%] max-w-[300px] duration-200 px-[10px] py-[7px] h-[360px] rounded-[3px] bg-[--card-background]">
            <div className="containerProduct flex flex-col gap-[15px] w-full">
                <div className="image border-[1px] py-[2px] border-gray-400 rounded-[4px]">
                    <img src={pic} alt="" className="w-full object-contain aspect-[16/9]" loading="lazy" />
                </div>
                <div className="flex flex-col relative gap-[10px]">
                    <div className="flex flex-col gap-[10px]">
                        <div className='flex gap-[20px] items-center'>
                            {
                                isThereDiscount(discount) ?
                                    <span className='text-gray-500 line-through'>{price}</span> : false
                            }
                            <span className=" text-[25px] font-bold text-green-500">{isThereDiscount(discount) ? priceAfterDiscount : price}</span>
                        </div>
                        <span className=" font-normal text-[19px] text-[--text-color]">{name}</span>
                        <span className=" font-extralight text-[16px] text-slate-700">{`Stock : ${inStock}`}</span>
                        <InStockCircle inStock={inStock} />
                    </div>
                    <div className='opacity-0 group-hover:opacity-100 absolute flex flex-col gap-[10px] transition-all top-[50%] right-0  w-fit h-fit'>
                        <WishListHeart wishListStatus={wishListStatus} prdouctID={prdouctID} />
                        <IoEye className='text-[15px] cursor-pointer' onClick={() => { navigate(`/product/?ProductId=${prdouctID}`, { replace: true }) }} />
                    </div>
                    {isThereDiscount(discount) ?
                        <span className='px-[11px] text-[9px] py-[3px] rounded-[3px] bg-black text-slate-200 absolute right-0 top-[20%]'>{`save ${discount}`}</span>
                        : false
                    }
                </div>

            </div>
        </div>
    )
}
export default ProductCard