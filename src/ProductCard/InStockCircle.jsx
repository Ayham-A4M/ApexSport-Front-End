const InStockCircle = ({ inStock }) => {
    return (
        <>
            {
                inStock > 0 ?
                    <span className="px-[15px] absolute  right-0 top-[100%] flex text-[10px] font-bold justify-center items-center w-[50px] rounded-full h-[50px] py-[3px] bg-green-500  text-slate-200">{`Available`}</span>
                    :
                    <span className="px-[15px] flex text-[10px] absolute right-0 top-[100%] font-bold justify-center items-center w-[50px] rounded-full h-[50px] py-[3px] bg-red-500  text-slate-200">{`Out`}</span>
            }
        </>
    )
}

export default InStockCircle