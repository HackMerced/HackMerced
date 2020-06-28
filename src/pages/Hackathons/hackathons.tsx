import React from 'react';

import Navbar1 from '../../components/NavBar-White/navbar-white';
import SuccessV from '../../components/Success-V/success-v';
import HackMercedV from '../../components/HackMerced-V/hackmerced-v';
import SuccessIV from '../../components/Success-IV/success-iv';
import HackMercedIV from '../../components/HackMerced-IV/hackmerced-iv';
import SuccessIII from '../../components/Success-III/success-iii';
import HackMercedIII from '../../components/HackMerced-III/hackmerced-iii';
import SuccessII from '../../components/Success-II/success-ii';
import HackMercedII from '../../components/HackMerced-II/hackmerced-ii';
import Success from '../../components/Success/success';
import HackMerced from '../../components/HackMerced/hackmerced';
import Footer from '../../components/Footer/footer';

const Home: React.FC = () => {
    return (
        <div className="">
            <Navbar1 />
            <SuccessV />
            <HackMercedV />
            <SuccessIV />
            <HackMercedIV />
            <SuccessIII />
            <HackMercedIII />
            <SuccessII />
            <HackMercedII />
            <Success />
            <HackMerced />
            <Footer />
        </div>
    );
};

export default Home;
