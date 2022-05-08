import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Inventory/>
            <LatestNews/>
        </div>
    );
};

export default Home;