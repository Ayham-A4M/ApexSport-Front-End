import '../productPage/productPage.css'
import ImageSection from '../productPage/ImagesSection';
import ProductInformation from '../productPage/ProductInformation';
import SimilarProducts from '../productPage/SimilarProducts';

import { useContext } from 'react';
import { User } from '../App';
import LoadingPage from './LoadingPage';
import { useGetProductDataAndSimilarProducts } from '../hooks/useGetProductDataAndSimilarProducts';

function ProductPage() {
    const userContext = useContext(User);
    const { getData, data, similarProduct } = useGetProductDataAndSimilarProducts()
    return (
        <div className="productPage text-[--text-color] ">
            {getData ? <LoadingPage /> :

                (userContext.user) ? (
                    <div className='flex flex-col gap-[100px]'>
                        <div className="containerProductPage items-center w-full flex flex-row gap-[50px]">
                            {data && <ImageSection images={data.Images} />}
                            {data && <ProductInformation data={data} />}
                        </div>
                        <div>
                            <div className='py-[40px]'>
                                <h2 className='px-[30px] w-fit py-[7px] bg-black text-slate-200 rounded-[4px]'>Similar Products</h2>
                            </div>
                            {
                                similarProduct && <SimilarProducts similarProducts={similarProduct} />
                            }
                        </div>
                    </div>
                ) : (<h1 className='text-black'>You cant Access Here Login please</h1>)
            }
        </div >

    )
}

export default ProductPage