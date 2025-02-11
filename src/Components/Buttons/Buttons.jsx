import React from 'react';
import { Select, MenuItem, Button } from '@mui/material';

import { CiExport } from "react-icons/ci";

const Buttons = ({ recordCount, setFilter, data }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleExport = () => {
        if (!data || data.length === 0) {
            alert("No records available to export!");
            return;
        }

        
        const headers = Object.keys(data[0]).join(","); 
        const csvRows = data.map(row => 
            Object.values(row)
                .map(value => `"${value}"`) 
                .join(",")
        );
        
        const csvContent = [headers, ...csvRows].join("\n");

       
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = "KPI_Reports.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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
            
           
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Select
                    defaultValue="All"
                    onChange={handleFilterChange} 
                    style={{
                        borderRadius: '35px',
                        marginRight: '10px',
                        width: '200px',
                    }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Resolved">Resolved</MenuItem>
                    <MenuItem value="Unresolved">Unresolved</MenuItem>
                </Select>

               
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
