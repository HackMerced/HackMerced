import React from 'react';
import { Link } from 'react-router-dom';

import MLHBANNER from '../../assets/images/mlh-badge.svg';
import './navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="NAVBAR sticky flex">
            <div className="NAVTEXT block flex-auto ">
                <ul className="flex float-right">
                    <li className="mr-3 active">
                        <Link
                            className="active inline-block rounded font-bold hover:text-black hover:bg-white text-gray-100 py-2 px-3"
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
                        <a
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            href="http://localhost:3000/"
                        >
                            PAST HACKATHONS
                        </a>
                    </li>
                    <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            href="http://localhost:3000/"
                        >
                            SPONSOR US
                        </a>
                    </li>
                    <li>
                        <a
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            href="http://localhost:3000/"
                        >
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </div>
            <div className="MLH-banner">
                <img className="MLH" src={MLHBANNER} width="100px" height="175px" alt="MLH BANNER" />
            </div>
        </nav>
    );
};

export default Navbar;
