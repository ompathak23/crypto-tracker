import React from 'react'
import './Banner.css'
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Carousel from './Carousel'

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 8px',
    lineHeight: 1.5,
    backgroundColor: '#EFF2F5',
    borderRadius: '8px',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 12,
    color: '#5B667C',

    '&:hover': {
        backgroundColor: '#EFF2F5',
        boxShadow: 'none',
    },

    '&:active': {
        boxShadow: 'none',
        color: '#3861FB',
    },
});

const Banner = () => {
    return (
        <div className='banner'>
            <div className='appbar'>
                <Container>
                    <div className='content'>
                        <Carousel />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', sm: 'flex' },
                                fontWeight: 700,
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                color: 'inherit',
                                letterSpacing: '-.03rem',
                                textDecoration: 'none',
                                textTransform: "capitalize",
                                flexGrow: 1,
                            }}
                        >
                            Top 100 Cryptocurrencies by Market Cap
                        </Typography>

                        <Stack direction="row"
                            spacing={2}
                            style={{
                                marginTop: 20,
                                marginBottom: 20,
                            }}

                            //sx={{ visibility: { xs: 'hidden', md: 'visible' } }}
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >
                            <CustomButton variant="contained" startIcon={<StarBorderOutlinedIcon fontSize="small" />} size="small" disableElevation>
                                Favourites
                            </CustomButton>
                            <CustomButton variant="contained" size="small" disableElevation>
                                CryptoCurrencies
                            </CustomButton>
                            <CustomButton variant="contained" size="small" disableElevation>
                                DeFi
                            </CustomButton>
                            <CustomButton variant="contained" size="small" disableElevation>
                                NFTs & Collectibles
                            </CustomButton>
                        </Stack>
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default Banner