import React from 'react';
import BeforeFooter from '../components/BeforeFooter';
import Duels from '../components/Duels';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SportsIcons from '../components/SportsIcons';
import Success from '../components/Success';
import ThreeSteps from '../components/ThreeSteps';
function Homepage(props) {
    return (
        <div>
            <Success />
            <Nav />
            <Header />
            <SportsIcons />
            <ThreeSteps />
            <Duels />
            <BeforeFooter />
            <Footer />
        </div>
    );
}

export default Homepage;