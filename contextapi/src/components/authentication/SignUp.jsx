import React, { useState } from 'react'
import styles from './SignUp.module.css'
import CustomButton from '../button/CustomButton'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirm, setConfirm]=useState("");
    const [err, setErr]=useState("");
    let navigate=useNavigate();
    let handleChange=(e)=>{
        let name=e.target.name;
        let val= e.target.value;
        if(name==='user'){
            setName(val);
        }else if(name==='email'){
            setEmail(val);
        }else if(name==='password'){
            setPassword(val);
        }
        else{
            setConfirm(val);
        }
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            setErr("please Enter the name")
            return;
        }else if(!email){
            setErr("Please Enter the email")
            return;
        }else if (!password){
            setErr("Please Enter your password")
            return;
        }else if(!confirm){
            setErr("Please confirm your password")
            return;
        }
        if(password!==confirm){
            setErr("Password mismatch")
            return;
        }
        localStorage.setItem("details",JSON.stringify({name,email,password}));
        setErr("");
        navigate('/signin')
        
    }

  return (
    <div className={styles.body}>
      <div className={styles.topCorner}></div>
      <div className={styles.bottomCorner}></div>
      <div className={styles.userData}>
            <h1>Create An Account</h1>
            <p>Create an Account to enjoy all the services</p>
            <form className={styles.userform}>
                {err&&<p className={styles.error}>{err}</p>}
                <input type="text" name='user' placeholder='Enter Your Name' className={styles.input} onChange={handleChange}/>
                <input type='email' name='email' placeholder='Enter Your Email ID' className={styles.input} onChange={handleChange} />
                <input type="password" name='password' placeholder='Create Your Password' className={styles.input} onChange={handleChange}/>
                <input type="password" name='confirm' placeholder='Confirm Your Password' className={styles.input} onChange={handleChange}/>
                <CustomButton btnText='Create Account' customStyle={styles.btnStyle} handlerFunction={handleSubmit}/>
            </form>
            <p>Already have an account? <Link to={"/signin"}>Sing In</Link></p>
      </div>
    </div>
  )
}
