import React from 'react';
import { Link } from 'react-router-dom';

import MLHBANNER from '../../assets/images/mlh-badge.svg';
import './navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="NAVBAR sticky flex">
            <div className="MLH-banner">
                <img className="MLH" src={MLHBANNER} width="100" height="175" alt="MLH BANNER" />
            </div>
            <div className="NAVTEXT navigation block flex-auto ">
                <ul className="flex float-right">
                    <li className="mr-3 active">
                        <Link
                            className="active inline-block font-bold hover:text-black hover:bg-white text-gray-100 py-2 px-3"
                            to="/"
                        >
                            HOME
                        </Link>
                    </li>
                    {/* <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-black hover:bg-white  py-2 px-3"
                            href="http://localhost:3000/"
                        >
                            EVENTS
                        </a>
                    </li> */}
                    <li className="mr-3">
                        <Link
                            className="active inline-block font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="past-hackathons"
                        >
                            PAST HACKATHONS
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link
                            className="active inline-block font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="sponsors"
                        >
                            SPONSORS
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="active inline-block font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="contact-us"
                        >
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
