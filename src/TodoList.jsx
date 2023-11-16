import React, { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  // make removeTask function and pass it as a prop. function removes task from setTasks

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task) => {
    // tasks.
    // tasks is array, task is object in array!
    // remove task from tasks using the key of the object!
  }

  return (
    <div className='content'>
      <AddTask onAddTask={addTask} />
      <Task tasks={tasks} />
    </div>
  );
}

export default TodoList;
