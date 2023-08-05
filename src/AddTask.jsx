import React from 'react'
import './App.css'

function AddTask() {
  return (
      <div className="top-content">
          <input type="text" id='input' placeholder='Task...'/>
          <button id='add-task'>Add Task</button>
      </div>
    
  )
}

export default AddTask