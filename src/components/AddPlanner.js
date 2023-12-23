import React from 'react'
import { useState } from 'react'

const AddPlanner = ({addToList}) => {
  
    const [usertext,setusertext]=useState("");
    const [hours,sethours]=useState(0);

    const handleuserText=(e)=>{
        setusertext(e.target.value);
    }
    const handleHours=(e)=>{
        sethours(e.target.value);
    }

    const handleAddTolist=()=>{
        addToList(usertext,hours)
        setusertext("")
        sethours(0)
    }

   return (
    <div>
      <h1>Geekster Education planner</h1>
      <div>
        <input type="text" value={usertext} id="task" onChange={handleuserText}  />
        <input type="number" value={hours} onChange={handleHours} />
        <button onClick={handleAddTolist}>Add</button>
      </div>
    </div>
  )
}

export default AddPlanner
