import { useState } from "react";
import InformationPoint from "./InformationPoint"
import Quanty from "./Quanty";
import AddToCartBtn from "./AddToCartBtn";
import Customes from "./Customes";
import BulletList from "./BulletList";
import { isThereDiscount } from "../functions/isThereDiscount";
const ProductInformation = ({ data }) => {
    const [quanty, setQuanty] = useState(1);
    const [customes, setCustomes] = useState([]); //{customeName:'size',value:'large'}....
    const getPrice = () => {
        return  parseFloat(data.PriceAfterDiscount) 
    }
    const BulletInformation=()=>{
        const arrayOfBulletInformation=[
            {infoName:'catagory',value:data.Catagory},
            {infoName:'in stock',value:data.InStock ? data.InStock : 'Not avaliable'},
            {infoName:'weight',value:data.Weight + 'g'},
            {infoName:'brand',value:data.Brand},
            {infoName:'discount',value:isThereDiscount(data.DiscountPercentage) ? data.DiscountPercentage : 'No'}         
        ]
        return arrayOfBulletInformation
    }



    return (
        <div className="productInformationSection text-[--text-color] w-[54%] pt-[50px] max-[650px]:pt-[0px]">
            <div className='w-full h-full flex flex-col items-start gap-[20px] text-[--text-color]'>
                <div className='NameProduct flex flex-col gap-[10px] font-serif'>
                    <h1 className='text-[40px] max-[600px]:text-[30px] font-semibold'>{data.ProductName}</h1>
                </div>
                <div className='Description w-full max-w-[600px] break-words'>
                    <p className="font-medium w-full text-[16px]">{data.Description}</p>
                </div>
                <BulletList ArrayOfBullet={BulletInformation()}/>
                <Customes CustomeArray={data.Custome} customes={customes} setCustomes={setCustomes}/>

                <div className="pt-[50px] w-full flex-wrap gap-y-[10px]  flex justify-between items-center">
                    {
                        data.InStock ?
                            <>
                                <AddToCartBtn quantity={quanty} productId={data._id} customes={customes} requiredLength={data.Custome?.length || 0} />
                                <Quanty quanty={quanty} setQuanty={setQuanty} inStock={data.InStock} />
                            </> : false

                    }
                    <div className="flex w-fit gap-[5px]">
                        <span className="font-semibol text-[16px]">Price:</span>
                        <span className="font-extralight text-green-500 text-[16px] font-[cursive]">{(getPrice() * quanty).toFixed(2)}$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductInformation