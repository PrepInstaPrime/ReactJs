import React from 'react'
import Greeting from './Greeting';
import Payment from './Payment';
import Button from './Button';
import List from './List';
import Fruits from './data';
import Example from './Example';
import NavBar from './NavBar';
export default function App() {
  let loginStyle={
    color:"red",
    backgroundColor:"yellow"
  }
  let loginbtn={
    width:'150px',
    margin:'10px',
    fontSize:'18px',
    borderRadius:'10px',
    fontWeight:"800",
    display:'block'
  }
  let signupbtn={...loginbtn};
  signupbtn.color='red'
  let login=true;
  let pay=true;
  // event handlers
  let signin=()=>{
    login=true;
    alert("Congratulations! you have singed");
  }
  let paymentCheck=()=>{
    pay=true;
    alert("Congratulations! your payment is successful")
  }
  return (
    <>
    <NavBar/>
    <Greeting cred={login} loginStyle={loginStyle} name="Muthu"/>
    <Payment pay={pay}/>
    <Button style={loginbtn} content={"Login"} signin={signin} />
    <Button style={signupbtn} content={"Payment"} check={paymentCheck}/>
    <List names={Fruits}/>
    <Example/>
    </>
  )
}
