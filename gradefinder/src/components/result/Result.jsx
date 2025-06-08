import React, { useEffect, useState, useRef } from 'react';
import styles from './Result.module.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CustomButton from '../button/CustomButton';
import { useNavigate } from 'react-router-dom';
export default function Result() {
  let [course, setCourse] = useState('');
  let [user, setUser] = useState('');
  let [email, setEmail] = useState('');
  let [markSheet, setMarkSheet] = useState([]);
  let [sum, setSum] = useState(0);
  let [total, setTotal] = useState(0);
  const resultRef = useRef();
  let navigate=useNavigate();
  useEffect(() => {
    let subjectDetails = JSON.parse(localStorage.getItem("subjectDetails"));
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setMarkSheet(subjectDetails);
    setCourse(userDetails.course);
    setUser(userDetails.user);
    setEmail(userDetails.email);
    let sumObt = 0;
    let totalMarks = 0;
    for (let i = 0; i < subjectDetails.length; i++) {
      sumObt += parseInt(subjectDetails[i].obtMarks);
      totalMarks += parseInt(subjectDetails[i].maxMarks);
    }
    setSum(sumObt);
    setTotal(totalMarks);
  }, [])
  let getGrade = (val) => {
    switch (true) {
      case val >= 90: return 'A';
      case val >= 75: return 'B';
      case val >= 60: return 'C';
      case val >= 40: return 'D';
      default: return 'E';
    }
  }

  let getPercentage = () => {
    return (sum * 100 / total).toFixed(2);
  }
  const downloadMarksheet = async () => {
    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${user}_marksheet.pdf`);
  };
  const goToHome=()=>{
      navigate('/');
  }
  return (
    <div className={styles.wrapper} ref={resultRef} >
      <div className={styles.thumbnail}>
        <h1>Prime Max Academy</h1>
        <h2>{course} Examination</h2>
        <h2>2025</h2>
      </div>
      <div className={styles.details}>
        <p> <span className={styles.user}>Student Name: </span> {user}</p>
        <p> <span className={styles.user}> Student Email Id:</span> {email} </p>
      </div>
      <div className={styles.marks}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={5}>Obtained Marks And Grades</th>
            </tr>
            <tr>
              <th>Subjects</th>
              <th>Obtained Marks</th>
              <th>Max Marks</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {markSheet.map((obj, idx) => {
              return (
                <tr key={idx}>
                  <td>{obj.subject}</td>
                  <td className={styles.data}>{obj.obtMarks}</td>
                  <td className={styles.data}>{obj.maxMarks}</td>
                  <td className={styles.data}>{getGrade(obj.obtMarks)}</td>
                  <td className={styles.data}>{obj.obtMarks >= 40 ? "Pass" : "Fail"}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>{sum}</th>
              <th>{total}</th>
              <th>Percentage: {getPercentage()}% </th>
              <th>CGPA: {getPercentage() / 10} </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className={styles.btns}>
        <CustomButton btnText='Download Result' customStyle={styles.downloadButton} handlerFunction={downloadMarksheet} />
        <CustomButton btnText='Go to Home' customStyle={styles.downloadButton} handlerFunction={goToHome} />
      </div>
    </div>
  )
}
