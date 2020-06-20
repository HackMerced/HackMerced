import React, { FC } from 'react';

import TRUMAN from '../../assets/images/truman.jpg';
import LORENZO from '../../assets/images/lorenzo.jpg';
import MARY from '../../assets/images/mary2.jpg';
import SHIV from '../../assets/images/shiv1.jpg';
import ATHENA from '../../assets/images/athena2.jpg';
import ADRIAN from '../../assets/images/adrian.jpg';
import BUSHER from '../../assets/images/busher2.jpg';
import TUZETTE from '../../assets/images/tuzette2.jpg';
import MANJOT from '../../assets/images/manjot2.jpg';
import KACEY from '../../assets/images/kc.jpg';
import INTISER from '../../assets/images/Intiser3.png';
// import SID from '../../assets/images/sid.jpg';

import './teampics.scss';

/* Outline for this component largely taken from: https://www.codesmite.com/article/how-to-create-pure-css-hexagonal-grids */

function teampics(team: Array<{ url: string; src: any; alt: string }>): JSX.Element {
    let teamArray: Array<JSX.Element> = [];

    team.forEach((member: { url: string; src: any; alt: string }, index: number) => {
        teamArray.push(
            <li key={index}>
                <div className="hexagon">
                    <a href={member.url}>
                        <img className="Picture" src={member.src} alt={member.alt} />
                    </a>
                </div>
            </li>,
        );
    });

    return <ul id="grid" className="clear">{teamArray}</ul>;
}

const TeamPics: FC = (): JSX.Element => {
    const team: Array<{ url: string; src: any; alt: string }> = [
        {
            url: 'https://www.linkedin.com/in/trumanjfchan/',
            src: TRUMAN,
            alt: 'Truman',
        },
        {
            url: 'https://www.linkedin.com/in/lorenzo-scaturchio-62203b160/',
            src: LORENZO,
            alt: 'Lorenzo',
        },
        {
            url: 'https://www.linkedin.com/in/maryfrancine/',
            src: MARY,
            alt: 'Mary Francine',
        },
        {
            url: 'https://www.linkedin.com/in/adriandarian/',
            src: ADRIAN,
            alt: 'Adrian',
        },
        {
            url: 'https://www.linkedin.com/in/athena-siaotong/',
            src: ATHENA,
            alt: 'Athena',
        },
        {
            url: 'https://www.linkedin.com/in/shiv248/',
            src: SHIV,
            alt: 'Shivanshu',
        },
        {
            url: 'https://www.linkedin.com/in/busher-bridi/',
            src: BUSHER,
            alt: 'Busher',
        },
        {
            url: 'https://www.linkedin.com/in/tuzette-vu-500550100/',
            src: TUZETTE,
            alt: 'Tuzette',
        },
        {
            url: 'https://www.linkedin.com/in/manjot-singh-0a41a8195/',
            src: MANJOT,
            alt: 'Manjot',
        },
        {
            url: 'https://www.linkedin.com/in/kacey-su-351950176/',
            src: KACEY,
            alt: 'Kacey',
        },
        {
            url: 'https://www.linkedin.com/in/intiseraziz/',
            src: INTISER,
            alt: 'Intiser',
        },
    ];

    return (
        <section className="TEAMPICTURE">
            <header className="Header">
                <h1>Our Team</h1>
            </header>
            {teampics(team)}
        </section>
    );
};

export default TeamPics;
