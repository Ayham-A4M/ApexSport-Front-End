import srcImage from "../functions/srcImage"
import { isThereDiscount } from "../functions/isThereDiscount"
import DeleteButton from "./DeleteButton"


const ProductCartInformationCard = ({ product }) => {
    const getPrice = () => {
        return isThereDiscount(product.discount) ? product.priceAfterDiscount : product.productPrice
    }

    return (
        <div className="group relative flex gap-5 p-5 w-full items-center bg-white rounded-2xl shadow-[0_4px_10px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100/80 hover:border-gray-200 overflow-hidden">       
            <div className="relative  overflow-hidden rounded-xl w-24 h-24 flex-shrink-0 border border-gray-200 group-hover:border-[--main-blue] transition-all duration-500 shadow-sm hover:shadow-md">
                <img
                    src={srcImage(product.image)}
                    alt="productImage"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* --- Product Details (Flexible Layout) --- */}
            <div className="relative  flex flex-col md:flex-row flex-1 items-start md:items-center gap-4 md:gap-6">

                {/* --- Core Product Info --- */}
                <div className="flex-1  space-y-1.5">
                    <h3 className="text-[17px] font-semibold text-gray-900">
                        {product.productName}
                    </h3>
                    <span className="text-xs text-gray-500/90 font-medium">Quantity: {product.quantity}</span>

                    {/* --- Customizations (Pill Badges) --- */}
                    {product.customes.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {product.customes.map((e, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-[--main-blue] border-[1px] border-[--main-blue] hover:bg-[--main-blue]/10 transition-colors"
                                >
                                    {e.customeName}: <span className="ml-1 font-semibold">{e.option}</span>
                                </span>
                            ))}
                        </div>
                    )}
                </div>              
                <div className="flex flex-col items-end space-y-2.5">
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-gray-500">{getPrice()}</span>
                        <span className="text-[18px] font-bold text-gray-900 tracking-tight">
                            ${(product.quantity * parseFloat(getPrice())).toFixed(2)}
                        </span>
                    </div>
                    <DeleteButton
                        productId={product.productId}
                        customes={product.customes}
                        className="opacity-0 group-hover:opacity-100  translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out"
                    />
                </div>
            </div>

            
        </div>
    )
}
export default ProductCartInformationCard