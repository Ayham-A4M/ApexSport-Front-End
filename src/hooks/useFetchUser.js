import getPersonalInformation from "../functions/getPersonalInformation";
import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
export function useFetchUser(setIsLoading) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        console.log('new user update',user)
    },[user])
    useLayoutEffect(() => {
        async function getLogin() {
            try {
                const res = await getPersonalInformation();
                console.log(res,'data user')
                if (res && res.status<250) { setUser(res.data); res.data.Role === "Admin" ? navigate('/adminPage', { replace: true }) : false }
            } catch (err) {
                console.log('err',err);
            } finally {
                setIsLoading(false)
            }

        }
        getLogin();
    }, [])
    return { user, setUser }
}