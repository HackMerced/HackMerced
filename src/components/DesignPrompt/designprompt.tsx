import React, { FC } from 'react';

import './designprompt.scss';
import lightbulb from '../../assets/images/lightbulb.png';

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <main className="DESIGNPROMPT">
            <article>
                <section className="PromptLeft">
                    <div id="one" className="circle"></div>
                    <div id="two" className="circle"></div>
                </section>
                <img src={lightbulb} width="80%" alt="Lightbulb Icon" />
            </article>
            <aside>
                <section className="PromptTitle">
                    <div className="ui-ux-title">The UI/UX Prompt</div>
                </section>
            </aside>
        </main>
    );
};

export default DesignPrompt;
