import React from 'react'
import './App.css'
import AddTask from './AddTask'
import Task from './Task'

function TodoList() {
  return (
    <>
        <div className='content'>
          <AddTask />

          <Task />
        </div>
    </>
  )
}

export default TodoList