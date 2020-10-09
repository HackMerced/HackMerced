import React, { FC } from 'react';

import './designprompt.scss';
import PROMPT_ICON from '../../assets/images/lightbulb-layers.png';

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <section className="design-prompt">
            <div className="design-prompt__title">The UI/UX Prompt</div>
            <section className="design-prompt__content">
                <img className="design-prompt__content__icon" src={PROMPT_ICON} alt="Lightbulb Icon" />
                <div className="design-prompt__content__box one-design-box"></div>
                <div className="design-prompt__content__box two-design-box"></div>
                <p className="design-prompt__content__description">
                    We want teams/individuals to design an application from the ground up of your dream app that
                    involves connectivity. Since quarantine started, there was a loss of physical contact and a needed
                    push toward fostering online connections. This UI/UX design app can include enriching peoples’
                    relationships, team collaboration/productivity, or devices finding new ways to connect. No
                    programming necessary.
                </p>
            </section>
        </section>
    );
};

export default DesignPrompt;
