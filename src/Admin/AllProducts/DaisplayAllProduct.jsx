import ProductField from "./ProductField"



const DaisplayAllProduct = ({allProducts,setProductIdForDelete}) => {
    return (
        <>
            {
                allProducts &&
                allProducts.map((ele) => (
                    <ProductField key={ele._id}   Images={ele.Images} ProductId={ele._id} ProductName={ele.ProductName} InStock={ele.InStock} Catagory={ele.Catagory} Price={ele.Price} setProductIdForDelete={setProductIdForDelete} />
                ))
            }
        </>
    )
}

export default DaisplayAllProduct