import React, { useState } from 'react';
import PageWrapper from './PageWrapper'; // Correct import path

const TaskManagerPage = () => {
  const [status, setStatus] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [assignee, setAssignee] = useState('');
  const [completion, setCompletion] = useState(0);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setTaskCategory(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleCompletionChange = (event) => {
    setCompletion(Number(event.target.value));
  };

  return (
    <PageWrapper title="Task Manager">
      <div style={styles.container}>
        <h2>Task Manager</h2>
        <p>You have 0 incomplete tasks out of 0 tasks</p>

        {/* Filter Options */}
        <div style={styles.filterContainer}>
          <div style={styles.filterItem}>
            <label>Status:</label>
            <select value={status} onChange={handleStatusChange} style={styles.dropdown}>
              <option value="Pending">Pending</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Checking Files">Checking Files</option>
              <option value="File Check Over">File Check Over</option>
              <option value="Merge Fleet Error">Merge Fleet Error</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div style={styles.filterItem}>
            <label>Task Category:</label>
            <select value={taskCategory} onChange={handleCategoryChange} style={styles.dropdown}>
              <option value="Vip Client">Vip Client</option>
              <option value="New Client">New Client</option>
              <option value="Reshoot">Reshoot</option>
              <option value="Rush">Rush</option>
            </select>
          </div>

          <div style={styles.filterItem}>
            <label>Assignee:</label>
            <select value={assignee} onChange={handleAssigneeChange} style={styles.dropdown}>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Tom Brown">Tom Brown</option>
            </select>
          </div>
        </div>

        {/* Task Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Task Category</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" /> Task 1
              </td>
              <td>{status}</td>
              <td>{taskCategory}</td>
              <td>{assignee}</td>
              <td>
                <button style={styles.button}>Cancel</button>
                <button style={styles.button}>Apply</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Task Progress */}
        <div style={styles.progressContainer}>
          <label>Progress: {completion}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={completion}
            onChange={handleCompletionChange}
            style={styles.progressBar}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  filterContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  filterItem: {
    width: '30%',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  button: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  progressContainer: {
    marginTop: '20px',
  },
  progressBar: {
    width: '100%',
    marginBottom: '10px',
  },
};

export default TaskManagerPage;