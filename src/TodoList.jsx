import React, { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className='content'>
      <AddTask onAddTask={addTask} />
      <Task tasks={tasks} />
    </div>
  );
}

export default TodoList;
