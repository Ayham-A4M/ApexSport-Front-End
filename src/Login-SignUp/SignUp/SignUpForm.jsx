import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Loader2 from "../../components/Loader2";
import SaveRegister from "../Functions/SaveRegister";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const SignUpForm = () => {
    const [hidePass, setHidePass] = useState(true);
    const [sendingReq, setSendingReq] = useState(false);
    const schema = yup.object().shape({
        FirstName: yup.string().max(15).required(),
        LastName: yup.string().max(20).required(),
        UserName: yup.string().max(15).required(),
        Email: yup.string().email().max(25).required(),
        password: yup.string().min(8).max(20).required(),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        setSendingReq(true);
        const result = await SaveRegister(data, setSendingReq);
    }


    return (
        <form className="registerForm w-full relative h-full flex flex-col items-center  gap-[25px]" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First Name:" className={`login_signup_input ${errors.FirstName ? 'border-[2px] border-red-500' : ''}  `} {...register('FirstName')} />
            <input type="text" placeholder="Last Name:" className={`login_signup_input ${errors.LastName ? 'border-[2px] border-red-500' : ''}  `} {...register('LastName')} />
            <input type="text" placeholder="UserName:" className={`login_signup_input ${errors.UserName ? 'border-[2px] border-red-500' : ''}  `} {...register('UserName')} />
            <input type="text" placeholder="Email:" className={`login_signup_input ${errors.Email ? 'border-[2px] border-red-500' : ''}  `} {...register('Email')} />
            <div className="w-full h-fit relative  ">
                <IoEye className="w-[20px]     top-[50%] translate-y-[-50%] text-slate-300 h-[20px] absolute right-[10px]" style={{ display: `${hidePass ? 'block' : 'none'}` }} onClick={() => { setHidePass(false) }} />
                <IoEyeOff className="w-[20px] top-[50%] translate-y-[-50%] text-slate-300 h-[20px] absolute right-[10px]" style={{ display: `${hidePass ? 'none' : 'block'}` }} onClick={() => { setHidePass(true) }} />

                <input type={hidePass ? 'password' : 'text'} placeholder="Password:" className={`login_signup_input ${errors.Email ? 'border-[2px] border-red-500' : ''}`} {...register('password')} />
            </div>
            <button disabled={sendingReq} type="submit" className="bg-slate-300 text-slate-700  font-bold px-[18px] py-[5px] rounded-[6px] absolute top-[108%] left-[50%] translate-x-[-50%]">{sendingReq ? <Loader2 /> : 'Sign Up'}</button>
        </form>
    )
}
export default SignUpForm