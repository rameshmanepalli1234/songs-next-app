import React, {useEffect} from "react";
import {useRouter} from "next/router";


const LoginForm: React.FC = () => {

    const router = useRouter();

    useEffect(()=> {
        router.push('/home');
    },[])

    return (
        <div>
            Login Form
        </div>
    )
}

export default LoginForm;