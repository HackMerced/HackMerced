import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandHoldingHeart,
    faHandshake,
    faLaptopCode,
    faPalette,
    faMeteor,
    faSchool,
    faMicrochip,
    faSearch,
    faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const PastWinners: FC = (): JSX.Element => {
    return (
        <section className="PAST-WINNERS">
            <h3 className="past-winners-title">Past Winners</h3>
            <div className="break-line"></div>
            <nav className="winners">
                <a href="https://devpost.com/software/helpers-spot" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="fa winner-icon" />
                    <h5 className="winner-title">Social Good</h5>
                    <h6 className="winner-group">Sustainably Yours</h6>
                </a>
                <a href="https://devpost.com/software/vibe-xja5cd" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faHandshake} className="fa winner-icon" />
                    <h5 className="winner-title">Inclusivity</h5>
                    <h6 className="winner-group">Undyslexify</h6>
                </a>
                <a href="https://devpost.com/software/kabobcat" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLaptopCode} className="fa winner-icon" />
                    <h5 className="winner-title">CyberSecurity</h5>
                    <h6 className="winner-group">Repul.ink</h6>
                </a>
                <a href="https://devpost.com/software/code-dude" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPalette} className="fa winner-icon" />
                    <h5 className="winner-title">Best in Design</h5>
                    <h6 className="winner-group">Sustainably Yours</h6>
                </a>
                <a href="https://devpost.com/software/snapcode-vabpfn" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSchool} className="fa winner-icon" />
                    <h5 className="winner-title">Best UC Merced-Related Hack</h5>
                    <h6 className="winner-group">Snapcode</h6>
                </a>
                <a href="https://devpost.com/software/esose" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSearch} className="fa winner-icon" />
                    <h5 className="winner-title">Tech for Social Good</h5>
                    <h6 className="winner-group">Vacchecker</h6>
                </a>
                <a href="https://devpost.com/software/3d-for-education" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMicrochip} className="fa winner-icon" />
                    <h5 className="winner-title">Best Hardware Hack</h5>
                    <h6 className="winner-group">EcoSafe</h6>
                </a>
                <a href="https://devpost.com/software/ghym" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMeteor} className="fa winner-icon" />
                    <h5 className="winner-title">Moonshot</h5>
                    <h6 className="winner-group">Blood Buds</h6>
                </a>
                <a href="https://devpost.com/software/a-clear-space" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDigitalOcean} className="fa winner-icon" />
                    <h5 className="winner-title">Best Domain Using Domain.com</h5>
                    <h6 className="winner-group">StreetSpots.Online</h6>
                </a>
                <a href="https://devpost.com/software/project-dms" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCloud} className="fa winner-icon" />
                    <h5 className="winner-title">Best Use of Google Cloud</h5>
                    <h6 className="winner-group">IdVision</h6>
                </a>
            </nav>
        </section>
    );
};

export default PastWinners;
