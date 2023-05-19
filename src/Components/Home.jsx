import React from 'react';
import MainBanner from './MainBanner';
import Gallery from './Gallery';
import Categorys from './Categorys';
import Service from './Service';
import Carousel from './Carousel';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Gallery></Gallery>
            <Categorys></Categorys>
            <Service></Service>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;