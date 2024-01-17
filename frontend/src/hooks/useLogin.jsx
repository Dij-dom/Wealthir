import { useState } from "react";
import { useAuthContext } from './useAuthContext'


export const useLogin = () =>{
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async(email, password) =>{
        setIsLoginLoading(true)
        setLoginError(null)

        const response = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        const json = await response.json();

        if (!response.ok){
            setIsLoginLoading(false);
            setLoginError(json.error);
        }
        if (response.ok){
            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json});
            setIsLoginLoading(false);


        }
    }
    return {login, isLoginLoading, loginError}
}