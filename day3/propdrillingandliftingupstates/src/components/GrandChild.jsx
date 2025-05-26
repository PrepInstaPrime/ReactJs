import React from 'react'

export default function GrandChild({price}) {
    // to get price from grandparent , we are doing prop drilling 
  return (
    <div>you grandchild's netword is {price}</div>
  )
}
