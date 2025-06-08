import React from 'react'
import { useContext } from 'react';
import myContext from '../store/MyContext';
import SignUp from './authentication/SignUp';
import CustomButton from './button/CustomButton';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    let obj = useContext(myContext);
    let navigate = useNavigate()
    let handleSubmit = () => {
        localStorage.setItem('login', false);
        navigate('/signup')

    }
    console.log(typeof obj.login)
    if (!obj.login) {
        return (<SignUp />)
    } else {
        return (
            <div>
                <p>this is home</p>
                <CustomButton btnText='LogOut' handlerFunction={handleSubmit} />
            </div>
        )
    }
}
