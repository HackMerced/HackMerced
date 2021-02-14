import React, { FC } from 'react';
/* import Axios from 'axios'; */

import './teamCode.scss';

const TeamCode : FC = (): JSX.Element => {
return (
                        <div className="team-code">
                            <h1>Team Code</h1>
                            <h3 className = "teamCode">fkjlash</h3>
                            <button className = "generateButton" type="button">Generate</button>
                            <p>- or -</p>
                            <h2>Enter Team Code!</h2>
                            <input className="teamcodeInput" type="password" id="codeInput" name="password"></input>
                            <button className = "submitButton" type="button">Submit</button>
                        </div>
    );
};

export default TeamCode;