import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return(
        <Navbar />

        /*Title component*/
        <div className="App">
        <p>
          Hi, {username ? username : 'Mysterious Entity'}, your user type is {username ? userType : 'irrelevant because I do not know you'}.
        </p>
        <p>
          {time.toUTCString()}
        </p>
      </div>
        /*FAQ component*/
        /* Schedule component*/
        /* render Footer component */
    );
};

export default LearnDay;