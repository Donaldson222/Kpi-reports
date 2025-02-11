import React, { useState } from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { CiImport } from "react-icons/ci";

const Buttons = ({ recordCount }) => {
    const [searchTerm, setSearchTerm] = useState('');

  

    const handleFilter = () => {
        // Logic for handling filter
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', height: '100px'}}>
            <h4 style={{ margin: 0 }}>{recordCount} KPI Reports</h4>
            <div>
                <Button>
                <CiImport />
                </Button>
                <Button onClick={handleFilter} startIcon={<FilterListIcon />} style={{ marginRight: '10px' }}>
                    
                </Button>
                
            </div>
        </div>
    );
};

export default Buttons;
