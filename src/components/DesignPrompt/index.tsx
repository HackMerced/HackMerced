import React, { FC } from "react";

import PROMPT_ICON from "../../assets/images/lightbulb-layers.png";
import "./styles.scss";

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <section className="design-prompt">
            <div className="design-prompt__title">The UI/UX Prompt</div>
            <section className="design-prompt__content">
                <article className="design-prompt__content__description">
                    <p className="design-prompt__content__description__text">
                        We want teams/individuals to design an application from the ground up of your dream app that
                        involves connectivity. Since quarantine started, there was a loss of physical contact and a
                        needed push toward fostering online connections. This UI/UX design app can include enriching
                        peoples’ relationships, team collaboration/productivity, or devices finding new ways to connect.
                        No programming necessary.
                    </p>
                </article>
                <img className="design-prompt__content__logo" src={PROMPT_ICON} alt="Lightbulb Icon" />
            </section>
        </section>
    );
};

export default DesignPrompt;
