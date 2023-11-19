import React, { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  // make removeTask function and pass it as a prop. function removes task from setTasks

  const addTask = (task) => {
    // console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <div className='content'>
      <AddTask onAddTask={addTask} />
      <Task tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default TodoList;
