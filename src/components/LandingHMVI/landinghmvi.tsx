import React, { FC } from 'react';

import useWindowDimensions from '../WindowDimensions';
import './landinghmvi.scss';

const LandingHMVI: FC = (): JSX.Element => {
    const { width, height } = useWindowDimensions();
    console.log(`width: ${width}, height: ${height}`);
    let backgroundHeight = height > 600 ? height / 2 : 400;
    backgroundHeight = width > 800 ? height + height / 3 - 50 : backgroundHeight;
    return (
        <main className="LandingDesign" style={{ width: width, height: backgroundHeight }}>
            <section className="LandingDesign__container">
                <button
                    className="LandingDesign__container__button bg-white text-black font-bold"
                    onClick={() => {
                        window.location.href = 'https://hackmercedvi.typeform.com/to/mY7E1Fug';
                    }}
                >
                    <h1 className="LandingDesign__container__button__title">
                        Register <br /> Date: March 12-14
                    </h1>
                </button>
            </section>
        </main>
    );
};

export default LandingHMVI;
