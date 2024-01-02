import React from 'react'
import './Task.css'

export default function Task() {

  return (
    <>
    <div className='td_task_container'>
      <div className='td_task_text'>
        <h1 className='td_task_name'>Lorem ipsum</h1>
        <p className='td_task_desc'> dolor sit amet, consectetur adipiscing elit. Curabitur venenatis vehicula consectetur. Praesent at neque vel odio feugiat pellentesque et sed est. Praesent consectetur mollis enim, vitae molestie lorem condimentum vel. Etiam lorem dolor, egestas in ultricies sed, tempus vestibulum libero. Maecenas efficitur cursus erat quis pharetra. </p>
      </div>
      <p className='td_task_date'>20/10/23</p>
    </div>
    </>
  )
}
