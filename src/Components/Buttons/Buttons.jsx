import React, { useState } from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { CiExport } from "react-icons/ci";

const Buttons = ({ recordCount }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = () => {
        // Logic for handling filter
    };

    const handleExport = () => {
        const data = [
            { consignCode: 'C001', consignee: 'John Doe', consignor: 'Company A', transporter: 'Transport Co.', driver: 'Alice', kpiName: 'Delivery Time', status: 'On Time', targetDuration: '2 Days' },
            { consignCode: 'C002', consignee: 'Jane Smith', consignor: 'Company B', transporter: 'Transport Co.', driver: 'Bob', kpiName: 'Delivery Time', status: 'Unresolved', targetDuration: '3 Days' },
        ];

        const csvRows = [
            ['Consign Code', 'Consignee', 'Consignor', 'Transporter', 'Driver', 'KPI Name', 'Status', 'Target Duration'],
            ...data.map(row => [
                row.consignCode,
                row.consignee,
                row.consignor,
                row.transporter,
                row.driver,
                row.kpiName,
                row.status,
                row.targetDuration
            ])
        ];

        const csvString = csvRows.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'kpi_data.csv');
        a.click();
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            marginTop: '20px', 
            marginLeft: '20px', 
            marginRight: '20px', 
            height: '100px', 
            padding: '0 20px' 
        }}>
            <h4 style={{ margin: 0, color: '#5F6D8C' }}>{recordCount} KPI Reports</h4>
            
            {/* Buttons Container */}
            <div style={{ display: 'flex', gap: '10px' }}>
                {/* Import Button */}
                <Button 
                    onClick={handleExport} 
                    style={{ 
                        backgroundColor: '#EBF7ED', 
                        color: 'black', 
                        minWidth: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}
                >
                    <CiExport size={20} />
                </Button>

                {/* Filter Button */}
                <Button 
                    onClick={handleFilter} 
                    style={{ 
                        backgroundColor: '#EBF7ED', 
                        color: 'black', 
                        minWidth: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}
                >
                    <FilterListIcon />
                </Button>
                <Button 
                    style={{ 
                        backgroundColor: '#E8FFEC', 
                        color: '#2C963D', 
                        borderRadius: '35px' 
                    }}
                >
                    Resolve All
                </Button>

            </div>
        </div>
    );
};

export default Buttons;
