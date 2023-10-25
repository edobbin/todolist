import React, {useState} from 'react'

export const TodoForm = () => {

    const[value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();

        
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Todays task is' onChange={(e) => setValue(e.target.value)}/>

        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
