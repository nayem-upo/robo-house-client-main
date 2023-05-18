import React from 'react';
import MainBanner from './MainBanner';
import Gallery from './Gallery';
import Categorys from './Categorys';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Gallery></Gallery>
            <Categorys></Categorys>
        </div>
    );
};

export default Home;