const Quanty = ({quanty,setQuanty,inStock}) => {
    return (
        <div className="Quanty ">
            <div className="flex items-center w-[100px] justify-between bg-slate-300 ">
                <div className="w-[30%] flex py-[5px] justify-center items-center h-full bg-slate-500 text-black font-bold text-[15px]">
                    <button onClick={() => { quanty < inStock? setQuanty(quanty + 1) : false }}>+</button>
                </div>
                <span className="text-black font-semibold">{quanty}</span>
                <div className="w-[30%] py-[5px] flex justify-center items-center h-full bg-slate-500 text-black font-bold text-[15px]">
                    <button onClick={() => { quanty > 1 ? setQuanty(quanty - 1) : false }}> &minus;</button>
                </div>
            </div>
        </div>
    )
}

export default Quanty