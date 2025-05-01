import emptyCart from '../assets/emptyCart.svg'

function CartIsEmpty() {
    return (
        <div className='flex justify-center items-center w-full '>
            <div className='absoloute flex  items-center gap-[20px] flex-col w-fit h-fit'>
                <span className='text-[30px] font-semibold text-slate-600'>Cart is empty</span>
                <img src={emptyCart} alt="sad-face" className='w-[200px] aspect-square' />
            </div>
        </div>
    )
}

export default CartIsEmpty