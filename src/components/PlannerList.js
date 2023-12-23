import React from 'react'
import PlannerItem from './PlannerItem'

const PlannerList = ({taskList}) => {
  return (
    <div>
      {
        taskList.map((item,index)=> (
            <PlannerItem key={index} listitem={item}/>
        ))
      }
    </div>
  )
}

export default PlannerList
