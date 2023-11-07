import React from 'react';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import CarouselComponent from './Carousel';
import About from './About';
import Faculty from '../Faculty/Faculty';
import Presentation from '../Presentation/Presentation';
import Achievement from '../Achievement/Achievement';
import UniversityInfo from '../Information/UniversityInfo';
import Footer from '../Footer/Footer';
import Scroller from '../Scroller/Scroller';

const HomePage = () => {
    return (
        <div>
            <Scroller></Scroller>
            <Navbar></Navbar>
           <CarouselComponent></CarouselComponent>
           <About></About>
           <Faculty></Faculty>
           <Presentation></Presentation>
           <UniversityInfo></UniversityInfo>
           <Achievement></Achievement>

           <Footer></Footer>
        </div>
    );
};

export default HomePage;