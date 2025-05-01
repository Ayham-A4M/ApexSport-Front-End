const SectionHeader = ({ sectionName }) => {

    return (

        <div className="relative py-[5px] overflow-hidden">
            <h2 className="text-5xl max-[600px]:text-4xl font-bold text-center uppercase tracking-tighter relative ">
                <span className="relative inline-block">
                    <span
                        className="bg-clip-text text-transparent bg-[#6570a2]  drop-shadow-[0_2px_0px_rgba(74,56,101,0.3)]" >
                        {sectionName}
                    </span>
                </span>
            </h2>

            {/* for shape unde the title */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 h-2 rotate-45 bg-[--main-blue] opacity-90 animate-ping"
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                ))}
            </div>
        </div>

    )
}
export default SectionHeader