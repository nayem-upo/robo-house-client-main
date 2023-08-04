import React from 'react';
import MainBanner from './MainBanner';
import Gallery from './Gallery';
import Categorys from './Categorys';
import Service from './Service';
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import useTitle from './useTitle';
import SubBanner from './SubBanner';
import Sponsors from './Sponsors';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <MainBanner></MainBanner>
            <Gallery></Gallery>
            <Categorys></Categorys>
            <Service></Service>
            <SubBanner></SubBanner>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;