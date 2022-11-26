import React, { useState, useEffect } from 'react'
import Coins from '../Components/Coins'
import Banner from '../Components/Banner/Banner'

const HomePage = () => {
    return (
        <>
            <Banner />
            <Coins />
        </>
    )
}

export default HomePage