import { HiLightBulb } from "react-icons/hi";
const InformationLine = ({icon,title,value}) => {
    return (
        <span className='flex items-center justify-start gap-[5px]'>{icon}{`${title} : ${value}`}</span>

    )
}

export default InformationLine