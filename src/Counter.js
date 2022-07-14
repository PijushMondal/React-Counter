import React, { useState,useEffect } from 'react';

  function Counter(props) {
   const [count, setCount] = useState(0);
   const [color,setColor] = useState("")

  const incCounter = ()=> setCount(count + 1);


  useEffect(()=>{
    console.log("Hello")
    setColor("red")
  },[count])

    return (
      <div className="App">
        <p>COUNT NO : {count} </p>
        <button disabled={!props.isEnable} style={{background:color,color:'#fff',cursor:'pointer'}}  onClick={incCounter}>
         Click Me
        </button>
  
      </div>
    );
  }

  export default Counter