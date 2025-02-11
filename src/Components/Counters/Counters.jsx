import React from 'react';

const Counters = ({ data }) => {
    const totalAlerts = data.length;
    const resolvedAlerts = data.filter(row => row.status === 'Resolved').length;
    const unresolvedAlerts = data.filter(row => row.status === 'Unresolved').length;

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={counterStyle}>
                <h4 style={{ color: '#F4A261', marginBottom: '5px' }}>KPI Alerts</h4>
                <p style={countTextStyle}>{totalAlerts}</p>
            </div>
            <div style={counterStyle}>
                <h4 style={{ color: 'green', marginBottom: '5px' }}>Resolved</h4>
                <p style={countTextStyle}>{resolvedAlerts}</p>
            </div>
            <div style={counterStyle}>
                <h4 style={{ color: 'red', marginBottom: '5px' }}>Unresolved</h4>
                <p style={countTextStyle}>{unresolvedAlerts}</p>
            </div>
        </div>
    );
};

const counterStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    flex: 1,
    margin: '0 10px',
};

const countTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

export default Counters;
