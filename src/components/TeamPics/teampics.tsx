import React from 'react';

import TRUMAN from '../../assets/images/truman1.jpg';
import LORENZO from '../../assets/images/lorenzo1.jpg';
import MARY from '../../assets/images/mary1.jpg';
import SHIV from '../../assets/images/shiv1.jpg';
import ATHENA from '../../assets/images/athena1.jpg';
import ADRIAN from '../../assets/images/adrian1.jpg';
import BUSHER from '../../assets/images/busher.jpg';
import TUZETTE from '../../assets/images/tuzette.jpg';
import MANJOT from '../../assets/images/manjot1.jpg';
import KACEY from '../../assets/images/kacey.jpg';
// import SID from '../../assets/images/sid.jpg';
// import INTISER from '../../assets/images/intiser.jpg';

import './teampics.scss';

/* Outline for this component largely taken from: https://www.codesmite.com/article/how-to-create-pure-css-hexagonal-grids */

const Test: React.FC = () => {
    return (
        <body>
            <div className="Header">
                <h1>Our Team</h1>
            </div>

            <ul id="grid" className="clear">
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/trumanjfchan/">
                            <img className="Picture" src={TRUMAN} alt="Truman" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/lorenzo-scaturchio-62203b160/">
                            <img className="Picture" src={LORENZO} alt="Lorenzo" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/maryfrancine/">
                            <img className="Picture" src={MARY} alt="Mary" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/shiv248/">
                            <img className="Picture" src={SHIV} alt="Shiv" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/athena-siaotong/">
                            <img className="Picture" src={ATHENA} alt="Athena" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/adriandarian/">
                            <img className="Picture" src={ADRIAN} alt="Adrian" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/busher-bridi/">
                            <img className="Picture" src={BUSHER} alt="Busher" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/tuzette-vu-500550100/">
                            <img className="Picture" src={TUZETTE} alt="Tuzette" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/manjot-singh-0a41a8195/">
                            <img className="Picture" src={MANJOT} alt="Manjot" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/kacey-su-351950176/">
                            <img className="Picture" src={KACEY} alt="Kacey" />
                        </a>
                    </div>
                </li>
                {/* <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/sidharth-babu/">
                            <img className="Picture" src={SID} alt="Sid" />
                        </a>
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <a href="https://www.linkedin.com/in/intiseraziz/">
                            <img className="Picture" src={INTISER} alt="Intiser" />
                        </a>
                    </div>
                </li> */}
            </ul>
        </body>
    );
};

export default Test;
