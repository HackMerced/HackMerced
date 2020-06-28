import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar-Orange/navbar';
import About from '../../components/About Us/about';
import PastWinners from '../../components/Past-Winners/past-winners';
import TeamPics from '../../components/TeamPics/teampics';
import Footer from '../../components/Footer/footer';

const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar />
            <Title />
            <About />
            <PastWinners />
            <TeamPics />
            <Footer />
        </div>
    );
};

export default Home;
