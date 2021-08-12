import React, { FC } from "react";

import "./styles.scss";

const Contribute: FC = (): JSX.Element => {
    return (
        <div className="grid-container">
            <a href="https://forms.gle/jnbAc1XSjRXa9sbi9" target="_blank">
                <div className="grid-item">Mentor</div>
            </a>
            <a href="https://forms.gle/Dh6z8SSAfFLN4m9s8" target="_blank">
                <div className="grid-item">Volunteer</div>
            </a>
        </div>
    );
};

export default Contribute;