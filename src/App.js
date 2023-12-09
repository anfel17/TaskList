import './styles.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
        <h1><img src="/images/completed-task.png" alt="List Icon" className="list-icon" /> Task List</h1>
      <TaskList />
    </div>
  );
}

export default App;
