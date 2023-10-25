import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className='todo-app'>
     <h1>TO DO APP</h1>
    <div className='todo-wrapper'>
      <TodoWrapper/>
    </div>
    </div>
  );
}

export default App;
