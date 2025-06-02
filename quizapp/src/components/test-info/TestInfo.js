import React, { useState } from 'react'
import styles from './TestInfo.module.css'
import { SUBJECTS } from '../../const'
import CustomButton from '../button/CustomButton'
import { useNavigate } from 'react-router-dom'
export default function TestInfo() {
    let [user,setUser]=useState("");
    let [subject,setSubject]=useState("");
    let [errMsg, setErrMsg]=useState("");
    let navigate= useNavigate();
    let onchangeName=(e)=>{
        setErrMsg("");
        setUser(e.target.value);
    }
    let onchangeSubject=(e)=>{
        setErrMsg("");
        setSubject(e.target.value);
    }
    let handleSubmit=()=>{
        if(!user){
            setErrMsg("Please Enter User Name!");
            return;
        }
        if(!subject){
            setErrMsg("Please Enter Subject Name!")
            return;
        }
        localStorage.setItem("userDetails",JSON.stringify({user,subject}));
        navigate("/start-test")
    }
    

  return (
    <div className={styles.wrapper}>
        <input type='test' placeholder='Enter Your Name' className={styles.input} onChange={onchangeName}/>
        <select className={styles.select} onChange={onchangeSubject}>
            <option value='' selected>Select Your Course</option>
            {SUBJECTS.map((subject,idx)=>{
              return <option key={idx} value={subject}>{subject}</option>
            })}
        </select>
        {errMsg&&<p className={styles.error}>{errMsg}</p>}
        <CustomButton btnText='Start Test' handlerFunction={handleSubmit} customStyle={styles.startBtn} />
    </div>
  )
}
