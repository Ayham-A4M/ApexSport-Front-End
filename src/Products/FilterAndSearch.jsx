import { useEffect, useState } from "react"
import SelectCategory from "./SelectCategory";
import { handleSearch } from "./productsFunctions/handleSearch";
import { CiFilter } from "react-icons/ci";
import { useDebounce } from 'use-debounce';
import ControllingPage from "../components/ControllingPage";

const FilterAndSearch = ({ url, setUrl, totalPages }) => {
    const [page, setPage] = useState(parseInt(url.split('=')[1]) || 1);

    const handleIncreasePage = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)
            handleSearch(debounceSearch, catagory, page + 1, setUrl);
        }
    }

    const handleDecreasePage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
            handleSearch(debounceSearch, catagory, page - 1, setUrl);
        }
    }
    const [searchValue, setSearchValue] = useState('');
    const [catagory, setCatagory] = useState('all');
    const [debounceSearch] = useDebounce(searchValue, 1000);
    useEffect(() => {
        handleSearch(debounceSearch, catagory, page, setUrl);
    }, [debounceSearch, catagory])
    return (
        <div className="filter w-full py-[50px] flex flex-col gap-[20px] justify-center items-center">
            <div className="flex w-full items-center justify-between max-[750px]:flex-wrap gap-y-[20px]">
                <div className="flex justify-center w-full gap-[15px] items-center">
                    <CiFilter className="text-[30px] text-[--main-blue]" />
                    <input type="search" placeholder="Search by title of product ...."
                        className="inputStyle w-[95%] max-w-[400px]" onChange={(e) => {
                            setSearchValue(e.target.value);
                        }} />
                </div>
                <SelectCategory setPage={setPage} setCatagory={setCatagory}/>

            </div>
            <ControllingPage handleDecreasePage={handleDecreasePage} handleIncreasePage={handleIncreasePage} page={page}/>
        </div>
    )
}
export default FilterAndSearch