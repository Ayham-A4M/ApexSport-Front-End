import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import useGetEnviroment from "./useGetEnviroment";
function useFetchProductsCart() {
    const [productsCart, setProductsCart] = useState(null);
    const [refreshFetch, setRefreshFetch] = useState(true);
    const { url } = useGetEnviroment();
    useEffect(() => {
        async function fetching() {
            try {
                const response = await axios.get(`${url}/api/productsCart`, { withCredentials: true });
                if (response) {
                    setProductsCart(response.data)
                }
            } catch (err) {
                setProductsCart(undefined);
            } finally {
                setRefreshFetch(false);
            }


        }
        if (refreshFetch)
            fetching();
    }, [refreshFetch]);

    const subTotalPrice = useMemo(() => {
        if (productsCart) {
            let SubTotal = 0;
            productsCart.forEach((product) => { SubTotal += parseFloat(product.priceAfterDiscount) * product.quantity })
            return SubTotal;
        }

    }, [refreshFetch])
    return { productsCart, setRefreshFetch, subTotalPrice }
}

export default useFetchProductsCart