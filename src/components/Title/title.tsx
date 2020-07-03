import React, { FC } from 'react';

import HMTITLE from '../../assets/images/placeholder-title.png';
import HMTOWER from '../../assets/images/tower.png';
import './title.scss';

const Title: FC = (): JSX.Element => {
    return (
        <section className="TITLE ">
            <div className="t-wave">
                <div className="cloud c1"></div>
                <div className="cloud c2"></div>
                <div className="cloud c3"></div>
                <div className="cloud c4"></div>
                <div className="cloud c5"></div>
            </div>
            <div className="hackmerced-title">
                <img src={HMTITLE} width="400" height="175" alt="HACKMERCED TITLE" />
            </div>
            <div className="title-subtext text-gray-100 ">The biggest San Joaquin Valley hackathon.</div>
            <div className="title-text text-gray-100 ">
                Stay updated with HackMerced and subscribe to our email list!
            </div>
            <button
                onClick={(): void => {
                    window.location.href = '#popup3';
                }}
                className="bg-white text-black BUTTON font-bold"
            >
                Subscribe
            </button>

            <div id="popup3" className="overlay light">
                <a className="cancel" href="#"></a>
                <div className="popup1">
                    <h3>HackMerced Mailing List</h3>
                    <div className="formpopup1">
                        <form>
                            <div className="labels-form">
                                <h2>Name</h2>
                            </div>
                            <input placeholder="Name" type="text" required></input>
                            <br></br>
                            <div className="labels-form">
                                <h2>Email</h2>
                            </div>
                            <input placeholder="Email" type="email" required></input>
                            <br></br>
                            <div className="formbutton">
                                <button className="button4">Submit</button>
                            </div>
                        </form>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <div className="hackmerced-tower">
                <img src={HMTOWER} width="525" height="1005" alt="HACKMERCED TITLE" />
            </div>
        </section>
    );
};

export default Title;
