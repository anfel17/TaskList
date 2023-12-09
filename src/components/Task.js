import React, { useState } from 'react';

function Task({ task, deleteTask, addSubtask, toggleSubtask }) {
  const [subtaskText, setSubtaskText] = useState('');

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    if (subtaskText.trim() !== '') {
      addSubtask(task.id, subtaskText);
      setSubtaskText('');
    }
  };

  return (
    <div className={`Task ${task.done ? 'task-done' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className='delete-btn'  onClick={() => deleteTask(task.id)}>X</button>
        <div style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</div>
        
      </div>
      <form onSubmit={handleSubtaskSubmit}>
        <input
          type="text"
          value={subtaskText}
          onChange={(e) => setSubtaskText(e.target.value)}
          placeholder="Enter subtask..."
        />
        <button type="submit">Add Subtask</button>
      </form>
      {task.subtasks.map((subtask) => (
        <div key={subtask.id}>
          <input
            type="checkbox"
            checked={subtask.done}
            onChange={() => toggleSubtask(task.id, subtask.id)}
          />
          <span style={{ textDecoration: subtask.done ? 'line-through' : 'none' }}>{subtask.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Task;
