import React, { useEffect, useState } from 'react'
import styles from './SubjectInfo.module.css';
import CustomButton from '../button/CustomButton';
import { useNavigate } from 'react-router-dom';
export default function SubjectInfo() {
    let [subjects, setSubjects] = useState([]);
    let [errMsg, setErrMsg] = useState("");
    let navigate=useNavigate();
    useEffect(() => {
        let details = JSON.parse(localStorage.getItem('userDetails'));
        let tsub = Number(details.nsub);
        let allSubject = Array.from({ length: tsub }, () => ({ subject: '', maxMarks: '', obtMarks: '' }));
        // console.log(allSubject)
        setSubjects(allSubject);
    }, [])
    let handleSubmit = (e) => {
       e.preventDefault();
       let len=subjects.length;
       for(let i=0;i<len;i++){
        let {subject,maxMarks,obtMarks}=subjects[i];
        console.log(subjects[i])
         if(!subject){
            setErrMsg(`Please Enter the subject ${i+1} `)
            return;
         }
         if(!maxMarks){
            setErrMsg(`Please Enter the maximum marks of subject ${i+1} `)
            return;
         }
         if(!obtMarks){
            setErrMsg(`Please Enter the obtainer marks of subject ${i+1} `)
            return;
         }
       }
       localStorage.setItem("subjectDetails", JSON.stringify(subjects));
       navigate('/subjectinfo/result')
       setErrMsg("");


    }
    
    let handleChange = (value,field,index) => {
        let oldSubjects = [...subjects];
        oldSubjects[index] = { ...oldSubjects[index], [field]: value };
        setSubjects(oldSubjects);
    }
    let handleReset = () => {

    }
    return (
        <div className={styles.wrapper}>
            <form className={styles.subjects}>
                {errMsg && <p className={styles.error}>{errMsg}</p>}
                {subjects.map((subject, idx) => {
                    return (
                        <div key={idx} className={styles.row}>
                            <input type='text' className={styles.input} placeholder={`Enter subject ${idx + 1}`} onChange={(e)=>handleChange(e.target.value,"subject",idx)} />
                            <input type="text" className={styles.input} placeholder='Enter maximum marks' onChange={(e)=>handleChange(e.target.value,"maxMarks",idx)} />
                            <input type="text" className={styles.input} placeholder='Enter obtained marks' onChange={(e)=>handleChange(e.target.value,"obtMarks",idx)} />
                        </div>
                    )
                })}
            </form>
            <div className={styles.btnGroup}>
                <CustomButton btnText='Generate Report Card' customStyle={styles.btnStyle} handlerFunction={handleSubmit} />
                <CustomButton btnText='Reset the Details' customStyle={styles.btnStyle}  handlerFunction={handleReset}/>
            </div>
        </div>
    )
}
