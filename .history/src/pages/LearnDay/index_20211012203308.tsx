import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return (
        /*Title component*/
        <main>
            <Navbar />
            <section className="grid-container">
                <div className="texts">
                    <div>Title</div>
                </div>
                <div className="images"></div>
            </section>
            <form className="__heading__content__title__form" onSubmit={handleSubmit}>
                            <input
                                className="home__heading__content__title__form_input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
        </main>
        /*FAQ component*/
        /* Schedule component*/
        /* render Footer component */
    );
};

export default LearnDay;
