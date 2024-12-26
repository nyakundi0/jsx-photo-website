import React from 'react';
import PageWrapper from './PageWrapper'; // Assuming you have a PageWrapper component

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    createListingButton: {
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
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

const ListingsPage = () => {
    return (
        <PageWrapper title="Listings">
            <div style={styles.container}>
                <h2>Your Listings</h2>
                <p>You have 0 listings</p>

                <div style={styles.createListingButton}>
                    <button style={styles.button}>Create Listing</button>
                </div>

                {/* Search Bar */}
                <div style={styles.searchBarContainer}>
                    <input
                        type="text"
                        placeholder="Search listings..."
                        style={styles.searchBar}
                    />
                </div>

                {/* Listings Table */}
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Thumbnail</th>
                            <th>Rushed</th>
                            <th>Listing Price</th>
                            <th>Date Shot</th>
                            <th>Shot by</th>
                            <th>Agent/Client</th>
                            <th>Status</th>
                            <th>Tasks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>
                                No listings available.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </PageWrapper>
    );
};
export default ListingsPage;