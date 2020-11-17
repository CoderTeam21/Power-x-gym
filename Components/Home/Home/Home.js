import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <AboutUs />
            <CarouselSlider></CarouselSlider>
            <ChooseUs />
            <Footer />
        </>
    );
};

export default Home;