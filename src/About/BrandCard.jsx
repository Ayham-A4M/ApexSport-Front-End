import './AboutUs.css'
const BrandCard=({logo,name,bgColor})=>{
    return (
            <div className={`BrandCard duration-300 w-fit h-fit py-[20px] flex flex-col ${bgColor} justify-center items-center gap-[15px] px-[30px]  rounded-[6px]`}>
                <div className="image w-[150px] aspect-square">
                    <img src={logo} alt="logo" />
                </div>
                <span className="font-medium text-[18px] text-stone-800 capitalize">{name}</span>
            </div>
    )
}
export default BrandCard