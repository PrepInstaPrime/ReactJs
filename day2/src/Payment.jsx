import React from 'react'

export default function Payment({pay}) {
const style={
        color:'red',
        backgroundColor:'yellow',
        display:'inline'
}
  return (
    <>
     {/* conditional rendring using logical operators */}
     {!pay &&<div style={{color:'red'}}>your payment is due and ur services will stop in next 2 days</div>}
     <h1> this is coming from payment</h1>
     {/* condtional rendering using ternary operator */}
     {pay?<h2>your payment is up to date</h2>:<h2 style={style}>your payment is due</h2>}
    </>
  )
}
