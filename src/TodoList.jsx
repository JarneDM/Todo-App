import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './AddTask';
import Task from './Task';

function TodoList() {
    // Retrieve tasks from local storage or default to an empty array
    const localData = localStorage.getItem('TaskList');
    const initialTasks = localData ? JSON.parse(localData) : [];
    
    // State to manage tasks
    const [tasks, setTasks] = useState(initialTasks);
  
    // useEffect to store tasks in local storage whenever tasks change
    useEffect(() => {
      localStorage.setItem('TaskList', JSON.stringify(tasks));
    }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };


  return (
    <div className='content'>
      <AddTask onAddTask={addTask} />
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoList;
