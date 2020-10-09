import React, { FC } from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar/navbar';
import About from '../../components/AboutUs/AboutUs';
import PastWinners from '../../components/Past-Winners/past-winners';
import TeamPics from '../../components/TeamPics/teampics';
import Footer from '../../components/Footer/footer';

const Home: FC = (): JSX.Element => {
    return (
        <main className="HOME">
            <Navbar />
            <Title />
            <About />
            <PastWinners />
            <TeamPics />
            <Footer />
        </main>
    );
};

export default Home;
