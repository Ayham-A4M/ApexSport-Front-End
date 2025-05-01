import { useState } from "react"
import LoginCard from "../Login-SignUp/Login/LoginCard"
// import SignUpForm from "../Login-SignUp/SignUp/SignUpForm";
import SignUpCard from "../Login-SignUp/SignUp/SignUpCard";
const Login = () => {
    const [isLoginCard, setIsLoginCard] = useState(false);
    return (
        <div className="Login-SignUp min-h-[100vh] md:px-[100px] px-[20px] py-[30px] relative">
            <LoginCard isLoginCard={isLoginCard} setIsLoginCard={setIsLoginCard} />
            <SignUpCard isLoginCard={isLoginCard} setIsLoginCard={setIsLoginCard} />
        </div>
    )
}
export default Login