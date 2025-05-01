
import { Link } from "react-router-dom"
const LoginButton = () => {
    return (

        <Link to="/login" className=' px-4 py-1  rounded-full bg-[--white-two] text-[--main-blue] font-medium text-[15px]'>
            <span>Login</span>
        </Link>
    )
}

export default LoginButton