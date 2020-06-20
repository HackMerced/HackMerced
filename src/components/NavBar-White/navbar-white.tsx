import React from 'react';
import { Link } from 'react-router-dom';
import MLHBANNER from '../../assets/images/mlh-badge.svg';

import './navbar-white.scss';

const styles = {
    width: '100px',
    height: '175px',
};

const NavbarWhite: React.FC = () => {
    return (
        <nav className="NAVBAR1 sticky flex">
            <div className="NAVTEXT block flex-auto ">
                <ul className="flex float-right">
                    <li className="mr-3 active">
                        <Link
                            className="navbar-white active inline-block rounded font-bold    py-2 px-3"
                            to="/"
                        >
                            HOME
                        </Link>
                    </li>
                    {/* <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold  hover:bg-black  py-2 px-3"
                            href="http://localhost:3000/"
                        >
                            EVENTS
                        </a>
                    </li> */}
                    <li className="mr-3">
                        <Link
                            className="navbar-white inline-block rounded font-bold   py-2 px-3  "
                            to="past-hackathons"
                        >
                            PAST HACKATHONS
                        </Link>
                    </li>
                    <li className="mr-3">
                        <a
                            className="navbar-white inline-block rounded font-bold   py-2 px-3  "
                            href="http://localhost:3000/"
                        >
                            SPONSOR US
                        </a>
                    </li>
                    <li>
                        <a
                            className="navbar-white inline-block rounded font-bold   py-2 px-3  "
                            href="http://localhost:3000/"
                        >
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </div>
            <div className="MLH-banner">
                <img className="MLH" src={MLHBANNER} style={styles} alt="MLH BANNER" />
            </div>
        </nav>
    );
};

export default NavbarWhite;
