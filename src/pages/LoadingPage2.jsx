const LoadingPage2 = () => {
    return (
        <div className="w-full h-screen flex flex-col py-[100px] justify-center items-center gap-[20px]">
            <span className="text-[--main-blue] font-medium text-[20px]">Just a moment</span>
            <div className="flex w-fit items-center justify-center gap-[20px]">
                <span className="w-[10px] h-[10px] rounded-full bg-[--main-blue]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[--main-blue]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[--main-blue]"></span>
            </div>

        </div>
    )
}

export default LoadingPage2