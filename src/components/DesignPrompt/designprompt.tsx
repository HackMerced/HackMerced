import React, { FC } from 'react';

import './designprompt.scss';
// import lightbulb from '../../assets/images/lightbulb.png';
import lightbulb2 from '../../assets/images/lightbulb-layers.png';

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <main className="DESIGNPROMPT">
            <div className="ui-ux-title">The UI/UX Prompt</div>
            <img className="lightbulb2" src={lightbulb2} alt="Lightbulb Icon"></img>

            {/* <article>
                <div className="ui-ux-title">The UI/UX Prompt</div>
                <section className="PromptLeft">
                    <div id="one" className="circle"></div>
                    <div id="two" className="circle"></div>
                </section>
            </article>
            <img src={lightbulb} alt="Lightbulb Icon" /> */}

            <section className="promptright">
                <div className="infront-prompt"></div>
                <div className="behind-prompt"></div>
            </section>
        </main>
    );
};

export default DesignPrompt;
