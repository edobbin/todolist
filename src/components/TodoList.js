import React, {useState} from 'react'
import TodoForm from './Todoform'

function TodoList() {
const {edit, setEdit} = useState({
    id: null,
    value: ''
})

  return TodoList.map( (todo, index) =>(
    <div className=''>
        
    </div>
  ))
}

export default TodoList