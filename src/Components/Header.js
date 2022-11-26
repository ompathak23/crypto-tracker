import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Header = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            boxShadow: "none",
        }}>
            <AppBar color='transparent' position="static" boxShadow="none">
                <Container boxShadow="none">
                    <Toolbar boxShadow="none">
                        <IconButton size="large" color="inherit">
                            <MonetizationOnOutlinedIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            letterSpacing: '-.03rem',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}>
                            Crypto Tracker
                        </Typography>
                        <IconButton size="large" aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    )
}

export default Header