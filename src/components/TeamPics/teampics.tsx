import React, { FC } from 'react';

import TRUMAN from '../../assets/images/truman.png';
import LORENZO from '../../assets/images/lorenzo.png';
import MARY from '../../assets/images/mary.jpg';
import SHIV from '../../assets/images/shivanshu.jpg';
import ATHENA from '../../assets/images/athena.jpg';
import ADRIAN from '../../assets/images/adrian.jpg';
import BUSHER from '../../assets/images/busher.jpg';
import TUZETTE from '../../assets/images/tuzette.jpg';
import MANJOT from '../../assets/images/manjot.jpg';
import INTISER from '../../assets/images/Intiser.png';
import ALISSON from '../../assets/images/alisson.png';
import MARTHEN from '../../assets/images/marty.jpg';
import LAURENCE from '../../assets/images/laurence.png';
import JET from '../../assets/images/jet.jpg';
import JOSEPH from '../../assets/images/joseph.jpg';
import JANELLE from '../../assets/images/janelle.jpg';

import './teampics.scss';
import { TeamPicsState } from './teampics.types';


const TeamPics: FC = (): JSX.Element => {
    const team: Array<TeamPicsState> = [
        {
            url: 'https://www.linkedin.com/in/trumanjfchan/',
            src: TRUMAN,
        },
        {
            url: 'https://www.linkedin.com/in/lorenzo-scaturchio-62203b160/',
            src: LORENZO,
        },
        {
            url: 'https://www.linkedin.com/in/maryfrancine/',
            src: MARY,
        },
        {
            url: 'https://www.linkedin.com/in/adriandarian/',
            src: ADRIAN,
        },
        {
            url: 'https://www.linkedin.com/in/athena-siaotong/',
            src: ATHENA,
        },
        {
            url: 'https://www.linkedin.com/in/shiv248/',
            src: SHIV,
        },
        {
            url: 'https://www.linkedin.com/in/busher-bridi/',
            src: BUSHER,
        },
        {
            url: 'https://www.linkedin.com/in/tuzette-vu-500550100/',
            src: TUZETTE,
        },
        {
            url: 'https://www.linkedin.com/in/manjot-singh-0a41a8195/',
            src: MANJOT,
        },
        {
            url: 'https://www.linkedin.com/in/intiseraziz/',
            src: INTISER,
        },
        {
            url: 'https://www.linkedin.com/in/alisson-ross-6a7b75182/',
            src: ALISSON,
        },
        {
            url: 'https://www.linkedin.com/in/marthen-r-nodado/',
            src: MARTHEN,
        },
        {
            url: 'https://www.linkedin.com/in/laurenceamorganiii/',
            src: LAURENCE,
        },
        {
            url: 'https://www.linkedin.com/in/jatnael-montes/',
            src: JET,
        },
        {
            url: 'https://www.linkedin.com/in/joseph-hoang-414836194/',
            src: JOSEPH,
        },
        {
            url: 'https://www.linkedin.com/in/jpjanelleperez/',
            src: JANELLE,
        },
    ];

    const teampics = (team: Array<TeamPicsState>): JSX.Element => {
        let teamArray: Array<JSX.Element> = [];

        team.forEach((member: TeamPicsState, index: number) => {
            const name: string = member.src.includes('/')
                ? member.src.split('/')[3].split('.')[0]
                : member.src.split('.')[0];
            teamArray.push(
                <li key={index}>
                    <div className="hexagon">
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                            <img
                                className="Picture"
                                src={member.src}
                                alt={name.charAt(0).toUpperCase() + name.slice(1)}
                            />
                        </a>
                    </div>
                </li>,
            );
        });

        return (
            <ul id="grid" className="clear">
                <div className="CenterHexagons">{teamArray}</div>
            </ul>
        );
    };

    return (
        <section className="TEAMPICTURE">
            <header className="Header">
                <h1>Our Team</h1>
                <div className="break-line"></div>
            </header>
            {teampics(team)}
        </section>
    );
};

export default TeamPics;
