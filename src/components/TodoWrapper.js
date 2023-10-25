import { useState } from 'react'
import React from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uui} from 'uuid'

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo=todos=>{
        setTodos([...todos, {id: uuidv4(), task: todos,completed: false, isEditing: false}])
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
