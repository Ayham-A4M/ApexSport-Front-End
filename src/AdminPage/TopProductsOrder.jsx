import InformationCard from "./InformationCard"
import srcImage from "../functions/srcImage"
const TopProductsOrder = ({ topProducts }) => {
    return (
        <InformationCard title={'most 3 products orderd'}>

            <div className="flex pt-[10px] flex-col gap-[20px]  w-full pr-[10px] text-[15px] text-black">
                <div className="flex font-semibold text-blue-800 p-[10px] justify-between items-center">
                    <span>image</span>
                    <span className="pl-[30px]">product name</span>
                    <span>orders</span>
                    
                </div>
                {
                    topProducts && topProducts.map((product) => (
                        <div className="flex p-[10px] justify-between items-center  " key={product._id}>
                            <div className="image flex items-center justify-center w-fit rounded-full border-[1px] border-gray-500">
                                <img src={srcImage(product.Images[0])} alt="productImage" className="w-[50px] h-[50px] rounded-full" />
                            </div>
                            <span>{product.ProductName}</span>
                            <span>{product.NumberOfOrder}</span>
                            
                        </div>
                    ))
                }
            </div>


        </InformationCard>
    )
}

export default TopProductsOrder