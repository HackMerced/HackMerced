import React from 'react';

import Navbar from '../../components/NavBar/navbar';
import Title from '../../components/Title/title';
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
