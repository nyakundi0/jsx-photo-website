import React, { useState } from 'react';
import PageWrapper from './PageWrapper'; // Correct import path

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  noAppointments: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#999',
  },
  markButton: {
    marginTop: '20px',
    padding: '15px 30px',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    marginRight: '10px',
    fontSize: '18px',
  },
};

export const OnsiteTrackingPage = () => {
  const [serviceArea, setServiceArea] = useState('');
  const [photographers, setPhotographers] = useState('');
  const jobStatus = {
    done: 0,
    pendingConfirmation: 0,
    inProgress: 0,
  };

  const handleServiceAreaChange = (event) => {
    setServiceArea(event.target.value);
  };

  const handlePhotographersChange = (event) => {
    setPhotographers(event.target.value);
  };

  const handleMarkDayAsCompleted = () => {
    console.log('Day marked as completed');
  };

  return (
    <PageWrapper title="Onsite Tracking">
      <div style={styles.container}>
        <h2>Onsite Tracking</h2>
        <p>Dec 21, 2024</p>

        {/* Table for Service Areas and Photographers */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Filter</th>
              <th>Selection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>All Service Areas:</strong></td>
              <td>
                <select value={serviceArea} onChange={handleServiceAreaChange} style={styles.dropdown}>
                  <option value="All Service Areas">All Service Areas</option>
                  <option value="Default Service Area">Default Service Area</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><strong>All Photographers:</strong></td>
              <td>
                <select value={photographers} onChange={handlePhotographersChange} style={styles.dropdown}>
                  <option value="All Photographers">All Photographers</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Job Status Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Done:</strong></td>
              <td>{jobStatus.done} Jobs</td>
            </tr>
            <tr>
              <td><strong>Pending Confirmation:</strong></td>
              <td>{jobStatus.pendingConfirmation} Jobs</td>
            </tr>
            <tr>
              <td><strong>Currently in Progress:</strong></td>
              <td>{jobStatus.inProgress} Jobs</td>
            </tr>
          </tbody>
        </table>

        {/* No Appointments */}
        <div style={styles.noAppointments}>
          <p>No appointments found</p>
        </div>

        {/* Mark Day as Completed Button */}
        <button onClick={handleMarkDayAsCompleted} style={styles.markButton}>
          <span style={styles.icon}>✔</span> Mark Day as Completed
        </button>
      </div>
    </PageWrapper>
  );
};
export default OnsiteTrackingPage;