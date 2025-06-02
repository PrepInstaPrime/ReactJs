import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({btnText='',customStyle='',handlerFunction=()=>{}}) {
  return (
    <>
        <button className={`${styles.btnStyle} ${customStyle}`} onClick={handlerFunction}>{btnText||"Submit"}</button>
    </>
  )
}
