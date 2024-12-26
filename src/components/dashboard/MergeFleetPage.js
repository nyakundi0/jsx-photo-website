import React from 'react';
import PageWrapper from './PageWrapper'; // Ensure the correct import path

const MergeFleetPage = () => (
  <PageWrapper title="Merge Fleet">
    <div style={fleet.container}>
      <button style={fleet.startButton}>+ Start a Project</button>
      <p>You have 0 projects</p>
      <p>No project to show, press "Start" to create one.</p>
    </div>
  </PageWrapper>
);

const fleet = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  startButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginBottom: '20px',
  },
};

export default MergeFleetPage;