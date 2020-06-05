import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar/navbar';
import TeamPics from '../../components/TeamPics/teampics';
import Footer from '../../components/Footer/footer';

const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar />
            <Title />
            <TeamPics />
            <Footer />
        </div>
    );
};

export default Home;
