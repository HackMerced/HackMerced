import React, { FC } from "react";

import "./styles.scss";

const Contribute: FC = (): JSX.Element => {
    return (
        <div className="grid-container">
            <a href="https://forms.gle/9HP7qPGiLNWDG3C4A" target="_blank">
                <div className="grid-item">Mentor</div>
            </a>
            <a href="https://forms.gle/jLqbvgyAdwnJR3XU7" target="_blank">
                <div className="grid-item">Volunteer</div>
            </a>
        </div>
    );
};

export default Contribute;