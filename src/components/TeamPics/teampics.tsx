import React, { FC } from 'react';

import TRUMAN from '../../assets/images/truman.jpg';
import LORENZO from '../../assets/images/lorenzo.jpg';
import MARY from '../../assets/images/mary.jpg';
import SHIV from '../../assets/images/shivanshu.jpg';
import ATHENA from '../../assets/images/athena.jpg';
import ADRIAN from '../../assets/images/adrian.jpg';
import BUSHER from '../../assets/images/busher.jpg';
import TUZETTE from '../../assets/images/tuzette.jpg';
import MANJOT from '../../assets/images/manjot.jpg';
import KACEY from '../../assets/images/kacey.jpg';
import INTISER from '../../assets/images/Intiser.png';

import './teampics.scss';
import { TeamPicsState } from './teampics.types';

/* Outline for this component largely taken from: https://www.codesmite.com/article/how-to-create-pure-css-hexagonal-grids */

function teampics(team: Array<TeamPicsState>): JSX.Element {
    let teamArray: Array<JSX.Element> = [];

    team.forEach((member: TeamPicsState, index: number) => {
        const name: string = member.src.includes('/')
            ? member.src.split('/')[4].split('.')[0]
            : member.src.split('.')[0];

        teamArray.push(
            <li key={index}>
                <div className="hexagon">
                    <a href={member.url}>
                        <img className="Picture" src={member.src} alt={name.charAt(0).toUpperCase() + name.slice(1)} />
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
}

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
            url: 'https://www.linkedin.com/in/kacey-su-351950176/',
            src: KACEY,
        },
        {
            url: 'https://www.linkedin.com/in/intiseraziz/',
            src: INTISER,
        },
    ];

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
