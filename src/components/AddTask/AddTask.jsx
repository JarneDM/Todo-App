import React from 'react'
import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [todo, setTodo] = useState('');

  const handleMessage = (e) => {
    setTodo(e?.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (todo.trim() !== '') {
      onAddTask(todo); 
      setTodo('');
    }
  };

  return (
    <div className="top-content">
      <input
        type="text"
        onChange={handleMessage}
        onKeyDown={handleKeyDown}
        id='input'
        placeholder='Task...'
        value={todo}
      />
      <button 
        type='submit' 
        onClick={handleSubmit} 
        id='add-task'
        disabled={todo.trim().length===0}
        >
          Add Task  
      </button>
    </div>
  );
}

export default AddTask;
