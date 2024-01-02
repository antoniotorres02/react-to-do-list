import React from 'react'
import './TaskComponent.css'

import { Task } from '../../interface/Task'

export default function TaskComponent(props: Task) {

  return (
    <>
    <div className='td_task_container'>
      <div className='td_task_text'>
        <h1 className='td_task_name'>{props.title}</h1>
        <p className='td_task_desc'>{props.description}</p>
      </div>
      <p className='td_task_date'>{props.date.getDay()}</p>
    </div>
    </>
  )
}
