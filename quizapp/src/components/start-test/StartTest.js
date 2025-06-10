import React, { useEffect, useState } from 'react'
import styles from './StartTest.module.css'
import { QUESTIONS_BY_SUBJECT } from '../../const'
import CustomButton from '../button/CustomButton';
import Result from '../result/Result';
export default function StartTest() {
    let [questions, setQuestions]=useState([]);
    let [user, setUser]=useState("");
    let [isTestSubmited, setIsTestSubmited]=useState(false);
    let [answer, setAnswer]=useState("");
    let [currentIndex, setCurrentIndex]=useState(0);
    let [score, setScore]=useState(0);
    useEffect(()=>{
        let obj=JSON.parse(localStorage.getItem("userDetails"));
        let {user='' , subject=''}=obj||{};
        let questionSet=QUESTIONS_BY_SUBJECT?.[subject];
        setQuestions(questionSet);
        setUser(user);
    },[])
    let {id='',question='',options=[],correctAns}=questions[currentIndex]||{};
    let nextHandler=()=>{
        let len=questions.length-1;
        let marks=answer===correctAns?2:-1;
        setScore(score+marks);
        if(len<=currentIndex){
            setIsTestSubmited(true);
            return;
        }
        setCurrentIndex(currentIndex+1)
    }
    if(isTestSubmited){
        return(
            <Result data={{user,score}}/>
        )
    }
    let handleAnswer=(e)=>{
        setAnswer(e.target.value);
    }

  return (
    <div className={styles.card}>
    <p className={styles.question}>Question {id} : {question}</p>
     <div className={styles.mid}>
           {options.map((option,idx)=>{
            return(
                <div className={styles.leftSec}>
                    <input className={styles.option} key={idx} type='radio' value={option} id={id} name={id} onChange={handleAnswer} checked={option===answer}/>
                    <label id={id}>{option}</label>
                </div>
            )
           })}
        <div className={styles.rightSec}></div>
     </div>
     <CustomButton btnText='Next' handlerFunction={nextHandler}/>
    </div>
  )
}
