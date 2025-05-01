import useGetEnviroment from "../../hooks/useGetEnviroment";
export const handleSearch = (value, catagory, page,setUrl) => {
    const {url}=useGetEnviroment();
    if (value != "" || (catagory))
        setUrl(`${url}/api/products/?name=${value}&catagory=${catagory}&page=${page}`);
    else
        setUrl(`${url}/api/products`)
    return true;
}