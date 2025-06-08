import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({btnText="",customStyle="",handlerFunction=()=>{}}) {
  return (
    <button className={`${customStyle} ${styles.btnStyle}`} onClick={handlerFunction}>{btnText||"Submit"}</button>
  )
}
