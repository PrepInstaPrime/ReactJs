import React from 'react'

export default function Button({style,content,signin,check}) {
  return (
    <button style={style} onClick={signin||check}>{content}</button>
  )
}
