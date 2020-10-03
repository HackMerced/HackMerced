import React, { FC } from 'react';

import './designprompt.scss';

const DesignPrompt: FC = (): JSX.Element => {
    return (
        <main className="DESIGNPROMPT">
            <article>
                <section className="left-prompt">
                    <span className="circle"></span>
                </section>
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
