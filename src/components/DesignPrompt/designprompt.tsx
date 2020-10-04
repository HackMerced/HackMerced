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
                    We want you to design an application from the ground up of your dream app that involves
                    connectivity. Since quarantine started, there was a loss of physical contact and a greater push
                    toward fostering online connections. This can include enriching peoples’ relationships, team
                    collaboration/productivity, and devices finding new ways to connect with each other. No programming
                    necessary.
                </p>
            </section>
        </main>
    );
};

export default DesignPrompt;
