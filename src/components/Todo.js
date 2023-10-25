import React from 'react'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
        <p>{task.task}</p>
    </div>
  )
}
