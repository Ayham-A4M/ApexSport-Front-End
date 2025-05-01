import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductsByCatagory } from "../productPage/functions/fetchProductsByCatagory";
import { fetchProductByID } from "../Products/productsFunctions/fetchProductByID";
export function useGetProductDataAndSimilarProducts() {
    const urlParams = new URLSearchParams(window.location.search)
    const location = useLocation();
    const [data, setData] = useState(undefined);
    const [similarProduct, setSimilarProduct] = useState(undefined);
    const [getData, setGetData] = useState(true);
    useEffect(() => {
        setGetData(true);
        const fetchData = async () => {
            const id = urlParams.get('ProductId')
            const res = await fetchProductByID(id);
            setData(res);
            const response = await fetchProductsByCatagory(res.Catagory);
            setSimilarProduct(response);
            setGetData(false);
        }
        fetchData();
        window.scrollTo({ top: 0 })
    }, [location.search])
    return {getData,data,similarProduct}
}

