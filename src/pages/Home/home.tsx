import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar/navbar';
import TeamPics from '../../components/TeamPics/teampics';
import Footer from '../../components/Footer/footer';

import About from '../../components/About Us/about';
const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar />
            <Title />
            <TeamPics />
            <Footer />
            <About />
        </div>
    );
};

export default Home;
