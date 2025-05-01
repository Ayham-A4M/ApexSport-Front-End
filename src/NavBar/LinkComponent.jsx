import { NavLink } from "react-router-dom"
function LinkComponent({ dierction, name, icon, setClicked }) {
    return (
      
        <NavLink onClick={() => { setClicked ? setClicked(false) : false }} to={dierction} className={({ isActive }) => `px-[15px] py-[6px] hover:bg-white/15 rounded-[10px]  text-white relative text-[15px] font-medium flex flex-row items-center w-fit gap-[5px] ${isActive ? 'bg-white/15' : 'text-[--text-color]'}`}>
            <span>{name}</span>
            {icon}
        </NavLink>
    )
}

export default LinkComponent