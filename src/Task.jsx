import React from 'react';

function Task({ tasks }) {

  const EventHandler = (e) => {
    
  }
  return (
    <div className="bottom-content">
      <dl className='task-list' id='tasks'>
        {tasks.map((task, index) => (
          <dt className='task' key={index}>{task}</dt>
        ))}
      </dl>
    </div>
  );
}


export default Task;
