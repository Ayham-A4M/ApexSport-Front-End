const Contact = ({ icon, value }) => {
    return (
        <div className="flex w-fit gap-[10px] items-center">
            {icon}
            <span className="text-[14px] font-extralight">{value}</span>
        </div>

    )
}

export default Contact