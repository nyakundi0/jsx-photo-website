import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
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
  startButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginBottom: '20px',
  },
  verticalButton: {
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'block',
    marginBottom: '10px',
  },
  section: {
    marginTop: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
  cardText: {
    margin: 0,
  },
  editIcon: {
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  actionButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
};

const MergeFleetPage = () => {
  const [isMergeFleetVisible, setIsMergeFleetVisible] = useState(false);
  const [videoOrientation, setVideoOrientation] = useState('auto');

  const handleMergeFleetClick = () => {
    setIsMergeFleetVisible(true);
  };

  const handleBackClick = () => {
    setIsMergeFleetVisible(false);
  };

  const handleOrientationChange = (e) => {
    setVideoOrientation(e.target.value);
  };

  return (
    <PageWrapper title="Merge Fleet">
      <div style={styles.container}>
        {!isMergeFleetVisible ? (
          <button style={styles.startButton} onClick={handleMergeFleetClick}>
            Merge Fleet
          </button>
        ) : (
          <div>
            <button style={styles.backButton} onClick={handleBackClick}>
              Back
            </button>
            <div style={styles.section}>
              <h2>Project Info</h2>
              <div style={styles.card}>
                <div>
                  <p style={styles.cardText}>Title Line 1</p>
                  <p style={styles.cardText}>Untitled1</p>
                </div>
                <Edit2 style={styles.editIcon} />
              </div>
              <div style={styles.card}>
                <div>
                  <p style={styles.cardText}>Title Line 2</p>
                  <p style={styles.cardText}>Untitled2</p>
                </div>
                <Edit2 style={styles.editIcon} />
              </div>
              <div style={styles.card}>
                <div>
                  <p style={styles.cardText}>Not Submitted</p>
                </div>
              </div>
              <div style={styles.card}>
                <div>
                  <p style={styles.cardText}>Merge Type*</p>
                  <select>
                    <option value="cinematic">Cinematic Cut - Standalone Merge Fleet</option>
                    <option value="walkthrough">Walkthrough Cut - Standalone Merge Fleet</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={styles.section}>
              <button style={styles.verticalButton}>Import Clips</button>
              <button style={styles.verticalButton}>Import Audio</button>
              <p>Selected clips:</p>
              <p>No file to show</p>
              <p>Selected music:</p>
              <p>No music to show</p>
              <p>Extra Options:</p>
              <p>Video Orientation</p>
              <select value={videoOrientation} onChange={handleOrientationChange}>
                <option value="auto">Auto Detect Orientation</option>
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
              </select>
            </div>
            <div style={styles.buttonContainer}>
              <button style={styles.deleteButton}>Delete</button>
              <button style={styles.actionButton}>Save Project</button>
              <button style={styles.actionButton}>Start Test Merge</button>
              <button style={styles.actionButton}>Start Merge</button>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default MergeFleetPage;
