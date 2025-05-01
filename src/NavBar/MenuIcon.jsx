
const MenueIcon = ({clicked,setClicked}) => {
    return (
        <div className="MenueIcon hidden cursor-pointer  w-fit flex-col gap-[8px]" style={{ transform: (clicked ? 'translateY(-4px)' : 'translateY(0px)') }} onClick={() => setClicked(!clicked)}>
            <span className="w-[25px] h-[3px] rounded-[5px] bg-[--white-two] duration-500" style={{
                'rotate': (clicked ? '45deg' : '0deg'),
                transform: (clicked ? 'translate(8px, 8px)' : 'translate(0px, 0px)')
            }}></span>
            <span className="w-[25px] h-[3px] rounded-[5px] bg-[--white-two] duration-500" style={{ 'rotate': (clicked ? '-45deg' : '0deg') }}></span>

        </div>
    )
}
export default MenueIcon