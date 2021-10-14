import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return(
        <Navbar />
        // Title component
        // <div className="LD__heading__content__title">
        //                 <picture>
        //                     <img srcSet={LD_TITLE_WEBP} src={LD_TITLE}
        //                         className="home__heading__content__title__img"
        //                         alt="LD Title"
        //                     />
        //                 </picture>
        //                 <div className="home__heading__content__title__text">The biggest San Joaquin Valley hackathon.</div>
        //                 <div className="home__heading__content__title__sub-text">Stay updated with HackMerced and subscribe to our email list!</div>

        //                 <form className="home__heading__content__title__form" onSubmit={handleSubmit}>
        //                     <input
        //                         className="home__heading__content__title__form_input"
        //                         type="email"
        //                         placeholder="Email"
        //                         name="email"
        //                         onChange={handleInputChange}
        //                         required
        //                     />
        //                     <button type="submit">Submit</button>
        //                 </form>
        //             </div>
        // FAQ component
        // Schedule component
        // render Footer component
    );
};

export default LearnDay;