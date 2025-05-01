import ProductCartInformationCard from "./ProductCartInformationCard"
import { v4 as uuidv4 } from 'uuid';
const ProductsInCart = ({productsCart}) => {
    return (
        <>
            {
                productsCart && productsCart.map((product) => (
                    <ProductCartInformationCard product={product} key={uuidv4()} />
                ))
            }
        </>
    )
}

export default ProductsInCart