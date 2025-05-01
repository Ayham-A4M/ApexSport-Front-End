import { useEffect, useState } from "react";
import useGetEnviroment from "./useGetEnviroment";
import axios from "axios";

export function useFetchProductsByCatagory(catagory) {

    const { url } = useGetEnviroment();
    const [products, setProduct] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`${url}/api/products/${catagory}`);
            if (response.status < 300) {
                setProduct(response.data)
            }
        }
        getProducts();
    }, [])

    return products 
}