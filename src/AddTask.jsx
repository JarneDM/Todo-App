import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
// import Task from './Task';

function AddTask({ onAddTask }) {
  const [todo, setTodo] = useState('');

  const handleMessage = (e) => {
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      onAddTask(todo); // Add the task to the list
      setTodo('');
      
    }
  };

  return (
    <div className="top-content">
      <input
        type="text"
        onChange={handleMessage}
        id='input'
        placeholder='Task...'
        value={todo}
      />
      <button type='submit' onClick={handleSubmit} id='add-task'>Add Task</button>
    </div>
  );
}

export default AddTask;
