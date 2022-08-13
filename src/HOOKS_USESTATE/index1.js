import React, { useState } from 'react'

export default function HOOKS_STATE() {
    const [count ,setCount] = useState (0);
   const handlaIncrement = ()=>{
        setCount (count +1);
    }
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handlaIncrement}>Increment</button>
    </div>
  )
}


