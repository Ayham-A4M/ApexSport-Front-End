import SectionHeader from "../components/SectionHeader"
import NewEditMangment from "../MangmentProduct/New_Edit_Product"
const MangmentProduct = () => {
const productId = new URLSearchParams(window.location.search).get('productId');
    return (
        <div className=" flex flex-col gap-y-[40px] min-h-[100vh] mt-[50px]  ">
                <SectionHeader sectionName={`${productId?'Edit Product':'New Product'}`}  /> 
            <div>
                <NewEditMangment productId={productId} />
            </div>
        </div>
    )
}

export default MangmentProduct