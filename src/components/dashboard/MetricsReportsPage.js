import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PageWrapper from './PageWrapper'; // Ensure the correct import path

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardContent: {
    fontSize: '14px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

const MetricsReportsPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <PageWrapper title="Metrics & Reports">
      <div style={styles.container}>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Data current as of {date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Same Year Previous Month</p>
          <button style={styles.button}>Get Live Data</button>
          <button style={styles.button}>Settings</button>
          <button style={styles.button}>Generate Report</button>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Revenue</p>
          <div style={styles.cardContent}>
            <p>MTD: $0.00</p>
            <p>YTD: $0.00</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Cash Collected</p>
          <div style={styles.cardContent}>
            <p>MTD: $0.00</p>
            <p>YTD: $0.00</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Number Of Jobs</p>
          <div style={styles.cardContent}>
            <p>MTD: 0</p>
            <p>YTD: 0</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Average Order Value</p>
          <div style={styles.cardContent}>
            <p>MTD: $0.00</p>
            <p>YTD: $0.00</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Revenue</p>
          <div style={styles.cardContent}>
            <p>Year</p>
            <p>Month</p>
            <button style={styles.button}>Export</button>
          </div>
          <div style={styles.cardContent}>
            <p>Current (2023)</p>
            <p>Previous (2022)</p>
            <p>Goal</p>
          </div>
          <div style={styles.cardContent}>
            <p>Dec</p>
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apr</p>
            <p>May</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Aug</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
          </div>
          <div style={styles.cardContent}>
            <p>-1.0</p>
            <p>-0.5</p>
            <p>0.0</p>
            <p>0.5</p>
            <p>1.0</p>
          </div>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableCell}>Month</th>
                <th style={styles.tableCell}>Current (2023)</th>
                <th style={styles.tableCell}>Previous (2022)</th>
                <th style={styles.tableCell}>Goal</th>
              </tr>
            </thead>
            <tbody>
              {['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map((month) => (
                <tr key={month}>
                  <td style={styles.tableCell}>{month}</td>
                  <td style={styles.tableCell}>0</td>
                  <td style={styles.tableCell}>0</td>
                  <td style={styles.tableCell}>0</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={styles.button}>Show Last Year</button>
          <button style={styles.button}>Show Goal</button>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Unique Clients</p>
          <div style={styles.cardContent}>
            <p>MTD: 0</p>
            <p>YTD: 0</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Market Share</p>
          <div style={styles.cardContent}>
            <p>MTD: 0</p>
            <p>YTD: 0</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Revenue Per Client</p>
          <div style={styles.cardContent}>
            <p>MTD: </p>
            <p>YTD: </p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>No Orders in Last X Days</p>
          <div style={styles.cardContent}>
            <p>1</p>
            <p>30 Days - Non VIPs: 0</p>
            <p>15 Days - VIPs: 0</p>
          </div>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Calendar</p>
          <div style={styles.cardContent}>
            <Calendar value={date} onChange={setDate} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MetricsReportsPage;
