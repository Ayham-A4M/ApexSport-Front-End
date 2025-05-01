
import InformationCard from "../AdminPage/InformationCard"
import DaisplayAllProduct from "../Admin/AllProducts/DaisplayAllProduct";
import { useEffect, useState } from "react";
import useGetEnviroment from "../hooks/useGetEnviroment";
import Filters from "../Admin/AllProducts/Filters";
import axios from "axios";
import toast from "react-hot-toast";
import DeletePopUp from "../Admin/AllProducts/DeletePopUp";
import ProductNotFound from "../Products/ProductNotFound";
import { useDebounce } from "use-debounce";
import ControllingPage from "../components/ControllingPage";
const AllProducts = () => {
    const { url } = useGetEnviroment()
    const [allProducts, setAllProducts] = useState(null);
    const [catagory, setCatagory] = useState('all');
    const [searchByName, setSearchByName] = useState('');
    const [minimumPrice, setMinimumPrice] = useState(0);
    const [maximumPrice, setMaximumPrice] = useState(10000000);
    const [productIdForDelete, setProductIdForDelete] = useState(null);
    const [searchByNameDebounce]=useDebounce(searchByName,2000);
    const [minPriceDebounce]=useDebounce(minimumPrice,2000);
    const [maxPriceDebounce]=useDebounce(maximumPrice,2000);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1);
    const [refetch,setRefetch]=useState(true);
    
    const handleIncreasePage = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)

        }
    }

    const handleDecreasePage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);

        }
    }
  
    useEffect(() => {
        const fetchAllProducts = async () => {
          
            try {
                const response = await axios.get(`${url}/api/allProducts/?catagory=${catagory}&name=${searchByName}&minPrice=${minimumPrice}&maxPrice=${maximumPrice}&page=${page}`);
                if (response.status < 300) {
                    setAllProducts(response.data.allProducts);
                    setTotalPages(response.data.totalPages);
                }
                else
                    throw response
            } catch (err) {
                err?.response?.data?.msg ? toast.error(err.response.data.msg) : toast.error('server error');
            }
        }
        
            fetchAllProducts();
    }, [searchByNameDebounce,minPriceDebounce,maxPriceDebounce,catagory,page,refetch])


    return (
        <div className="py-[50px] relative flex flex-col gap-[30px]">
            <Filters searchByName={searchByName}  setMinimumPrice={setMinimumPrice} setCatagory={setCatagory} setMaximumPrice={setMaximumPrice} setSearchByName={setSearchByName} />
            <InformationCard title={'All Products'} overflow={'scroll'} >

                <div className="grid grid-cols-7 font-semibold text-blue-800 p-[10px]">
                    <span className="">image</span>
                    <span className=" flex justify-center">product name</span>
                    <span className=" flex justify-center">in stock</span>
                    <span className=" flex justify-center">price</span>
                    <span className=" flex justify-center">catagoty</span>
                    <span className=" flex justify-center">edit</span>
                    <span className=" flex justify-center">delete</span>
                </div>
                {
                    allProducts&&
                    allProducts.length?<DaisplayAllProduct allProducts={allProducts} setProductIdForDelete={setProductIdForDelete} />:<ProductNotFound/>
                }
                
            </InformationCard>
            <ControllingPage handleDecreasePage={handleDecreasePage} handleIncreasePage={handleIncreasePage} page={page}/>
            {
                productIdForDelete &&
                <DeletePopUp productIdForDelete={productIdForDelete} setRefetch={setRefetch} setProductIdForDelete={setProductIdForDelete} />
            }
        </div>

    )
}

export default AllProducts