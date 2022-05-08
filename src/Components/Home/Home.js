import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import LatestNews from '../LatestNews/LatestNews';
import OurApp from '../OurApps/OurApp';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Inventory/>
            <LatestNews/>
            <OurApp/>
        </div>
    );
};

export default Home;