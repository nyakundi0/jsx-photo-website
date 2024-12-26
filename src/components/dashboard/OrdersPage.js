import React, { useState } from 'react';
import PageWrapper from './PageWrapper'; // Correct import path


export const OrdersPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = [
        'All (Uses Date Submitted for searching)',
        'Appointment Drafts',
        'Cancelled (Automatically, Client & Admin)',
        'Confirmed',
        'Deleted Orders',
        'Delivery Phase (In Progress/Complete)',
    ];

    return (
        <PageWrapper title="Orders">
            <div style={styles.container}>
                <h2>Your Orders</h2>
                <p>You have 0 orders</p>

                <div className="filters">
                    <label htmlFor="filter-dropdown">Filter: </label>
                    <select
                        id="filter-dropdown"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        {filters.map((filter, index) => (
                            <option key={index} value={filter}>
                                {filter}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="search-section" style={styles.searchBarContainer}>
                    <label htmlFor="date-picker">Search Date: </label>
                    <input
                        id="date-picker"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />

                    <label htmlFor="search-input">Search: </label>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search orders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={styles.searchBar}
                    />
                </div>

                <table className="orders-table" style={styles.table}>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Rush Order</th>
                            <th>Agent</th>
                            <th>Status</th>
                            <th>Date Scheduled</th>
                            <th>Time Scheduled</th>
                            <th>Date Submitted</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="8" className="no-records" style={{ textAlign: 'center', padding: '20px' }}>
                                No record found
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
export default OrdersPage;