import React from 'react';
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

const PastWinners: React.FC = () => {
    return (
        <section className="PAST-WINNERS">
            <div className="Header">Past Winners</div>
            <nav className="winners-icons">
                <table className="tg">
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://devpost.com/software/helpers-spot" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faHandHoldingHeart} className="fa" />
                                </a>
                                <div className="winner-title">Social Good</div>
                                <div className="winner-group">Helpers Spot</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/vibe-xja5cd" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faMedkit} className="fa" />
                                </a>
                                <div className="winner-title">Health</div>
                                <div className="winner-group">Vibe</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/kabobcat" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faSeedling} className="fa" />
                                </a>
                                <div className="winner-title">Sustainability</div>
                                <div className="winner-group">Kabobcat</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/code-dude" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faPalette} className="fa" />
                                </a>
                                <div className="winner-title">Best in Design</div>
                                <div className="winner-group">Code-Dude</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://devpost.com/software/snapcode-vabpfn" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faUserPlus} className="fa" />
                                </a>
                                <div className="winner-title">Best Beginner Hack</div>
                                <div className="winner-group">Snapcode</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/esose" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faSearch} className="fa" />
                                </a>
                                <div className="winner-title">Best Product Research</div>
                                <div className="winner-group">ESOSE</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/3d-for-education" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faMicrochip} className="fa" />
                                </a>
                                <div className="winner-title">Best Hardware Hack</div>
                                <div className="winner-group">3D for Education</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/ghym" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faMeteor} className="fa" />
                                </a>
                                <div className="winner-title">Moonshot</div>
                                <div className="winner-group">Ghym</div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href="https://devpost.com/software/a-clear-space" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faDigitalOcean} className="fa" />
                                </a>
                                <div className="winner-title">Best Use of Digital Ocean</div>
                                <div className="winner-group">A Clean Space</div>
                            </td>
                            <td>
                                <a href="https://devpost.com/software/project-dms" style={{ color: '#ffb26e' }}>
                                    <FontAwesomeIcon icon={faCloud} className="fa" />
                                </a>
                                <div className="winner-title">Best Use of Google Cloud</div>
                                <div className="winner-group">Project DMS</div>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </section>
    );
};

export default PastWinners;
