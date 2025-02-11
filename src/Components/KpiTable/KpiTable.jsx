import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Box } from '@mui/material';

const KpiTable = () => {
   

    const data = [
        { consignCode: 'C001', consignee: 'John Doe', consignor: 'Company A', transporter: 'Transport Co.', driver: 'Alice', kpiName: 'Delivery Time', status: 'On Time', targetDuration: '2 Days' },
        { consignCode: 'C002', consignee: 'Jane Smith', consignor: 'Company B', transporter: 'Transport Co.', driver: 'Bob', kpiName: 'Delivery Time', status: 'Unresolved', targetDuration: '3 Days' },
    ];

    return (
        <div>
            
            <TableContainer style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', display: 'inline-block', verticalAlign: 'top' }}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#F2F2F2' }}>
                            <TableCell><Checkbox /></TableCell>
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
                            <TableRow key={index}>
                                <TableCell><Checkbox /></TableCell>
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
        </div>
    );
};

export default KpiTable;
