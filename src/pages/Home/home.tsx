import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar-Orange/navbar';
import TeamPics from '../../components/TeamPics/teampics';
import Footer from '../../components/Footer/footer';

import About from '../../components/About Us/about';
const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar />
            <Title />
            <About />
            <TeamPics />
            <Footer />
        </div>
    );
};

export default Home;
