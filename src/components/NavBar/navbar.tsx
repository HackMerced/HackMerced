import React from 'react';
import './navbar.scss';
import HMLOGO from '../../assets/images/hackmerced-logo.png';

const styles = {
    width: '100px',
    height: '40px',
};

const Navbar: React.FC = () => {
    return (
        <nav className="NAVBAR">
            <div className="hackmerced-logo">
                <img src={HMLOGO} style={styles} alt="HACKMERCED LOGO" />
            </div>
        </nav>
    );
};

export default Navbar;
