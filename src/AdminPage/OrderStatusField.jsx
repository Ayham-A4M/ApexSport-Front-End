

const OrderStatusField = ({ status, value, icon }) => {
    return (
        <div className="flex justify-between items-center text-[15px] text-[--text-color]">
            <div className="w-fit flex items-center gap-[4px]">
                <span className="lowercase">{status}</span>
                {icon}
            </div>
            <span>{value}</span>
        </div>
    )
}

export default OrderStatusField