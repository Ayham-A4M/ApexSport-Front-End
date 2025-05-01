const ServiceCard = ({ Icon, Service, Title, bgColor,delay }) => {
    return (
        <div data-aos="fade-in" data-aos-delay={delay} className="ServiceCard w-[90%] rounded-[6px] max-w-[230px]">
            <div  className={`hover:rotate-1  hover:scale-[1.01] duration-300  ${bgColor} px-[10px] py-[10px] rounded-[6px] hover:border-transparent`}>
                <div className="content flex flex-col gap-[10px]">
                    <div className="icon mb-[5px] flex justify-center items-center text-[60px]">
                        {Icon}
                    </div>
                    <div className="flex justify-center flex-col gap-[10px] items-center text-center">
                        <h3 className="font-medium text-[16px] text-neutral-950">{Title}</h3>
                        <span className="font-light text-[14px] text-neutral-950">{Service}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard