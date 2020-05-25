import React from 'react';
import { Link } from 'react-router-dom';
import HMLOGO from '../../assets/images/hackmerced-logo.png';

import './title.scss';

const styles = {
    width: '100px',
    height: '90px',
};

const Title: React.FC = () => {
    return (
        <section className="TITLE t-wave">
            <div className="hackmerced-logo">
                <Link to="/">
                    {' '}
                    <img src={HMLOGO} style={styles} alt="HACKMERCED LOGO" />
                </Link>
            </div>
            <div className="font-black TITLE-TEXT">
                HackMerced <br />{' '}
            </div>
            <div className="title-subtext">The biggest San Joaquin Valley hackathon.</div>
            <button className="bg-white text-black BUTTON font-bold">Subscribe</button>
            <div className="wrapper">
                <div className="wave-top"></div>
                <div className="wave-bottom"></div>
            </div>
        </section>
    );
};

export default Title;
