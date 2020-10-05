import React, { FC, useState } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import HMLOGO from '../../assets/images/hackmerced-logo.png';

import './application.scss';

const Application: FC = (): JSX.Element => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        university: '',
        levelOfStudy: '',
        gender: '',
        race: '',
        stateOrCountry: '',
        howDidYourHearAboutUs: '',
        firstDesignathon: '',
        hasUploadedResume: false,
        hasUploadedPortfolio: false,
    });

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <>
            <Navbar />
            <main className="application">
                <img src={HMLOGO} className="hackmerced-logo" alt="HackMerced Logo" />
                <h3>Application Form</h3>
                <form className="application-form" onSubmit={handleSubmit}>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="firstName">
                                First Name <span className="required">*</span>
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="lastName">
                                Last Name <span className="required">*</span>
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="Email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="birthday">
                                Birthday <span className="required">*</span>
                            </label>
                            <input
                                id="birthday"
                                name="dateOfBirth"
                                type="text"
                                placeholder="Birthday"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="university">University</label>
                            <input
                                id="university"
                                name="university"
                                type="text"
                                placeholder="University"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="levelOfStudy">
                                Current Level of Study <span className="required">*</span>
                            </label>
                            <input
                                id="levelOfStudy"
                                name="levelOfStudy"
                                type="text"
                                placeholder="Current Level of Study"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="gender">
                                Gender <span className="required">*</span>
                            </label>
                            <input
                                id="gender"
                                name="gender"
                                type="text"
                                placeholder="Gender"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="race">
                                Race <span className="required">*</span>
                            </label>
                            <input
                                id="race"
                                name="race"
                                type="text"
                                placeholder="Race"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="stateOrCountry">
                            If you live in the US, what state do you currently live in? If you do not reside within the
                            US, what country are you from?
                        </label>
                        <select
                            id="stateOrCountry"
                            name="stateOrCountry"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="-------- Select an Option --------" disabled={true} selected={true}>
                            -------- Select an Option --------
                            </option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illino">Illino</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                            <option value="--------" disabled={true}>
                                --------
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Plurinational State of Bolivia">Plurinational State of Bolivia</option>
                            <option value="Sint Eustatius and Saba Bonaire">Sint Eustatius and Saba Bonaire</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="The Democratic Republic of the Congo">
                                The Democratic Republic of the Congo
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaçao">Curaçao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Islamic Republic of Iran">Islamic Republic of Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Democratic People's Republic of Korea">
                                Democratic People's Republic of Korea
                            </option>
                            <option value="Republic of Korea">Republic of Korea</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="The Former Yugoslav Republic of Macedonia">
                                The Former Yugoslav Republic of Macedonia
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Federated States of Micronesia">Federated States of Micronesia</option>
                            <option value="Republic of Moldova">Republic of Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="State of Palestine">State of Palestine</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Réunion">Réunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Barthélemy">Saint Barthélemy</option>
                            <option value="Ascension and Tristan da Cunha Saint Helena">
                                Ascension and Tristan da Cunha Saint Helena
                            </option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">
                                South Georgia and the South Sandwich Islands
                            </option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Province of China Taiwan">Province of China Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="United Republic of Tanzania">United Republic of Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Bolivarian Republic of Venezuela">Bolivarian Republic of Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="howDidYourHearAboutUs">How did you hear about DesignMerced?</label>
                        <select
                            id="howDidYourHearAboutUs"
                            name="howDidYourHearAboutUs"
                            placeholder="How did you hear about DesignMerced?"
                            onChange={handleInputChange}
                            required
                        >
                          <option value="-------- Select an Option --------" disabled={true} selected={true}>
                            -------- Select an Option --------
                            </option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friends">Friends</option>
                            <option value="Family">Family</option>
                            <option value="University Postings">University Postings</option>
                            <option value="Other">Other</option>
                        </select>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="firstDesignathon">Will DesignMerced be your first Designathon?</label>
                        <select
                            id="firstDesignathon"
                            name="firstDesignathon"
                            placeholder="Will DesignMerced be your first Designathon?"
                            onChange={handleInputChange}
                            required
                        >
                          <option value="-------- Select an Option --------" disabled={true} selected={true}>
                            -------- Select an Option --------
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </section>
                    <button className="submit-application" type="submit">
                        SUBMIT
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Application;
