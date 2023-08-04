import React from 'react'
import './App.css'

function TodoList() {
  return (
    <>
        <div className='content'>
          <div className="top-content">
            <input type="text" id='input' placeholder='Task...'/>
            <button id='add-task'>Add Task</button>
          </div>

          <div className="bottom-content">
            <ul className='task-list' id='tasks'></ul>
          </div>
        </div>
    </>
  )
}

export default TodoList