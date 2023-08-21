import React from 'react'
import { useState } from 'react'
import './App.css'
// import Task from './Task';

function AddTask({ onAddTask }) {
  const [message, setMessage] = useState('');

  const handleMessage = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onAddTask(message); // Add the task to the list
      setMessage('');
    }
  };

  return (
    <div className="top-content">
      <input
        type="text"
        onChange={handleMessage}
        id='input'
        placeholder='Task...'
        value={message}
      />
      <button type='submit' onClick={handleSubmit} id='add-task'>Add Task</button>
    </div>
  );
}

export default AddTask;
