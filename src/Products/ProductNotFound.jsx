import linkBroken from '../assets/linkBroken.svg'
function ProductNotFound() {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='absoloute flex  items-center gap-[20px] flex-col w-fit h-fit'>
                <span className='text-[30px] font-semibold text-slate-600'>Product not found </span>
                <img src={linkBroken} alt="sad-face" className='w-[175px] aspect-square' />
            </div>
        </div>
    )
}

export default ProductNotFound