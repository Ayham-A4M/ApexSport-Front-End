import FilterAndSearch from "../Products/FilterAndSearch";
import ProductsInPage from "../Products/ProductsInPage";
const Products = ({ url, setUrl, data, totalPages }) => {

    return (
        
        <>
            <FilterAndSearch url={url} setUrl={setUrl} totalPages={totalPages} />
            <div className="contentProducts py-[10px]">
                <ProductsInPage data={data} />
            </div>
        </>
       
    )
}
export default Products