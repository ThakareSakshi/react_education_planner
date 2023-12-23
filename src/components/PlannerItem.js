import React from 'react'
import {useState} from 'react'

const PlannerItem = ({listitem}) => {

    const [time,settime]=useState(parseInt(listitem.hours));
    
    const increseTime=()=>{
        settime(()=>time+1);
    }
    const decreseTime=()=>{
        settime(()=>time-1);
    }
  return (
    <div>
        {
            console.log(listitem)
        }
        <span>{listitem.usertext} -</span><span>Time : {time} hours</span>
        <button onClick={increseTime}>+</button>
        <button onClick={decreseTime}>-</button>

      
    </div>
  )
}

export default PlannerItem
