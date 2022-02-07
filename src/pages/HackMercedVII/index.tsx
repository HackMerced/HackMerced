import React, { FC, Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { TextureLoader } from "three";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";
// import Accordian from "../../components/Accordian";

// import SUSTAINABILITY from "../../assets/images/sustainability.png";
// import INCLUSIVITY from "../../assets/images/inclusivity.png";
// import CYBER_SECURITY from "../../assets/images/cybersecurity.png";
// import SPONSORS from "../../assets/images/sponsors-hackmercedvi.png";
// import STICKER_MULE from "../../assets/images/sticker-mule-logo-light.png";

// import { FAQData } from "../../assets/faq";

import "./styles.scss";

const Scene: FC = (): JSX.Element => {
    // const colorMap = useLoader(TextureLoader, "./PavingStones092_1K_Color.jpg");
    let listOfMeshes: Array<JSX.Element> = [];

    for (let i = 0; i < 45; i++) {
        listOfMeshes.push(
            <mesh>
                <icosahedronGeometry args={[1, 32, 32]} />
                <meshPhongMaterial />
            </mesh>,
        );
    }

    return (
        <Fragment>
            <ambientLight color="#FF002E" intensity={0.6} />
            <directionalLight color="#00A3FF" intensity={0.6} position={[10, 0, 25]} />
            {listOfMeshes}
        </Fragment>
    );
};

const HackMercedVII: FC = (): JSX.Element => {
    const { width, height } = useWindowDimensions();

    let backgroundHeight = height > 600 ? height / 2 : 400;
    backgroundHeight = width > 800 ? height + height / 3 - 50 : backgroundHeight;

    return (
        <main className="hackmerced-vii">
            <Navbar backgroundColor="#0C2136" textColor="#FFFFF" breakLineColor="#C4BDDC" showBanner={true} />
            {/* Landing Header */}
            <section className="hackmerced-vii__landing" style={{ width: width, height: backgroundHeight }}>
                <h1 className="hackmerced-vii__landing__title">HackMerced VII</h1>
                <h2 className="hackmerced-vii__landing__date">March 4 - 6, 2022</h2>
                <h3 className="hackmerced-vii__landing__location">University of California, Merced</h3>
                <button
                    className="hackmerced-vii__landing__registration"
                    onClick={() => {
                        window.location.href = "https://hackmercedvi.typeform.com/to/mY7E1Fug";
                    }}
                >
                    Register Now!
                </button>
            </section>
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            {/* Themes Section */}
            {/* <section className="hackmerced-vi__themes">
                <h1 className="hackmerced-vi__themes__title">Themes</h1>
                <div className="hackmerced-vi__themes__container">
                    <div className="track-one">
                        <h2>Social Good</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={SUSTAINABILITY}
                            alt="Sustainability Track"
                        />
                        <p>
                            Social Good also known as common good, focuses on societal problems and potential to offer
                            meaningful solutions. Create a project to bring the world to a more equitable and
                            sustainable path.
                        </p>
                    </div>
                    <div className="track-two">
                        <h2>Inclusivity</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={INCLUSIVITY}
                            alt="Inclusivity Track"
                        />
                        <p>
                            Diversity is an integral part of our history, culture, and identity. Inclusion is the way we
                            treat and perceive all differences. Create a project to accelerate the approach to diversity
                            and inclusion.
                        </p>
                    </div>
                    <div className="track-three">
                        <h2>Cybersecurity</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={CYBER_SECURITY}
                            alt="Cybersecurity Track"
                        />
                        <p>
                            The substantial use of technology has made it vital to safeguard ourselves from unapproved
                            access. Private information and data are more exposed than before to such unpleasantries.
                            Create a project to enrich a safe digital world.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* FAQ Section */}
            {/* <section className="hackmerced-vi__faq">
                <h2 className="hackmerced-vi__faq__title">Frequently Asked Questions</h2>
                <Accordian data={FAQData} />
            </section> */}
            {/* Sponsors Section */}
            {/* <section className="hackmerced-vi__sponsors">
                <div>
                    <h2 className="hackmerced-vi__sponsors__title">Sponsors</h2>
                    <img src={SPONSORS} width="100%" alt="Our Sponsors for HackMerced VI" />
                    <a className="sticker_mule" href="http://hackp.ac/mlh-stickermule-hackathons">
                        <img className="sticker_mule__img" src={STICKER_MULE} alt="sticker mule logo" />
                    </a>
                </div>
            </section> */}
            <Footer backgroundColor="#B63F1A" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVII;
