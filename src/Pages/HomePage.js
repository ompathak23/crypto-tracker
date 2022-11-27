import React, { useState } from 'react'
import Coins from '../Components/Coins'
import Banner from '../Components/Banner/Banner'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import FormControl from '@mui/material/FormControl';

const HomePage = () => {

    const [rows, setRows] = useState(10);


    return (
        <>
            <Banner />
            <Box sx={{ margin: '-80px', paddingBottom: '135px' }}>
                <Container>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'right', alignItems: 'center', flexDirection: 'row' }}>
                        <span style={{
                            fontFamily: 'Inter', fontStyle: 'normal',
                            fontSize: '12px',
                            color: '#5B667C',
                            fontWeight: 700,
                        }}>Show Rows</span>
                        <span>
                            <FormControl>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={rows}
                                    onChange={(e) => setRows(e.target.value)}
                                    style={{
                                        width: 60, height: 40, marginLeft: 15, fontFamily: 'Inter', fontStyle: 'normal',
                                        fontSize: '11px',
                                        color: '#5B667C',
                                    }}
                                    sx={{ fontSize: '12px', borderRadius: '12px' }}
                                >
                                    <MenuItem sx={{ fontSize: '12px' }} value={10}>10</MenuItem>
                                    <MenuItem sx={{ fontSize: '12px' }} value={20}>20</MenuItem>
                                    <MenuItem sx={{ fontSize: '12px' }} value={50}>50</MenuItem>
                                </Select>
                            </FormControl>
                        </span>
                    </div>
                </Container>
            </Box>
            <Coins rows={rows} />
        </>
    )
}

export default HomePage