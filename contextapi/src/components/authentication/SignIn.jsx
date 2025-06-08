import React, {useState} from 'react'
import styles from './SignUp.module.css'
import CustomButton from '../button/CustomButton'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [err, setErr]=useState("");
    let navigate= useNavigate();
    let handleChange=(e)=>{
        let name=e.target.name;
        let val= e.target.value;
        if(name==='email'){
            setEmail(val);
        }else{
            setPassword(val);
        }
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
       if(!email){
            setErr("Please Enter the email")
            return;
        }else if (!password){
            setErr("Please Enter your password")
            return;
        }
        let data=JSON.parse(localStorage.getItem('details'));
        if(email===data.email&&password===data.password){
            setErr("");
            localStorage.setItem('login',true);
            navigate('/')
            return;
        }else{
            setErr("Wrong Credentials");
            return;
        }
        
    }
  return (
    <div className={styles.body}>
      <div className={styles.topCorner}></div>
      <div className={styles.bottomCorner}></div>
      <div className={styles.userData}>
            <h1>Login In Your Account</h1>
            <p>Login to enjoy all the services</p>
            <form className={styles.userform}>
                {err&&<p className={styles.error}>{err}</p>}
                <input type='email' name="email" placeholder='Enter Your Email ID' className={styles.input} onChange={handleChange}/>
                <input type="password" name='password' placeholder='Enter Your Password' className={styles.input} onChange={handleChange}/>
                <CustomButton btnText='Create Account' customStyle={styles.btnStyle} handlerFunction={handleSubmit}/>
            </form>
            <p>Don't have an account? <Link to={"/signup"}>Sing Up</Link></p>
      </div>
    </div>
  )
}
