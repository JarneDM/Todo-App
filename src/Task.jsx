import React from 'react';

function Task() {
  return (
    <div className="bottom-content">
      <dl className='task-list' id='tasks'>
        <dt>Task 1</dt>
        <dd>Task description 1</dd>
        {/* Add more tasks if needed */}
      </dl>
    </div>
  );
}

export default Task;
