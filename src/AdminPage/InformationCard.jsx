function InformationCard(props) {
    return (
        <div className="informationCard w-full scrollSlide  bg-slate-200 min-h-[250px] flex pb-[15px] flex-col rounded-[6px] justify-start"  style={{overflowX:`${props.overflow?'auto':'unset'}`}} >
            <div className="heade w-full h-fit py-[10px] border-b-2 border-slate-600 pl-[15px]  text-[18px] font-semibold text-blue-800">
                <h1>{props.title}</h1>
            </div>
            <div className="chileds px-[15px]"style={{minWidth:`${props.overflow?'900px':'none'}`}}>
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default InformationCard