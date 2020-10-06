import React, {useState} from 'react';
import './index.css'
function Room(){
  const [islit , setlit] = useState(true);
  const [rate, setrate] = useState(0);
  return(
    <div  className = {"room" + (islit? "lit": " dark")}>
      <i><h1>The Room is {islit? "Lit" : " Dark"}</h1></i>
      <button onClick ={ ()=> setlit(!islit)} >ON / OFF</button>
  <h1>{rate}</h1>
      <button onClick ={()=> setrate(rate + 1)} >rating</button>
    </div>
  )  
}

export default Room;
