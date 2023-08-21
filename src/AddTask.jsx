import React from 'react'
import { useState } from 'react'
import './App.css'

function AddTask() {
  const [message, setMessage] = useState('')

  const handleMessage = (e) => {
    var newMessage = e.currentTarget.value
    // console.log(newMessage)
    setMessage(newMessage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Message submitted')
    setMessage("")
  }
  return (
      <div className="top-content">
          <input type="text" onChange={handleMessage} id='input' placeholder='Task...' value={message}/>
          <button type='submit' onClick={handleSubmit} id='add-task' >Add Task</button>
      </div>
    
  )
}

export default AddTask