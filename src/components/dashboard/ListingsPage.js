import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
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
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
};

const ListingsPage = () => {
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newListing, setNewListing] = useState({
        address: '',
        thumbnail: '',
        rushed: false,
        listingPrice: '',
        dateShot: '',
        shotBy: '',
        agentClient: '',
        status: '',
        tasks: '',
    });

    const handleCreateListing = () => {
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewListing((prevListing) => ({
            ...prevListing,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSaveListing = () => {
        setListings((prevListings) => [...prevListings, newListing]);
        setIsModalOpen(false);
        setNewListing({
            address: '',
            thumbnail: '',
            rushed: false,
            listingPrice: '',
            dateShot: '',
            shotBy: '',
            agentClient: '',
            status: '',
            tasks: '',
        });
    };

    return (
        <PageWrapper title="Listings">
            <div style={styles.container}>
                <button style={styles.createListingButton} onClick={handleCreateListing}>
                    + Create a Listing
                </button>
                <h2>Your Listings</h2>
                <p>You have {listings.length} listings</p>

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
                        {listings.length === 0 ? (
                            <tr>
                                <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>
                                    No listings available.
                                </td>
                            </tr>
                        ) : (
                            listings.map((listing, index) => (
                                <tr key={index}>
                                    <td>{listing.address}</td>
                                    <td>{listing.thumbnail}</td>
                                    <td>{listing.rushed ? 'Yes' : 'No'}</td>
                                    <td>{listing.listingPrice}</td>
                                    <td>{listing.dateShot}</td>
                                    <td>{listing.shotBy}</td>
                                    <td>{listing.agentClient}</td>
                                    <td>{listing.status}</td>
                                    <td>{listing.tasks}</td>
                                    <td>
                                        <button style={styles.button}>Edit</button>
                                        <button style={styles.button}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <>
                    <div style={styles.overlay} onClick={() => setIsModalOpen(false)} />
                    <div style={styles.modal}>
                        <h2>Create a Listing</h2>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={newListing.address}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Thumbnail URL"
                            value={newListing.thumbnail}
                            onChange={handleInputChange}
                        />
                        <label>
                            <input
                                type="checkbox"
                                name="rushed"
                                checked={newListing.rushed}
                                onChange={handleInputChange}
                            />
                            Rushed
                        </label>
                        <input
                            type="text"
                            name="listingPrice"
                            placeholder="Listing Price"
                            value={newListing.listingPrice}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="dateShot"
                            placeholder="Date Shot"
                            value={newListing.dateShot}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="shotBy"
                            placeholder="Shot by"
                            value={newListing.shotBy}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="agentClient"
                            placeholder="Agent/Client"
                            value={newListing.agentClient}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="status"
                            placeholder="Status"
                            value={newListing.status}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="tasks"
                            placeholder="Tasks"
                            value={newListing.tasks}
                            onChange={handleInputChange}
                        />
                        <button style={styles.button} onClick={handleSaveListing}>
                            Save
                        </button>
                    </div>
                </>
            )}
        </PageWrapper>
    );
};

export default ListingsPage;