import React from 'react';
import AddTask from './AddTask';

function Task({ tasks }) {

  const EventHandler = (e) => {
    
  }

  const RemoveTask = (e) => {
    // if task is clicked then remove the task
    e.preventDefault();
    console.log('Removing task...')
    // console.log(e.index);
    console.log(tasks);


  } 


  return (
    <div className="bottom-content">
      <dl className='task-list' id='tasks'>
        {tasks.map((task, index) => (
          <button className='task-btn' key={index} onClick={RemoveTask}><dt className='task' >{task}</dt></button> 
        ))}
      </dl>
    </div>
  );
}


export default Task;
