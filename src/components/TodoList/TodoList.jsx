import React, { useState, useEffect } from 'react';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';

function TodoList() {

    
  // State to manage tasks
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from local storage or default to an empty array
    const localData = localStorage.getItem('TaskList');
    const initialTasks = localData ? JSON.parse(localData) : [];
    return initialTasks;
  });

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
