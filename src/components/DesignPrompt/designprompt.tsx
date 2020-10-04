import React, { FC } from 'react';

import './designprompt.scss';
// import lightbulb from '../../assets/images/lightbulb.png';
import PROMPTICON from '../../assets/images/lightbulb-layers.png';

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <main className="DESIGN__PROMPT">
            <div className="DESIGN__PROMPT__title">The UI/UX Prompt</div>
            <img className="DESIGN__PROMPT__icon" src={PROMPTICON} alt="Lightbulb Icon"></img>
            <section className="DESIGN__PROMPT__content">
                <div id="one__design__box" className="DESIGN__PROMPT__box"></div>
                <div id="two__design__box" className="DESIGN__PROMPT__box"></div>
                <p className="DESIGN__PROMPT__content__description__text">
                    DesignMerced is HackMerced’s first virtual designathon for creatives and design individuals in high
                    school and college from around the world. DesignMerced is a 24-hour event that will enhance
                    designers/creators innovative skills and showcase their own uniqueness of solving design with
                    technology. ‍<br></br> <br></br>
                    Students with all levels of design experience are encouraged to join us and discover their potential
                    as problem-solvers, innovators, and future designers. Look forward to a day of workshops,
                    activities, networking, games, and more!
                </p>
            </section>
        </main>
    );
};

export default DesignPrompt;
