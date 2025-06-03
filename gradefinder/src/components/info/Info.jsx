import React, { useState } from 'react'
import styles from './Info.module.css'
import CustomButton from '../button/CustomButton'
import { useNavigate } from 'react-router-dom';
export default function Info() {
    let [user, setUser]=useState("");
    let [email, setEmail]=useState("");
    let [course, setCourse]=useState("");
    let [nsub, setNSub]=useState(0);
    let [errMsg, setErrMsg]=useState("");
    let navigate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault();
        if(!user){
            setErrMsg("Enter the student name");
            return;
        }
        if(!email){
            setErrMsg("Enter the email");
            return;
        }
        if(!course){
            setErrMsg("Enter the course");
            return;
        }
        if(!nsub){
            setErrMsg("Enter the number of subjects");
            return;
        }
        localStorage.setItem('userDetails', JSON.stringify({user,email,course,nsub}));
        navigate('/subjectinfo')
    }
    let handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        if(name==='user'){
            setUser(value);
        }else if(name==='email'){
            setEmail(value)
        }else if(name==='course'){
            setCourse(value);
        }
        else{
            setNSub(value);
        }
    }
    let handleReset=()=>{
        
    }
  return (
    <>
      <form className={styles.wrapper}>
         {errMsg&&<p className={styles.error}>{errMsg}</p>}
         <input type='text' name='user' placeholder='Enter Student Name' className={styles.input} onChange={handleChange}/>
         <input type='email' name='email' placeholder="Enter Student's email " className={styles.input} onChange={handleChange}/>
         <input type='text' name='course' placeholder='Enter class/course' className={styles.input} onChange={handleChange}/>
         <input type='text' name='nsub' placeholder='Enter total subjects' className={styles.input} onChange={handleChange}/>
         <CustomButton btnText="Generate Template" customStyle={styles.btnStyle} handlerFunction={handleSubmit} />
         <CustomButton btnText="Reset" customStyle={styles.btnStyle} handlerFunction={handleReset}/>
      </form>
    </>
  )
}
