
import SignUpForm from '../SignUp/SignUpForm';

const SignUpCard = ({ isLoginCard, setIsLoginCard }) => {
  
    return (
        <div className="SignUpCard w-[95%] max-w-[800px] px-[20px] py-[30px] h-[550px] rounded-[8px] duration-500 absolute  top-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col" style={{ left: `${isLoginCard ? '150%' : '50%'}` }}>
            <div className="flex justify-center">
                <h1 className="text-[25px] font-bold text-slate-200 ">Sign Up</h1>
            </div>
            <div className="max-w-[350px] p-[25px] pb-[40px] w-[90%] bg-blue-300/60  backdrop-blur-[20px] border-[#334155eb] border-[2px] rounded-[10px]  absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                <SignUpForm />
             
            </div>
            <div className="absolute w-full justify-center top-[85%] left-[50%] translate-x-[-50%] text-[12px] flex gap-[5px] text-slate-100 font-sans">
                <span>You already have an account !! </span>
                <button className="text-slate-300 font-semibold  border-b-[2px] border-slate-300" onClick={() => { setIsLoginCard(true) }}>Login</button>
            </div>
           
        </div>
    )
}

export default SignUpCard