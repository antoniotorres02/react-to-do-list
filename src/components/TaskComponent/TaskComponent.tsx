import React from 'react'
import './TaskComponent.css'

import { Task } from '../../interface/Task'

interface TaskComponentProps {
  id: number;
  title: string;
  description: string;
  date: Date;
  done: boolean;
  deleteTask: (id: number) => void;
}

export default function TaskComponent(props: TaskComponentProps) {

  const date : Date = new Date(props.date)

  const handleDeleteTask = () => {
    props.deleteTask(props.id)
  }

  return (
    <>
    <div className='td_task_container'>
      <div className='td_task_text'>
        <h1 className='td_task_name'>{props.title}</h1>
        <p className='td_task_desc'>{" " + props.description.trim()}</p>
      </div>
      <p className='td_task_date'>{(date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())}</p>
      <div className='td_task_button_div'>
        <button className='td_task_button'>Done</button>
        <button className='td_task_button' onClick={handleDeleteTask}>Delete</button>
        <button className='td_task_button'>Edit</button>  
      </div>
    </div>
    </>
  )
}
