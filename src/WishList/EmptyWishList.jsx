import sleep from '../assets/sleep.svg'
const EmptyWishList = () => {
  return (
      <div className='flex justify-center items-center w-full '>
                <div className='absoloute flex  items-center gap-[10px] flex-col w-fit h-fit'>
                    <span className='text-[30px] font-semibold text-slate-600'>No Items</span>
                    <img src={sleep} alt="sad-face" className='w-[200px] aspect-square' />
                </div>
            </div>
  )
}

export default EmptyWishList