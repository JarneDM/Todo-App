import React from 'react'
import './App.css'

function TodoList() {
  return (
    <>
        <div className='content'>
          <input type="text" id='input' />
          <button id='add-task'>Add Task</button>
          <ul className='task-list' id='tasks'>
            
          </ul>
        </div>
    </>
  )
}

export default TodoList