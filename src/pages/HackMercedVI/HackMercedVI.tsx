import React, { FC } from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';

import './HackMercedVI.scss';

const HackMercedVI: FC = (): JSX.Element => {
    return (
        <>
            <Navbar backgroundColor="#E0E5EC" textColor="#0d0721" breakLineColor="#C4BDDC" showBanner={false}/>
            <section className="version-six">
                <div className="back">
                    <a  className="text">
                        HackMerced VI
                    </a>
                    <a  className="text2">
                        Coming Soon in Spring 2021
                    </a>
                </div>
            </section>
            <Footer backgroundColor="#E0E5EC" textColor="#0d0721" fontColor="#0d0721" />
        </>
    );
};

export default HackMercedVI;
