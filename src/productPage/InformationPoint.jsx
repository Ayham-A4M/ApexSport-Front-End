const InformationPoint = ({ infoName, value }) => {
    return (
        <li className='flex justify-start items-center gap-[10px]'>
            <span className='w-[7px] h-[7px] rounded-[100%] bg-[--main-blue]'></span>
            <span className="text-[16px] font-light">{infoName}&nbsp;:&nbsp;{value}</span>
        </li>
    )
}
export default InformationPoint