
const StatisticCard = ({ title, Value, Color }) => {
    return (
        <div className="w-[95%] max-w-[200px] hover:scale-[1.015] text-slate-100 duration-300 py-[30px] rounded-[8px] mx-auto " style={{ backgroundColor: Color }}>
            <div className="flex flex-col items-center   gap-[15px]">
                    <span className="text-[20px]">{title}</span>
                    <span className="text-[16px]">{Value}</span>
            </div>
        </div>
    )
}

export default StatisticCard