import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import LoginProccess from "../Functions/LoginProccess";
import Loader2 from "../../components/Loader2";
import { User } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



const LoginForm = () => {
    const [hidePass, setHidePass] = useState(true);
    const userContext = useContext(User);
    const navigate = useNavigate();
    const [sendingReq, setSendingReq] = useState(false)
    const schema = yup.object().shape({
        Email: yup.string().email().max(25).required(),
        password: yup.string().min(8).max(20).required(),
    })

    const onSubmit =async (data) => {
        setSendingReq(true);
        const Role = await LoginProccess(data, userContext, setSendingReq);
        if (Role) {
            setTimeout(() => {
                Role === "Admin" 
                    ? navigate('/AdminPage', { replace: true }) 
                    : navigate('/', { replace: true });
            }, 100);
            
        }
    }


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    
    return (
        <form className="w-full relative h-full flex flex-col  text-[11px]items-center  gap-[50px]" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email:" className={`login_signup_input ${errors.Email ? 'border-[2px] border-red-500' : ''}`} {...register('Email')} />
            <div className="w-full h-fit relative ">
                <IoEye className="w-[20px] top-[50%] translate-y-[-50%] text-slate-300 h-[20px] absolute right-[10px]" style={{ display: `${hidePass ? 'block' : 'none'}` }} onClick={() => { setHidePass(false) }} />
                <IoEyeOff className="w-[20px] top-[50%] translate-y-[-50%] text-slate-300 h-[20px] absolute right-[10px]" style={{ display: `${hidePass ? 'none' : 'block'}` }} onClick={() => { setHidePass(true) }} />
                <input type={hidePass ? 'password' : 'text'} placeholder="Password:" className={` login_signup_input ${errors.password ? 'border-red-500 border-[2px]' : ''}`} {...register('password')} />
            </div>
            <button disabled={sendingReq} type="submit" className="bg-slate-300 text-slate-700  font-bold px-[20px] py-[7px] rounded-[6px] absolute top-[100%] left-[50%] translate-x-[-50%]">{sendingReq ? <Loader2 /> : 'Login'}</button>
        </form>
    )
}

export default LoginForm