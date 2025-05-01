
import LoginForm from "./LoginForm";
const LoginCard = ({ isLoginCard, setIsLoginCard }) => {
    return (
        <div className="loginCard w-[95%] max-w-[800px] px-[20px] duration-500 py-[30px] h-[500px] rounded-[8px] absolute  top-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col" style={{ left: `${isLoginCard ? '50%' : '-100%'}` }}>
            <div className="flex justify-center">
                <h1 className="text-[25px] font-bold text-slate-200 ">Login</h1>
            </div>
            <div className="max-w-[350px] p-[25px] w-[90%] bg-blue-300/60 backdrop-blur-[20px] border-[#334155eb] border-[2px] rounded-[10px] h-[200px] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                <LoginForm />
            </div>
            <div className=" w-full justify-center absolute  top-[80%] left-[50%] translate-x-[-50%] text-[12px] flex gap-[5px] text-slate-100 font-sans">
                <span>You dont have an account !!</span>
                <button className="text-slate-300 font-semibold  border-b-[2px] border-slate-300" onClick={() => { setIsLoginCard(false) }}>Sign Up</button>
            </div>

           

        </div>

    )
}

export default LoginCard