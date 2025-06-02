import React from 'react'
import styles from './Result.module.css'
import CustomButton from '../button/CustomButton'
import { useNavigate } from 'react-router-dom'
export default function Result({data}) {
    let {user="", score=0}=data||{}
    let navigate=useNavigate()
    let handlerFunction=()=>{
        navigate("/");
        localStorage.clear();
    }
  return (
    <div className={styles.wrapper}>
        <p>Hey! {user}</p>
        <p> Your Score is : {score}</p>
        <CustomButton btnText='Go to Home' handlerFunction={handlerFunction}/>
    </div>
  )
}
