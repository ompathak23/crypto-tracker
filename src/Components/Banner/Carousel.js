import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Carousel.css'
import { carouselData } from './data'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Carousel = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className='Carousel'>
            <Slider {...settings}>
                {carouselData.map((item) => (
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        borderRadius: '12px',
                        height: 100,
                        boxShadow: '0px 0.5px 5px 1px rgba(208, 214, 227, 0.5)'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'columnn',
                        }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    paddingLeft: '15px',
                                    paddingTop: '15px',
                                    paddingRight: '15px',
                                    paddingBottom: '15px',
                                    margin: 0,
                                    borderRadius: 8,
                                }}
                                image={item.linkImg}
                            />
                            <CardContent sx={{ paddingTop: '20px' }}>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))
                }
            </Slider >
        </div >
    )
}

export default Carousel