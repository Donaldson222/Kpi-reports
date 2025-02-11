import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import KpiTable from './Components/KpiTable/KpiTable';
import Buttons from './Components/Buttons/Buttons';

function App() {
  const [filter, setFilter] = useState('All'); // Filter state

  const data = [
    { consignCode: 'C001', consignee: 'John Doe', consignor: 'Company A', transporter: 'Transport Co.', driver: 'Alice', kpiName: 'Delivery Time', status: 'Resolved', targetDuration: '2 Days' },
    { consignCode: 'C002', consignee: 'Jane Smith', consignor: 'Company B', transporter: 'Transport Co.', driver: 'Bob', kpiName: 'Delivery Time', status: 'Unresolved', targetDuration: '3 Days' },
  ];

  // Filter the data based on the selected filter
  const filteredData = filter === 'All' ? data : data.filter(item => item.status === filter);

  return (
    <div style={{ display: 'flex', backgroundColor: '#EBEEF3', width: '100vw' }}>
      <Navbar />
      <div style={{ width: '95%', margin: 'auto', backgroundColor: 'white', marginLeft: '20px', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Buttons recordCount={filteredData.length} setFilter={setFilter} />
        <KpiTable data={filteredData} />
      </div>
    </div>
  );
}

export default App;
