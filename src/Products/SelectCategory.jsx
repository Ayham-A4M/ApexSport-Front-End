

const SelectCategory = ({ setPage, setCatagory }) => {
    const handleSelect = (value) => {
        setCatagory(value);
        setPage(1)
    }

    return (
        <div className="flex w-full items-center justify-center">
            <select className="outline-none inputStyle w-[50%] max-w-[200px]  cursor-pointer  border-[#ababab] focus:border-[--main-blue] " name="catagory" onChange={(e) => { handleSelect(e.target.value) }}>
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
        </div>
    )
}

export default SelectCategory