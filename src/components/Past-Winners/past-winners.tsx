import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandHoldingHeart,
    faMedkit,
    faSeedling,
    faPalette,
    faMeteor,
    faUserPlus,
    faMicrochip,
    faSearch,
    faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { faDigitalOcean } from '@fortawesome/free-brands-svg-icons';

import './past-winners.scss';

const PastWinners: FC = (): JSX.Element => {
    return (
        <section className="PAST-WINNERS">
            <h3 className="past-winners-title">Past Winners</h3>
            <div className="break-line"></div>
            <nav className="winners">
                <a href="https://devpost.com/software/helpers-spot" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="fa winner-icon" />
                    <h5 className="winner-title">Social Good</h5>
                    <h6 className="winner-group">Helpers Spot</h6>
                </a>
                <a href="https://devpost.com/software/vibe-xja5cd" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMedkit} className="fa winner-icon" />
                    <h5 className="winner-title">Health</h5>
                    <h6 className="winner-group">Vibe</h6>
                </a>
                <a href="https://devpost.com/software/kabobcat" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSeedling} className="fa winner-icon" />
                    <h5 className="winner-title">Sustainability</h5>
                    <h6 className="winner-group">Kabobcat</h6>
                </a>
                <a href="https://devpost.com/software/code-dude" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPalette} className="fa winner-icon" />
                    <h5 className="winner-title">Best in Design</h5>
                    <h6 className="winner-group">Code-Dude</h6>
                </a>
                <a href="https://devpost.com/software/snapcode-vabpfn" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faUserPlus} className="fa winner-icon" />
                    <h5 className="winner-title">Best Beginner Hack</h5>
                    <h6 className="winner-group">Snapcode</h6>
                </a>
                <a href="https://devpost.com/software/esose" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSearch} className="fa winner-icon" />
                    <h5 className="winner-title">Best Product Research</h5>
                    <h6 className="winner-group">ESOSE</h6>
                </a>
                <a href="https://devpost.com/software/3d-for-education" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMicrochip} className="fa winner-icon" />
                    <h5 className="winner-title">Best Hardware Hack</h5>
                    <h6 className="winner-group">3D for Education</h6>
                </a>
                <a href="https://devpost.com/software/ghym" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMeteor} className="fa winner-icon" />
                    <h5 className="winner-title">Moonshot</h5>
                    <h6 className="winner-group">Ghym</h6>
                </a>
                <a href="https://devpost.com/software/a-clear-space" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDigitalOcean} className="fa winner-icon" />
                    <h5 className="winner-title">Best Use of Digital Ocean</h5>
                    <h6 className="winner-group">A Clean Space</h6>
                </a>
                <a href="https://devpost.com/software/project-dms" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCloud} className="fa winner-icon" />
                    <h5 className="winner-title">Best Use of Google Cloud</h5>
                    <h6 className="winner-group">Project DMS</h6>
                </a>
            </nav>
        </section>
    );
};

export default PastWinners;
