import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({btnText='', customStyle='', handlerFunction=()=>{}}) {
  return (
    <>
    <button onClick={handlerFunction} className={`${styles.defaultStyle} ${customStyle}`}>{btnText||"Submit"}</button>
    </>
  )
}
