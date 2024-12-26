import React from 'react';
import PageWrapper from './PageWrapper'; // Ensure the correct import path

const ClientsPage = () => (
  <PageWrapper title="Clients">
    <div style={styles.container}>
      <h2>Clients</h2>
      <p>Clients Page content goes here.</p>
    </div>
  </PageWrapper>
);

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ClientsPage;