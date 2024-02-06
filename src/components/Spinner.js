import React from 'react';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)' // Add a semi-transparent background
};


function Spinner() {
  return (
    <div style={containerStyle}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
