import React from 'react';
import PageWrapper from './PageWrapper'; // Assuming you have a PageWrapper component

const InvoicesPage = () => {
  return (
    <PageWrapper title="Invoices">
      <div style={styles.container}>
        <h2>Your Invoices</h2>
        <p>You have 0 invoices</p>

        {/* Search Bar */}
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Search invoices..."
            style={styles.searchBar}
          />
        </div>

        {/* Invoices Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Date Issued</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                No invoices available.
              </td>
            </tr>
          </tbody>
        </table>
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
  searchBarContainer: {
    marginBottom: '20px',
  },
  searchBar: {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
};

export default InvoicesPage;
