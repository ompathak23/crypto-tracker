import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Coins.css'

// Import Libraries

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from '@mui/material/Pagination';
import { Container } from '@mui/system';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import { Hidden } from '@mui/material';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const headCells = [
    {
        id: 'rank',
        numeric: false,
        disablePadding: true,
        visibility: false,
        label: '#',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        visibility: true,
        label: 'NAME',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        visibility: true,
        label: 'PRICE',
    },
    {
        id: '24h',
        numeric: true,
        disablePadding: false,
        visibility: true,
        label: '24H',
    },
    {
        id: '7d',
        numeric: true,
        disablePadding: false,
        visibility: false,
        label: '7D',
    },
    {
        id: 'market_cap',
        numeric: true,
        disablePadding: false,
        visibility: false,
        label: 'MARKET CAP',
    },
    {
        id: 'volume',
        numeric: true,
        disablePadding: false,
        visibility: false,
        label: 'VOLUME(24H)',
    },
    {
        id: 'supply',
        numeric: true,
        disablePadding: false,
        visibility: false,
        label: 'CIRCULATING SUPPLY',
    },
];


function EnhancedTableHead(props) {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ visibility: { sm: 'hidden', md: 'visible' } }}>

                </TableCell>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        <TableSortLabel sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '12px',
                        }}>
                            <h5>{headCell.label}</h5>
                        </TableSortLabel>

                    </TableCell>
                ))}

                <TableCell>

                </TableCell>
            </TableRow>
        </TableHead>
    );
}

const Coins = () => {
    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // OLD CODE LINE

    const [page, setPage] = useState(1);

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // Avoid a layout jump when reaching the last page with empty rows.
    //const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - coins.length) : 0;

    return (
        <Container style={{ textAlign: "center" }}>
            <Box sx={{ width: '100%', alignItems: 'center' }}>
                <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead />
                            <TableBody >
                                {
                                    coins.slice((page - 1) * 10, (page - 1) * 10 + 10)
                                        .map((coin, index) => {
                                            // const isItemSelected = isSelected(coin.name);
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            const profit = coin.price_change_percentage_24h > 0;
                                            const profit_two = coin.price_change_percentage_7d_in_currency > 0;

                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={coin.name}
                                                >
                                                    <TableCell padding="normal">
                                                        <StarBorderOutlinedIcon
                                                            sx={{ color: '#ABB4C2' }}
                                                            fontSize='small' />
                                                    </TableCell>

                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                        style={{
                                                            fontFamily: 'Inter', fontStyle: 'normal',
                                                            fontSize: '12px',
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {coin.market_cap_rank}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        scope="row"
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'left',
                                                            alignItems: 'center',
                                                        }}>
                                                        <img
                                                            src={coin?.image}
                                                            alt={coin.name}
                                                            height="10"
                                                            style={{ marginBottom: 5, height: 25 }}
                                                        />
                                                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', flexDirection: 'row' }}>
                                                            <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontColor: "#222531", }}>{coin.name}</span>
                                                            &nbsp;
                                                            <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 300, fontColor: "#808A9D", textTransform: 'uppercase' }}>{coin.symbol}</span>
                                                        </div>

                                                    </TableCell>

                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px',
                                                        fontWeight: 500,
                                                    }}>${numberWithCommas(coin.current_price.toFixed(2))}</TableCell>

                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px', color: profit > 0 ? "#16C784" : "#EA3943",
                                                        fontWeight: 500,
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', flexDirection: 'row' }}>
                                                            <span>{profit > 0 ? <ArrowDropUpOutlinedIcon fontSize='small' style={{ color: '#16C784' }} /> : <ArrowDropDownOutlinedIcon fontSize='small' style={{ color: '#EA3943' }} />}</span>
                                                            <span>{Math.abs(coin.price_change_percentage_24h.toFixed(2))}%</span>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px', color: profit_two > 0 ? "#16C784" : "#EA3943",
                                                        fontWeight: 500,
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', flexDirection: 'row' }}>
                                                            <span>{profit_two > 0 ? <ArrowDropUpOutlinedIcon fontSize='small' style={{ color: '#16C784' }} /> : <ArrowDropDownOutlinedIcon fontSize='small' style={{ color: '#EA3943' }} />}</span>
                                                            <span>{Math.abs(coin.price_change_percentage_7d_in_currency.toFixed(2))}%</span>
                                                        </div>
                                                    </TableCell>



                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px',
                                                        fontWeight: 500,
                                                    }}>${numberWithCommas(coin.market_cap.toString())}</TableCell>

                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px',
                                                        fontWeight: 500,
                                                    }}>

                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', margin: 0, padding: 0 }}>
                                                            <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, fontSize: '11px', fontColor: "#222531", }}>${numberWithCommas(coin.total_volume.toString())}</span>
                                                            <span style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 300, fontSize: '9px', fontColor: "#808A9D", }}>{numberWithCommas(coin.circulating_supply.toString().slice(0, -3))} BTC</span>
                                                        </div>

                                                    </TableCell>


                                                    <TableCell align="right" style={{
                                                        fontFamily: 'Inter', fontStyle: 'normal',
                                                        fontSize: '12px',
                                                        fontWeight: 500,
                                                    }}>{numberWithCommas(coin.circulating_supply.toString().slice(0, -3))} BTC

                                                        <LinearProgress variant="determinate" color="inherit" value={(coin.circulating_supply / coin.total_supply) * 100}
                                                            style={{
                                                                marginTop: '7px',
                                                                backgroundColor: '#EFF2F5',
                                                            }} />
                                                    </TableCell>

                                                    <TableCell align="right"><MoreVertIcon sx={{ color: '#ABB4C2' }} fontSize='small' /></TableCell>
                                                </TableRow>
                                            );
                                        })}
                                {/* {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )} */}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* <TablePagination
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    component="div"
                    count={coins.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    variant="outlined" shape="rounded"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}

                    <Pagination
                        count={(coins.length / 10).toFixed(0)}
                        variant="outlined"
                        shape="rounded"
                        style={{
                            padding: 20,
                            width: "100%",
                            display: "flex",
                            justifyContent: "right",
                        }}
                        onChange={(_, value) => {
                            setPage(value);
                            window.scroll(0, 450);
                        }}

                    // // classes={{ ul: classes.pagination }}
                    // onChange={(_, value) => {
                    //     setPage(value);
                    //     window.scroll(0, 450);
                    // }}
                    />
                </Paper>
            </Box>
        </Container >
    )
}

export default Coins