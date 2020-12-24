import React, { FC } from 'react';

import './asidebox.scss';

const AsideBox: FC = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <div className="event-scheduleox">
                    <div className="orangeRectangle"></div>
                    <h1>HackMerced VI</h1>
                    <h2>Hacking Starts</h2>
                    <h3>March 3, 2020</h3>
                    <h2>Hacking Ends</h2>
                    <h3>March 5, 2020</h3>
                </div>
            </div>
        </>
    );
};
export default AsideBox;
