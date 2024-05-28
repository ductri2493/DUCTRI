import React, { useReducer, useState } from 'react'
const reducer = (state, action)=>{
  switch (action) {
    case 'add':
    return(state + 1)
      break;
  case 'sub':
   return(state - 1)
  case 'reset':
  return(0)
    default:
      break;
  }
}
export default function CountFuncCom() {
  const initCount = 5
    const [count, dispatch] = useReducer(reducer, initCount)
    
  return (
    <div>CountFuncCom
        <p>Count: {count}</p>
        <button onClick={()=>dispatch('add')}>
        Click</button>
        <button onClick={()=>dispatch('sub')}>
        Click</button>
        <button onClick={()=>dispatch('reset')}>
        Click</button>
    </div>
  )
}
