import React from 'react'
import {useState} from 'react'

const PlannerItem = ({listitem}) => {

    const [time,settime]=useState(parseInt(listitem.hours));
    
    const increseTime=()=>{
       if(time>=0){
        settime(()=>time+1);
       }
    }
    const decreseTime=()=>{
      if(time>0){
        settime(()=>time-1);
      }
    }
  return (
    <div className='listitem'>
        {
            console.log(listitem)
        }
        <span>{listitem.usertext} -</span><span>Time : {time} hours</span>
        <button onClick={increseTime} style={{backgroundColor:"#6b5ef5"}}>+</button>
        <button onClick={decreseTime} style={{backgroundColor:"grey"}}>-</button>

      
    </div>
  )
}

export default PlannerItem
