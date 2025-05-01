import axios from "axios";
import { useEffect, useState } from "react";
import useGetEnviroment from "./useGetEnviroment";
export function useFetchProductsData(isLoading,Role) {
    const [data, setData] = useState(null);
    const enviroment = useGetEnviroment();
    // console.log(u)
    const [url, setUrl] = useState(`${enviroment.url}/api/products`)
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
   
           (!isLoading&&(Role===null||Role==="user"))?
                axios.get(url).then((response) => {
                    if (response) {
                        setData(response.data.products);
                        setTotalPages(response.data.totalPages)
                    }
                    console.log('data fetched:-)', response);
                }) : false
     
        
    }, [url])
    return { data, setData, url, setUrl, totalPages }
}