import { useState } from 'react'
import React from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo=todos=>{
        setTodos([...todos, {id: uuidv4(), task: todos,completed: false, isEditing: false}])
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index)=> (
            <Todo task={todo} key={index}/>
        ))}
    </div>
  )
}
