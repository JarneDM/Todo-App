import React from 'react';

function Task({ tasks }) {
  return (
    <div className="bottom-content">
      <dl className='task-list' id='tasks'>
        {tasks.map((task, index) => (
          <dt key={index}>{task}</dt>
        ))}
      </dl>
    </div>
  );
}


export default Task;
