import SummaryItem from "./SummaryItem";
function Summary({ productNumber, subTotalPrice, setShowPopUp }) {
    const Tax = 0.05;

    const handleClickCheckOut = (e) => {
        e.preventDefault()
        setShowPopUp(true);
    }
    return (
        <div className="w-[95%] max-w-[500px] px-[20px] py-[15px] h-fit rounded-[4px] bg-zinc-800 ">
            <div className="flex  flex-col text-[18px]  text-slate-200 font-semibold">
                <h2 className="text-center text-[22px] border-b-2 border-slate-200 pb-[5px]">Summary</h2>
                <SummaryItem name={'Elements :'} value={productNumber} />
                <SummaryItem name={'SubTotal :'} value={`$${subTotalPrice}`} />
                <SummaryItem name={`Tax : ${Tax * 100}% `} value={`$${(subTotalPrice * Tax).toFixed(2)}`} />
                <SummaryItem name={'Total : '} value={`$${((subTotalPrice * Tax) + subTotalPrice).toFixed(2)}`} />
            </div>
            <div className="flex justify-center items-center  text-[--text-color] pt-[10px] font-semibold">
                <button className="w-fit px-[25px] py-[4px] rounded-[5px]  bg-slate-200 " onClick={(e) => { handleClickCheckOut(e) }}>Check Out</button>
            </div>
        </div>
    )
}

export default Summary