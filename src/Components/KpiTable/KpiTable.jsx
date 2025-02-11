import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Box } from '@mui/material';

const KpiTable = ({ data }) => {
    const [selected, setSelected] = useState(new Array(data.length).fill(false)); 

    const isAllSelected = selected.every(Boolean);
    const isSomeSelected = selected.some(Boolean) && !isAllSelected;

    
    const handleSelectAll = () => {
        setSelected(new Array(data.length).fill(!isAllSelected)); 
    };

    
    const handleSelectRow = (index) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index]; 
        setSelected(newSelected);
    };

    return (
        <TableContainer style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', display: 'inline-block', verticalAlign: 'top' }}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#F2F2F2' }}>
                        <TableCell>
                            <Checkbox 
                                checked={isAllSelected} 
                                indeterminate={isSomeSelected} 
                                onChange={handleSelectAll} 
                            />
                        </TableCell>
                        <TableCell>Consign Code</TableCell>
                        <TableCell>Consignee</TableCell>
                        <TableCell>Consignor</TableCell>
                        <TableCell>Transporter</TableCell>
                        <TableCell>Driver</TableCell>
                        <TableCell>KPI Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Target Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={row.consignCode}>
                            <TableCell>
                                <Checkbox 
                                    checked={selected[index]} 
                                    onChange={() => handleSelectRow(index)} 
                                />
                            </TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.consignCode}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.consignee}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.consignor}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.transporter}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.driver}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.kpiName}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>
                                {row.status === 'Unresolved' ? (
                                    <Box component="span" sx={{ color: 'red', marginRight: '5px' }}>●</Box>
                                ) : null}
                                {row.status}
                            </TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.targetDuration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default KpiTable;
