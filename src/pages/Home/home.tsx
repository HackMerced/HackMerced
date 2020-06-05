import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/NavBar/navbar';
import About from '../../components/About Us/about';
const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar />
            <Title />
            <About />
        </div>
    );
};

export default Home;
