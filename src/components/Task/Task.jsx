import React from 'react';

function Task({ tasks, setTasks }) {

  const removeTask = (index) => {
    // Create a new array without the task to be removed
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  } 

  return (
    <div className="bottom-content">
      <dl className='task-list' id='tasks'>
        {tasks.map((task, index) => (
          <button className='task-btn' key={index} onClick={() => removeTask(index)}>
            <dt className='task'>{task}</dt>
          </button> 
        ))}
      </dl>
    </div>
  );
}


export default Task;
