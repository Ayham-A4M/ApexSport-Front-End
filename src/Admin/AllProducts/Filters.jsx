import { FaSearch } from "react-icons/fa";


const Filters = ({ searchByName, setCatagory, setMaximumPrice, setMinimumPrice, setSearchByName }) => {

    const handleSearch = (value) => {
        setSearchByName(value)

    }
    const handleMinSearch = (value) => {

        setMinimumPrice(value);


    }
    const handleMaxSearch = (value) => {
        setMaximumPrice(value);

    }


    return (
        <div className="filters pb-[20px] flex items-center justify-between gap-[50px] max-[991px]:gap-[15px] max-[991px]:flex-wrap ">

            <select className="inputStyle w-[50%] max-w-[250px]  cursor-pointer" name="catagory" onChange={(e) => { setCatagory(e.target.value) }}>
                <optgroup>
                    <option value="all">all</option>
                    <option value="clothes">clothes</option>
                    <option value="shoes">shoes</option>
                    <option value="equipment">equipment</option>
                    <option value="recovery">recovery</option>
                    <option value="sport bags">sport bags</option>
                    <option value="fitness watches">fitness watches</option>
                </optgroup>
            </select>

            <div className="flex items-center gap-[10px]" >

                <input type="number" min={0} placeholder="min price" className="inputStyle placeholder:text-slate-400 max-w-[130px]" id="minimum" onChange={(e) => { handleMinSearch(e.target.value) }} />
            </div>
            <div className="flex items-center gap-[10px]" >

                <input type="number" placeholder="max price" min={0} className=" inputStyle placeholder:text-slate-400 max-w-[130px]" id="maximum" onChange={(e) => { handleMaxSearch(e.target.value) }} />
            </div>

            <div className="relative flex items-center gap-[10px]">
                <FaSearch className="absolute top-[50%] right-[5px]  text-[15px] text-[--main-blue] translate-y-[-48%]" />

                <input type="text" value={searchByName} id="search" placeholder="search..." onChange={(e) => { handleSearch(e.target.value) }} className="max-w-[300px]  inputStyle" />

            </div>
        </div>
    )
}

export default Filters