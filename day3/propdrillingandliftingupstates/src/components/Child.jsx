import React,{useRef} from 'react'
import GrandChild from './GrandChild';

export default function Child({price,setPrice}) {
let newprice=useRef(0);
  let submitHandler=(e)=>{
    e.preventDefault();
    // this is lifting up state becuase it will update data in parent ( child to parent)
    setPrice(newprice.current.value);
    newprice.current.value=''
  }

  return (
    <>
     <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter the new price' ref={newprice} ></input>
        <button>submit</button>
     </form>
     <GrandChild price={price}/>
    </>
  )
}
