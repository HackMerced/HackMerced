import React, { FC, useState } from 'react';
import Axios from 'axios';

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
    });

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/design-merced/apply`, form);
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
                                type="email"
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
                                type="date"
                                placeholder="Birthday"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="university">University</label>
                            <select id="university" name="university" onChange={handleInputChange} required>
                                <option value="" disabled={true} selected={true}>
                                    University
                                </option>
                                <option value="21st Century Cyber Charter School">
                                    21st Century Cyber Charter School
                                </option>
                                <option value="Aalto University">Aalto University</option>
                                <option value="Aarhus University">Aarhus University</option>
                                <option value="Abbey Park High School">Abbey Park High School</option>
                                <option value="Abbey Park Middle School">Abbey Park Middle School</option>
                                <option value="Abertay University">Abertay University</option>
                                <option value="ABES Engineering College">ABES Engineering College</option>
                                <option value="Abington Senior High School">Abington Senior High School</option>
                                <option value="Abraham Lincoln High School">Abraham Lincoln High School</option>
                                <option value="Abraham Lincoln High School - Philadelphia">
                                    Abraham Lincoln High School - Philadelphia
                                </option>
                                <option value="Academy at Palumbo">Academy at Palumbo</option>
                                <option value="Academy of Technology">Academy of Technology</option>
                                <option value="Acardia High School, Arizona">Acardia High School, Arizona</option>
                                <option value="Acharya Institute of Technology">Acharya Institute of Technology</option>
                                <option value="Achievement House Charter School - Online">
                                    Achievement House Charter School - Online
                                </option>
                                <option value="ACT Academy Cyber Charter School">
                                    ACT Academy Cyber Charter School
                                </option>
                                <option value="Acton-Boxborough Regional High School">
                                    Acton-Boxborough Regional High School
                                </option>
                                <option value="Adelphi University">Adelphi University</option>
                                <option value="Adlai E. Stevenson High School">Adlai E. Stevenson High School</option>
                                <option value="Advanced Math and Science Academy Charter School">
                                    Advanced Math and Science Academy Charter School
                                </option>
                                <option value="AGH University of Science and Technology">
                                    AGH University of Science and Technology
                                </option>
                                <option value="Agnes Scott College">Agnes Scott College</option>
                                <option value="Agora Cyber Charter School">Agora Cyber Charter School</option>
                                <option value="Alameda High School">Alameda High School</option>
                                <option value="Albany Medical College">Albany Medical College</option>
                                <option value="Albany State University (GA)">Albany State University (GA)</option>
                                <option value="Albright College">Albright College</option>
                                <option value="Alfa College">Alfa College</option>
                                <option value="Allen High School">Allen High School</option>
                                <option value="Ambala College of Engineering and Applied Research">
                                    Ambala College of Engineering and Applied Research
                                </option>
                                <option value="American Heritage School">American Heritage School</option>
                                <option value="American High School">American High School</option>
                                <option value="American River College, California">
                                    American River College, California
                                </option>
                                <option value="American University in Dubai">American University in Dubai</option>
                                <option value="American University, Washington, D.C.">
                                    American University, Washington, D.C.
                                </option>
                                <option value="Amherst College">Amherst College</option>
                                <option value="Amity University">Amity University</option>
                                <option value="Amrita School of Engineering">Amrita School of Engineering</option>
                                <option value="Ancaster High School">Ancaster High School</option>
                                <option value="Anchor Bay High School">Anchor Bay High School</option>
                                <option value="Andover Central High School">Andover Central High School</option>
                                <option value="Anna University">Anna University</option>
                                <option value="Appalachian State University">Appalachian State University</option>
                                <option value="Arcadia High School, California">Arcadia High School, California</option>
                                <option value="Arcadia University">Arcadia University</option>
                                <option value="Arizona State University">Arizona State University</option>
                                <option value="Art Institute of Philadelphia">Art Institute of Philadelphia</option>
                                <option value="ASPIRA Bilingual Cyber Charter School">
                                    ASPIRA Bilingual Cyber Charter School
                                </option>
                                <option value="Aston University">Aston University</option>
                                <option value="Atlanta Metropolitan State College">
                                    Atlanta Metropolitan State College
                                </option>
                                <option value="Atlantic Cape Community College">Atlantic Cape Community College</option>
                                <option value="Auburn University">Auburn University</option>
                                <option value="Austin Community College District">
                                    Austin Community College District
                                </option>
                                <option value="Aviation Career & Technical Education High School">
                                    Aviation Career & Technical Education High School
                                </option>
                                <option value="Avon High School">Avon High School</option>
                                <option value="Babaria Institute of Technology">Babaria Institute of Technology</option>
                                <option value="Babson College">Babson College</option>
                                <option value="Ball State University">Ball State University</option>
                                <option value="Bard College">Bard College</option>
                                <option value="Barnard College">Barnard College</option>
                                <option value="Barton College">Barton College</option>
                                <option value="Baruch College, CUNY">Baruch College, CUNY</option>
                                <option value="Baton Rouge Community College">Baton Rouge Community College</option>
                                <option value="Battlefield High School">Battlefield High School</option>
                                <option value="Bauman Moscow State Technical University">
                                    Bauman Moscow State Technical University
                                </option>
                                <option value="Bayside High School">Bayside High School</option>
                                <option value="Bayview Secondary School">Bayview Secondary School</option>
                                <option value="Beihang University">Beihang University</option>
                                <option value="Bellevue College, Washington">Bellevue College, Washington</option>
                                <option value="Benedictine College">Benedictine College</option>
                                <option value="Benha University">Benha University</option>
                                <option value="Benjamin Franklin High School - Baltimore">
                                    Benjamin Franklin High School - Baltimore
                                </option>
                                <option value="Benjamin Franklin High School - Philadelphia">
                                    Benjamin Franklin High School - Philadelphia
                                </option>
                                <option value="Bentley University">Bentley University</option>
                                <option value="Berea College">Berea College</option>
                                <option value="Bergen Catholic High School">Bergen Catholic High School</option>
                                <option value="Bergen Community College">Bergen Community College</option>
                                <option value="Bergen County Academies">Bergen County Academies</option>
                                <option value="Bergen County Technical High School - Teterboro">
                                    Bergen County Technical High School - Teterboro
                                </option>
                                <option value="Berkshire Community College">Berkshire Community College</option>
                                <option value="Bharathiar University">Bharathiar University</option>
                                <option value="Bilkent University">Bilkent University</option>
                                <option value="Binghamton University">Binghamton University</option>
                                <option value="Birkbeck, University of London">Birkbeck, University of London</option>
                                <option value="Birla Institute of technology and Science, Pilani">
                                    Birla Institute of technology and Science, Pilani
                                </option>
                                <option value="Birmingham City University">Birmingham City University</option>
                                <option value="Blinn College">Blinn College</option>
                                <option value="Bloomfield Hills High School">Bloomfield Hills High School</option>
                                <option value="Bloomsburg University of Pennsylvania">
                                    Bloomsburg University of Pennsylvania
                                </option>
                                <option value="Blue Mountain Academy">Blue Mountain Academy</option>
                                <option value="BlueCrest University College">BlueCrest University College</option>
                                <option value="Bluevale Collegiate Institute">Bluevale Collegiate Institute</option>
                                <option value="BMIIT, Uka Tarsadia University, Bardoli, Surat">
                                    BMIIT, Uka Tarsadia University, Bardoli, Surat
                                </option>
                                <option value="Boca Raton Community High School">
                                    Boca Raton Community High School
                                </option>
                                <option value="Boise State University">Boise State University</option>
                                <option value="Borough of Manhattan Community College, CUNY">
                                    Borough of Manhattan Community College, CUNY
                                </option>
                                <option value="Boston College">Boston College</option>
                                <option value="Boston Latin School">Boston Latin School</option>
                                <option value="Boston University">Boston University</option>
                                <option value="Boston University Metropolitan College">
                                    Boston University Metropolitan College
                                </option>
                                <option value="Bourne Grammar School">Bourne Grammar School</option>
                                <option value="Bournemouth University">Bournemouth University</option>
                                <option value="Bowdoin College">Bowdoin College</option>
                                <option value="Bowie State University">Bowie State University</option>
                                <option value="Boys Latin of Philadelphia Charter School">
                                    Boys Latin of Philadelphia Charter School
                                </option>
                                <option value="Brampton Centennial Secondary School">
                                    Brampton Centennial Secondary School
                                </option>
                                <option value="Brandeis University">Brandeis University</option>
                                <option value="Brentsville High School">Brentsville High School</option>
                                <option value="Briar Cliff University">Briar Cliff University</option>
                                <option value="Bridgewater State University">Bridgewater State University</option>
                                <option value="Brigham Young University">Brigham Young University</option>
                                <option value="British Columbia Institute of Technology">
                                    British Columbia Institute of Technology
                                </option>
                                <option value="Brno University of Technology">Brno University of Technology</option>
                                <option value="Brock University">Brock University</option>
                                <option value="Bronx Community College, CUNY">Bronx Community College, CUNY</option>
                                <option value="Brookdale Community College">Brookdale Community College</option>
                                <option value="Brooklyn College, CUNY">Brooklyn College, CUNY</option>
                                <option value="Brooklyn Technical High School">Brooklyn Technical High School</option>
                                <option value="Brookwood High School">Brookwood High School</option>
                                <option value="Brown University">Brown University</option>
                                <option value="Bryn Athyn College">Bryn Athyn College</option>
                                <option value="Bryn Mawr College">Bryn Mawr College</option>
                                <option value="Bucknell University">Bucknell University</option>
                                <option value="Bucks County Community College">Bucks County Community College</option>
                                <option value="Business Academy Aarhus">Business Academy Aarhus</option>
                                <option value="C. D. Hylton High School">C. D. Hylton High School</option>
                                <option value="Cabrini University">Cabrini University</option>
                                <option value="Cadbury Sixth Form College">Cadbury Sixth Form College</option>
                                <option value="Cairn University">Cairn University</option>
                                <option value="Caldwell University">Caldwell University</option>
                                <option value="California High School">California High School</option>
                                <option value="California Institute of Technology">
                                    California Institute of Technology
                                </option>
                                <option value="California Polytechnic State University, San Luis Obispo">
                                    California Polytechnic State University, San Luis Obispo
                                </option>
                                <option value="California State Polytechnic University, Pomona">
                                    California State Polytechnic University, Pomona
                                </option>
                                <option value="California State University, Bakersfield">
                                    California State University, Bakersfield
                                </option>
                                <option value="California State University, Channel Islands">
                                    California State University, Channel Islands
                                </option>
                                <option value="California State University, Chico">
                                    California State University, Chico
                                </option>
                                <option value="California State University, Dominguez Hills">
                                    California State University, Dominguez Hills
                                </option>
                                <option value="California State University, East Bay">
                                    California State University, East Bay
                                </option>
                                <option value="California State University, Fresno">
                                    California State University, Fresno
                                </option>
                                <option value="California State University, Fullerton">
                                    California State University, Fullerton
                                </option>
                                <option value="California State University, Humboldt">
                                    California State University, Humboldt
                                </option>
                                <option value="California State University, Long Beach">
                                    California State University, Long Beach
                                </option>
                                <option value="California State University, Los Angeles">
                                    California State University, Los Angeles
                                </option>
                                <option value="California State University, Maritime">
                                    California State University, Maritime
                                </option>
                                <option value="California State University, Monterey Bay">
                                    California State University, Monterey Bay
                                </option>
                                <option value="California State University, Northridge">
                                    California State University, Northridge
                                </option>
                                <option value="California State University, Sacramento">
                                    California State University, Sacramento
                                </option>
                                <option value="California State University, San Bernardino">
                                    California State University, San Bernardino
                                </option>
                                <option value="California State University, San Diego">
                                    California State University, San Diego
                                </option>
                                <option value="California State University, San Francisco">
                                    California State University, San Francisco
                                </option>
                                <option value="California State University, San Jose">
                                    California State University, San Jose
                                </option>
                                <option value="California State University, San Luis Obispo">
                                    California State University, San Luis Obispo
                                </option>
                                <option value="California State University, San Marcos">
                                    California State University, San Marcos
                                </option>
                                <option value="California State University, Sonoma">
                                    California State University, Sonoma
                                </option>
                                <option value="California State University, Stanislaus">
                                    California State University, Stanislaus
                                </option>
                                <option value="California University of Pennsylvania">
                                    California University of Pennsylvania
                                </option>
                                <option value="Calvin College">Calvin College</option>
                                <option value="Camden County College">Camden County College</option>
                                <option value="Cameron Heights Collegiate Institute">
                                    Cameron Heights Collegiate Institute
                                </option>
                                <option value="Canada (Cañada) College">Canada (Cañada) College</option>
                                <option value="Canyon Crest Academy">Canyon Crest Academy</option>
                                <option value="CAPA - Philadelphia High School for Creative and Performing Arts">
                                    CAPA - Philadelphia High School for Creative and Performing Arts
                                </option>
                                <option value="Cardiff Metropolitan University">Cardiff Metropolitan University</option>
                                <option value="Carleton College">Carleton College</option>
                                <option value="Carleton University">Carleton University</option>
                                <option value="Carnegie Mellon University">Carnegie Mellon University</option>
                                <option value="Carteret High School">Carteret High School</option>
                                <option value="Carthage College">Carthage College</option>
                                <option value="Cascadia College">Cascadia College</option>
                                <option value="Case Western Reserve University">Case Western Reserve University</option>
                                <option value="Cathedral High School, Los Angeles">
                                    Cathedral High School, Los Angeles
                                </option>
                                <option value="Catholic University of America">Catholic University of America</option>
                                <option value="Cedar Creek High School">Cedar Creek High School</option>
                                <option value="Cedar Ridge High School">Cedar Ridge High School</option>
                                <option value="Cedarville University">Cedarville University</option>
                                <option value="Cégep André-Laurendeau">Cégep André-Laurendeau</option>
                                <option value="Cégep de Saint-Laurent">Cégep de Saint-Laurent</option>
                                <option value="Cégep du Vieux Montréal">Cégep du Vieux Montréal</option>
                                <option value="Cégep Marie-Victorin">Cégep Marie-Victorin</option>
                                <option value="Centennial Collegiate Vocational Institute">
                                    Centennial Collegiate Vocational Institute
                                </option>
                                <option value="Centennial High School">Centennial High School</option>
                                <option value="Central Connecticut State University">
                                    Central Connecticut State University
                                </option>
                                <option value="Central High School - Philadelphia">
                                    Central High School - Philadelphia
                                </option>
                                <option value="Central PA Digital Learning Foundation Charter School">
                                    Central PA Digital Learning Foundation Charter School
                                </option>
                                <option value="Central Peel Secondary School">Central Peel Secondary School</option>
                                <option value="Central Texas College">Central Texas College</option>
                                <option value="Centro de Enseñanza Técnica y Superior (CETYS), Campus Ensenada">
                                    Centro de Enseñanza Técnica y Superior (CETYS), Campus Ensenada
                                </option>
                                <option value="Centro de Enseñanza Técnica y Superior (CETYS), Campus Mexicali">
                                    Centro de Enseñanza Técnica y Superior (CETYS), Campus Mexicali
                                </option>
                                <option value="Cerritos College">Cerritos College</option>
                                <option value="Chalmers University of Technology">
                                    Chalmers University of Technology
                                </option>
                                <option value="Champlain College">Champlain College</option>
                                <option value="Channabasaveshwara Institute of Technology">
                                    Channabasaveshwara Institute of Technology
                                </option>
                                <option value="Chaparral Star Academy">Chaparral Star Academy</option>
                                <option value="Chapel Hill High School">Chapel Hill High School</option>
                                <option value="Charter High School for Architecture and Design - Philadelphia">
                                    Charter High School for Architecture and Design - Philadelphia
                                </option>
                                <option value="Chattahoochee Technical College">Chattahoochee Technical College</option>
                                <option value="Cherokee High School">Cherokee High School</option>
                                <option value="Cherry Hill High School East">Cherry Hill High School East</option>
                                <option value="Cherry Hill High School West">Cherry Hill High School West</option>
                                <option value="Chestnut Hill College">Chestnut Hill College</option>
                                <option value="Cheyney University">Cheyney University</option>
                                <option value="Chinguacousy Secondary School">Chinguacousy Secondary School</option>
                                <option value="Cincinnati State Technical and Community College">
                                    Cincinnati State Technical and Community College
                                </option>
                                <option value="Citrus College">Citrus College</option>
                                <option value="City College of San Francisco">City College of San Francisco</option>
                                <option value="City Neighbors High School">City Neighbors High School</option>
                                <option value="City University London">City University London</option>
                                <option value="Claremont McKenna College">Claremont McKenna College</option>
                                <option value="Clarion University of Pennsylvania">
                                    Clarion University of Pennsylvania
                                </option>
                                <option value="Clark Atlanta University">Clark Atlanta University</option>
                                <option value="Clark University">Clark University</option>
                                <option value="Clarksburg High School">Clarksburg High School</option>
                                <option value="Clarkson University">Clarkson University</option>
                                <option value="Clayton State University">Clayton State University</option>
                                <option value="Clemson University">Clemson University</option>
                                <option value="Cleveland State University">Cleveland State University</option>
                                <option value="CODE University of Applied Sciences Berlin">
                                    CODE University of Applied Sciences Berlin
                                </option>
                                <option value="Coe College">Coe College</option>
                                <option value="Colegio Simón Bolívar">Colegio Simón Bolívar</option>
                                <option value="Colgate University">Colgate University</option>
                                <option value="Collège Ahuntsic">Collège Ahuntsic</option>
                                <option value="Collège André-Grasset">Collège André-Grasset</option>
                                <option value="Collège de Bois-de-Boulogne">Collège de Bois-de-Boulogne</option>
                                <option value="Collège de Maisonneuve">Collège de Maisonneuve</option>
                                <option value="Collège de Montréal">Collège de Montréal</option>
                                <option value="Collège de Rosemont">Collège de Rosemont</option>
                                <option value="Collège Français">Collège Français</option>
                                <option value="Collège Jean-de-Brébeuf">Collège Jean-de-Brébeuf</option>
                                <option value="Collège Jean-Eudes">Collège Jean-Eudes</option>
                                <option value="Collège Lionel-Groulx">Collège Lionel-Groulx</option>
                                <option value="College of Charleston">College of Charleston</option>
                                <option value="College of DuPage">College of DuPage</option>
                                <option value="College of Engineering, Pune">College of Engineering, Pune</option>
                                <option value="College of Staten Island, CUNY">College of Staten Island, CUNY</option>
                                <option value="College of Westchester">College of Westchester</option>
                                <option value="Collège Regina Assumpta">Collège Regina Assumpta</option>
                                <option value="Colleyville Heritage High School">
                                    Colleyville Heritage High School
                                </option>
                                <option value="Collins Hill High School">Collins Hill High School</option>
                                <option value="Colorado School of Mines">Colorado School of Mines</option>
                                <option value="Columbia Secondary School">Columbia Secondary School</option>
                                <option value="Columbia University">Columbia University</option>
                                <option value="Columbus College of Art and Design">
                                    Columbus College of Art and Design
                                </option>
                                <option value="Columbus State Community College">
                                    Columbus State Community College
                                </option>
                                <option value="Comenius University">Comenius University</option>
                                <option value="Commonwealth Charter Academy Charter School">
                                    Commonwealth Charter Academy Charter School
                                </option>
                                <option value="Community Academy of Philadelphia Charter School">
                                    Community Academy of Philadelphia Charter School
                                </option>
                                <option value="Community College of Allegheny County">
                                    Community College of Allegheny County
                                </option>
                                <option value="Community College of Baltimore County">
                                    Community College of Baltimore County
                                </option>
                                <option value="Community College of Philadelphia">
                                    Community College of Philadelphia
                                </option>
                                <option value="Community College of Rhode Island">
                                    Community College of Rhode Island
                                </option>
                                <option value="COMSATS Institute of Information Technology">
                                    COMSATS Institute of Information Technology
                                </option>
                                <option value="Concord Academy">Concord Academy</option>
                                <option value="Concordia University">Concordia University</option>
                                <option value="Conestoga College">Conestoga College</option>
                                <option value="Conestoga High School">Conestoga High School</option>
                                <option value="Connecticut College">Connecticut College</option>
                                <option value="Conroe ISD Academy of Science and Technology, Texas">
                                    Conroe ISD Academy of Science and Technology, Texas
                                </option>
                                <option value="Constitution High School - Philadelphia">
                                    Constitution High School - Philadelphia
                                </option>
                                <option value="Cooper Union">Cooper Union</option>
                                <option value="Coral Glades High School">Coral Glades High School</option>
                                <option value="Cornell College">Cornell College</option>
                                <option value="Cornell University">Cornell University</option>
                                <option value="Council Rock High School North">Council Rock High School North</option>
                                <option value="Council Rock High School South">Council Rock High School South</option>
                                <option value="County College of Morris">County College of Morris</option>
                                <option value="Covenant University">Covenant University</option>
                                <option value="Coventry University">Coventry University</option>
                                <option value="Cranbrook Schools">Cranbrook Schools</option>
                                <option value="Cranfield University">Cranfield University</option>
                                <option value="Creekview High School">Creekview High School</option>
                                <option value="Cumberland County College">Cumberland County College</option>
                                <option value="Cupertino High School">Cupertino High School</option>
                                <option value="Dalhousie University">Dalhousie University</option>
                                <option value="Dartmouth College">Dartmouth College</option>
                                <option value="Davidson College">Davidson College</option>
                                <option value="Dawson College">Dawson College</option>
                                <option value="De Anza College">De Anza College</option>
                                <option value="Deerfield High School">Deerfield High School</option>
                                <option value="Del Norte High School">Del Norte High School</option>
                                <option value="Delaware County Community College - Downingtown">
                                    Delaware County Community College - Downingtown
                                </option>
                                <option value="Delaware County Community College - Exton">
                                    Delaware County Community College - Exton
                                </option>
                                <option value="Delaware County Community College - Main Campus (Marple)">
                                    Delaware County Community College - Main Campus (Marple)
                                </option>
                                <option value="Delaware County Community College - Phoenixville">
                                    Delaware County Community College - Phoenixville
                                </option>
                                <option value="Delaware County Community College - Sharon Hill">
                                    Delaware County Community College - Sharon Hill
                                </option>
                                <option value="Delaware County Community College - Upper Darby">
                                    Delaware County Community College - Upper Darby
                                </option>
                                <option value="Delaware County Community College - West Grove">
                                    Delaware County Community College - West Grove
                                </option>
                                <option value="Delaware State University">Delaware State University</option>
                                <option value="Delaware Technical Community College">
                                    Delaware Technical Community College
                                </option>
                                <option value="Delaware Valley Academy of Medical and Dental Assistants">
                                    Delaware Valley Academy of Medical and Dental Assistants
                                </option>
                                <option value="Delaware Valley University">Delaware Valley University</option>
                                <option value="Delft University of Technology">Delft University of Technology</option>
                                <option value="Delhi Technological University">Delhi Technological University</option>
                                <option value="Denison University">Denison University</option>
                                <option value="DePaul University">DePaul University</option>
                                <option value="DePauw University">DePauw University</option>
                                <option value="Des Moines Area Community College">
                                    Des Moines Area Community College
                                </option>
                                <option value="DeSales University">DeSales University</option>
                                <option value="Devry University - Philadelphia Center City">
                                    Devry University - Philadelphia Center City
                                </option>
                                <option value="Dharmsinh Desai University">Dharmsinh Desai University</option>
                                <option value="Diablo Valley College">Diablo Valley College</option>
                                <option value="Dickinson College">Dickinson College</option>
                                <option value="Digital Harbor High School">Digital Harbor High School</option>
                                <option value="Dougherty Valley High School">Dougherty Valley High School</option>
                                <option value="Dr. B. R. Ambedkar National Institute of Technology Jalandhar">
                                    Dr. B. R. Ambedkar National Institute of Technology Jalandhar
                                </option>
                                <option value="Drake University">Drake University</option>
                                <option value="Drew University">Drew University</option>
                                <option value="Drexel University">Drexel University</option>
                                <option value="Dublin High School">Dublin High School</option>
                                <option value="Dublin Jerome High School">Dublin Jerome High School</option>
                                <option value="Duke University">Duke University</option>
                                <option value="Dulaney High School">Dulaney High School</option>
                                <option value="Duquesne University">Duquesne University</option>
                                <option value="Durant High School">Durant High School</option>
                                <option value="Durham College">Durham College</option>
                                <option value="Durham University">Durham University</option>
                                <option value="Dwarkadas J. Sanghvi College of Engineering">
                                    Dwarkadas J. Sanghvi College of Engineering
                                </option>
                                <option value="Dwight-Englewood School">Dwight-Englewood School</option>
                                <option value="Earl of March Secondary School">Earl of March Secondary School</option>
                                <option value="Earlham College">Earlham College</option>
                                <option value="East Brunswick High School">East Brunswick High School</option>
                                <option value="East Central University">East Central University</option>
                                <option value="East Chapel Hill High Schoo">East Chapel Hill High Schoo</option>
                                <option value="East Los Angeles College">East Los Angeles College</option>
                                <option value="EASTERN Center for Arts and Technology">
                                    EASTERN Center for Arts and Technology
                                </option>
                                <option value="Eastern High School - Louisville">
                                    Eastern High School - Louisville
                                </option>
                                <option value="Eastern Michigan University">Eastern Michigan University</option>
                                <option value="Eastern Regional High School">Eastern Regional High School</option>
                                <option value="Eastern University - St. Davids">Eastern University - St. Davids</option>
                                <option value="Eastern University Academy Charter School">
                                    Eastern University Academy Charter School
                                </option>
                                <option value="Eastern Washington University">Eastern Washington University</option>
                                <option value="Eckerd College">Eckerd College</option>
                                <option value="ÉcoleCentrale Paris">École Centrale Paris</option>
                                <option value="École de technologie supérieure">École de technologie supérieure</option>
                                <option value="École nationale supérieure d’électronique, informatique, télécommunications, mathématique et mécanique de Bordeaux (ENSEIRB-MATMECA)">
                                    École nationale supérieure d’électronique, informatique, télécommunications,
                                    mathématique et mécanique de Bordeaux (ENSEIRB-MATMECA)
                                </option>
                                <option value="École Polytechnique de Montréal">École Polytechnique de Montréal</option>
                                <option value="Edina High School">Edina High School</option>
                                <option value="Edinburgh Napier University">Edinburgh Napier University</option>
                                <option value="Edison High School">Edison High School</option>
                                <option value="Edward R. Murrow High School">Edward R. Murrow High School</option>
                                <option value="Eidgenössische Technische Hochschule (ETH) Zürich">
                                    Eidgenössische Technische Hochschule (ETH) Zürich
                                </option>
                                <option value="El Camino College">El Camino College</option>
                                <option value="El Centro College">El Centro College</option>
                                <option value="El Centro de Estudiantes">El Centro de Estudiantes</option>
                                <option value="Elgin Academy">Elgin Academy</option>
                                <option value="Elizabeth High School">Elizabeth High School</option>
                                <option value="Elon University">Elon University</option>
                                <option value="Embry-Riddle Aeronautical University">
                                    Embry-Riddle Aeronautical University
                                </option>
                                <option value="Emory University">Emory University</option>
                                <option value="EPFL | École polytechnique fédérale de Lausanne">
                                    EPFL | École polytechnique fédérale de Lausanne
                                </option>
                                <option value="EPITECH Bordeaux">EPITECH Bordeaux</option>
                                <option value="Erasmus Hogeschool Brussel">Erasmus Hogeschool Brussel</option>
                                <option value="Erie Community College">Erie Community College</option>
                                <option value="Ernest Manning High School">Ernest Manning High School</option>
                                <option value="Esperanza Academy Charter School">
                                    Esperanza Academy Charter School
                                </option>
                                <option value="Esperanza Cyber Charter School">Esperanza Cyber Charter School</option>
                                <option value="Evergreen Valley College">Evergreen Valley College</option>
                                <option value="Evergreen Valley High School">Evergreen Valley High School</option>
                                <option value="Fachhochschule Dortmund">Fachhochschule Dortmund</option>
                                <option value="Fahaheel Al-Watanieh Indian Private School">
                                    Fahaheel Al-Watanieh Indian Private School
                                </option>
                                <option value="Fairfield University">Fairfield University</option>
                                <option value="Fairleigh Dickinson University">Fairleigh Dickinson University</option>
                                <option value="Fairview High School">Fairview High School</option>
                                <option value="Farmingdale State College">Farmingdale State College</option>
                                <option value="FernUniversität in Hagen">FernUniversität in Hagen</option>
                                <option value="First Philadelphia Preparatory Charter School">
                                    First Philadelphia Preparatory Charter School
                                </option>
                                <option value="Fitchburg State University">Fitchburg State University</option>
                                <option value="Florida Agricultural & Mechanical (A&M) University">
                                    Florida Agricultural & Mechanical (A&M) University
                                </option>
                                <option value="Florida Atlantic University">Florida Atlantic University</option>
                                <option value="Florida Gulf Coast University">Florida Gulf Coast University</option>
                                <option value="Florida Institute Of Technology">Florida Institute Of Technology</option>
                                <option value="Florida International University">
                                    Florida International University
                                </option>
                                <option value="Florida Polytechnic University">Florida Polytechnic University</option>
                                <option value="Florida State University">Florida State University</option>
                                <option value="Fontys Hogeschool">Fontys Hogeschool</option>
                                <option value="Foothill College">Foothill College</option>
                                <option value="Fordham University">Fordham University</option>
                                <option value="Forest Heights Collegiate Institute">
                                    Forest Heights Collegiate Institute
                                </option>
                                <option value="Forest Park High School - Baltimore">
                                    Forest Park High School - Baltimore
                                </option>
                                <option value="Forest Park High School - Forest Park, GA">
                                    Forest Park High School - Forest Park, GA
                                </option>
                                <option value="Forest Park High School - Woodbridge">
                                    Forest Park High School - Woodbridge
                                </option>
                                <option value="Fort Scott Community College">Fort Scott Community College</option>
                                <option value="Fr. Conceicao Rodrigues College of Engineering">
                                    Fr. Conceicao Rodrigues College of Engineering
                                </option>
                                <option value="Francis Holland School">Francis Holland School</option>
                                <option value="Francis Lewis High School">Francis Lewis High School</option>
                                <option value="Frankford High School - Philadelphia">
                                    Frankford High School - Philadelphia
                                </option>
                                <option value="Franklin High School">Franklin High School</option>
                                <option value="Franklin Learning Center - Philadelphia">
                                    Franklin Learning Center - Philadelphia
                                </option>
                                <option value="Franklin Towne Charter High School">
                                    Franklin Towne Charter High School
                                </option>
                                <option value="Franklin W. Olin College of Engineering">
                                    Franklin W. Olin College of Engineering
                                </option>
                                <option value="Frederick Community College">Frederick Community College</option>
                                <option value="Freedom High School - Bethlehem">Freedom High School - Bethlehem</option>
                                <option value="Freedom High School - Woodbridge">
                                    Freedom High School - Woodbridge
                                </option>
                                <option value="Freehold High School">Freehold High School</option>
                                <option value="Freire Charter High School">Freire Charter High School</option>
                                <option value="Fremont High School">Fremont High School</option>
                                <option value="Full Sail University">Full Sail University</option>
                                <option value="Fullerton College">Fullerton College</option>
                                <option value="Gandhi Institute of Technology and Management, Bengaluru">
                                    Gandhi Institute of Technology and Management, Bengaluru
                                </option>
                                <option value="Gandhi Institute of Technology and Management, Hyderabad">
                                    Gandhi Institute of Technology and Management, Hyderabad
                                </option>
                                <option value="Gandhi Institute of Technology and Management, Visakhapatnam">
                                    Gandhi Institute of Technology and Management, Visakhapatnam
                                </option>
                                <option value="Ganga International School">Ganga International School</option>
                                <option value="Ganpat University">Ganpat University</option>
                                <option value="Gar-Field Senior High School">Gar-Field Senior High School</option>
                                <option value="Garnet Valley High School">Garnet Valley High School</option>
                                <option value="George C. Marshall High School">George C. Marshall High School</option>
                                <option value="George Heriot's School">George Heriot's School</option>
                                <option value="George Mason University">George Mason University</option>
                                <option value="George Washington High School - Philadelphia">
                                    George Washington High School - Philadelphia
                                </option>
                                <option value="Georgetown University">Georgetown University</option>
                                <option value="Georgia Institute of Technology">Georgia Institute of Technology</option>
                                <option value="Georgia State University">Georgia State University</option>
                                <option value="Germantown Friends School">Germantown Friends School</option>
                                <option value="Geroge Washington Carver High School - Philadelphia">
                                    Geroge Washington Carver High School - Philadelphia
                                </option>
                                <option value="Ghent University">Ghent University</option>
                                <option value="GIDC Degree Engineering College">GIDC Degree Engineering College</option>
                                <option value="Glassboro High School">Glassboro High School</option>
                                <option value="Glenaeon Rudolf Steiner School">Glenaeon Rudolf Steiner School</option>
                                <option value="Glenbrook North High School">Glenbrook North High School</option>
                                <option value="Glenbrook South High School">Glenbrook South High School</option>
                                <option value="Glendale Community College">Glendale Community College</option>
                                <option value="Glenforest Secondary School">Glenforest Secondary School</option>
                                <option value="Goldsmiths, University of London">
                                    Goldsmiths, University of London
                                </option>
                                <option value="Gordon Graydon Memorial Secondary School">
                                    Gordon Graydon Memorial Secondary School
                                </option>
                                <option value="Gottfried Wilhelm Leibniz Universität Hannover">
                                    Gottfried Wilhelm Leibniz Universität Hannover
                                </option>
                                <option value="Government Model Engineering College, Thrikkakara">
                                    Government Model Engineering College, Thrikkakara
                                </option>
                                <option value="Governor's School for Science & Technology">
                                    Governor's School for Science & Technology
                                </option>
                                <option value="Grady High School">Grady High School</option>
                                <option value="Grand Rapids Community College">Grand Rapids Community College</option>
                                <option value="Grand Valley State University">Grand Valley State University</option>
                                <option value="Greater Lowell Technical High School">
                                    Greater Lowell Technical High School
                                </option>
                                <option value="Green River College">Green River College</option>
                                <option value="Greenwood College School">Greenwood College School</option>
                                <option value="Grinnell College">Grinnell College</option>
                                <option value="Guelph Collegiate Vocational Institute">
                                    Guelph Collegiate Vocational Institute
                                </option>
                                <option value="Gujarat Technological University">
                                    Gujarat Technological University
                                </option>
                                <option value="Gujarat University">Gujarat University</option>
                                <option value="Guru Gobind Singh Indraprastha University">
                                    Guru Gobind Singh Indraprastha University
                                </option>
                                <option value="Guttman Community College, CUNY">Guttman Community College, CUNY</option>
                                <option value="Gwynedd Mercy University">Gwynedd Mercy University</option>
                                <option value="H.N. Werkman College">H.N. Werkman College</option>
                                <option value="Haaga-Helia University of Applied Sciences">
                                    Haaga-Helia University of Applied Sciences
                                </option>
                                <option value="Hamilton College">Hamilton College</option>
                                <option value="Hampshire College">Hampshire College</option>
                                <option value="Hampton University">Hampton University</option>
                                <option value="HAN University of Applied Sciences">
                                    HAN University of Applied Sciences
                                </option>
                                <option value="Hanze University of Applied Sciences">
                                    Hanze University of Applied Sciences
                                </option>
                                <option value="Harcum College">Harcum College</option>
                                <option value="Harper College">Harper College</option>
                                <option value="Harrisburg University - Harrisburg Campus">
                                    Harrisburg University - Harrisburg Campus
                                </option>
                                <option value="Harrisburg University - Philadelphia Campus">
                                    Harrisburg University - Philadelphia Campus
                                </option>
                                <option value="Harrison Career Institute">Harrison Career Institute</option>
                                <option value="Harvard Medical School">Harvard Medical School</option>
                                <option value="Harvard University">Harvard University</option>
                                <option value="Harvey Mudd University">Harvey Mudd University</option>
                                <option value="Hasso-Plattner-Institut Academy">Hasso-Plattner-Institut Academy</option>
                                <option value="Haverford College">Haverford College</option>
                                <option value="Hazleton Area High School">Hazleton Area High School</option>
                                <option value="Head-Royce School">Head-Royce School</option>
                                <option value="Health Careers High School">Health Careers High School</option>
                                <option value="Heartland Community College">Heartland Community College</option>
                                <option value="Helwan University">Helwan University</option>
                                <option value="Henry M. Gunn High School">Henry M. Gunn High School</option>
                                <option value="Herguan University">Herguan University</option>
                                <option value="Heritage Institute of Technology">
                                    Heritage Institute of Technology
                                </option>
                                <option value="Het Baarnsch Lyceum">Het Baarnsch Lyceum</option>
                                <option value="High Technology High School">High Technology High School</option>
                                <option value="Highland Park High School">Highland Park High School</option>
                                <option value="Hillsborough Community College">Hillsborough Community College</option>
                                <option value="Hillsborough High School">Hillsborough High School</option>
                                <option value="Hinsdale Central High School">Hinsdale Central High School</option>
                                <option value="Hiram College">Hiram College</option>
                                <option value="Hofstra University">Hofstra University</option>
                                <option value="Hogeschool Thomas More">Hogeschool Thomas More</option>
                                <option value="Hogeschool van Amsterdam">Hogeschool van Amsterdam</option>
                                <option value="Holton-Arms School">Holton-Arms School</option>
                                <option value="Holy Family University">Holy Family University</option>
                                <option value="Homestead High School">Homestead High School</option>
                                <option value="Hong Kong University of Science and Technology">
                                    Hong Kong University of Science and Technology
                                </option>
                                <option value="Hood College">Hood College</option>
                                <option value="Horace Furness High School">Horace Furness High School</option>
                                <option value="Horace Mann School">Horace Mann School</option>
                                <option value="Hostos Community College, CUNY">Hostos Community College, CUNY</option>
                                <option value="Houghton High School">Houghton High School</option>
                                <option value="Houston Community College">Houston Community College</option>
                                <option value="Howard University">Howard University</option>
                                <option value="Hudson County Community College">Hudson County Community College</option>
                                <option value="Hudson Valley Community College">Hudson Valley Community College</option>
                                <option value="Hunter College High School">Hunter College High School</option>
                                <option value="Hunter College, CUNY">Hunter College, CUNY</option>
                                <option value="Huron Heights Secondary School">Huron Heights Secondary School</option>
                                <option value="Hussian School of Art">Hussian School of Art</option>
                                <option value="I.T.S Engineering College">I.T.S Engineering College</option>
                                <option value="Iliria College">Iliria College</option>
                                <option value="Illinois Institute of Technology">
                                    Illinois Institute of Technology
                                </option>
                                <option value="Illinois State University">Illinois State University</option>
                                <option value="Imhotep Institute Charter High School">
                                    Imhotep Institute Charter High School
                                </option>
                                <option value="Immaculata University">Immaculata University</option>
                                <option value="Imperial College London">Imperial College London</option>
                                <option value="Indian Hills Community College">Indian Hills Community College</option>
                                <option value="Indian Institute of Engineering Science and Technology Shibpur">
                                    Indian Institute of Engineering Science and Technology Shibpur
                                </option>
                                <option value="Indian Institute of Information Technology Allahabad">
                                    Indian Institute of Information Technology Allahabad
                                </option>
                                <option value="Indian Institute of Technology Bhubaneswar">
                                    Indian Institute of Technology Bhubaneswar
                                </option>
                                <option value="Indian Institute of Technology Bombay">
                                    Indian Institute of Technology Bombay
                                </option>
                                <option value="Indian Institute of Technology Gandhinagar">
                                    Indian Institute of Technology Gandhinagar
                                </option>
                                <option value="Indian Institute of Technology Guwahati">
                                    Indian Institute of Technology Guwahati
                                </option>
                                <option value="Indian Institute of Technology Gwalior">
                                    Indian Institute of Technology Gwalior
                                </option>
                                <option value="Indian Institute of Technology Hyderabad">
                                    Indian Institute of Technology Hyderabad
                                </option>
                                <option value="Indian Institute of Technology Jabalpur">
                                    Indian Institute of Technology Jabalpur
                                </option>
                                <option value="Indian Institute of Technology Jodhpur">
                                    Indian Institute of Technology Jodhpur
                                </option>
                                <option value="Indian Institute of Technology Kanpur">
                                    Indian Institute of Technology Kanpur
                                </option>
                                <option value="Indian Institute of Technology Kharagpur">
                                    Indian Institute of Technology Kharagpur
                                </option>
                                <option value="Indian Institute of Technology Kota">
                                    Indian Institute of Technology Kota
                                </option>
                                <option value="Indian Institute of Technology Madras">
                                    Indian Institute of Technology Madras
                                </option>
                                <option value="Indian Institute of Technology Roorkee">
                                    Indian Institute of Technology Roorkee
                                </option>
                                <option value="Indian Institute of Technology Ropar">
                                    Indian Institute of Technology Ropar
                                </option>
                                <option value="Indian School of Mines, Dhanbad">Indian School of Mines, Dhanbad</option>
                                <option value="Indiana State University">Indiana State University</option>
                                <option value="Indiana University">Indiana University</option>
                                <option value="Indiana University of Pennsylvania">
                                    Indiana University of Pennsylvania
                                </option>
                                <option value="Indiana University-Purdue University Fort Wayne">
                                    Indiana University-Purdue University Fort Wayne
                                </option>
                                <option value="Indiana University–Purdue University Indianapolis">
                                    Indiana University–Purdue University Indianapolis
                                </option>
                                <option value="Indira Gandhi Delhi Technical University for Women">
                                    Indira Gandhi Delhi Technical University for Women
                                </option>
                                <option value="Indira Gandhi National Open University">
                                    Indira Gandhi National Open University
                                </option>
                                <option value="Indraprastha Institute of Information Technology">
                                    Indraprastha Institute of Information Technology
                                </option>
                                <option value="Insight PA Cyber Charter School">Insight PA Cyber Charter School</option>
                                <option value="Institut polytechnique de Bordeaux (INP)">
                                    Institut polytechnique de Bordeaux (INP)
                                </option>
                                <option value="Institute of Engineering and Rural Technology Allahabad">
                                    Institute of Engineering and Rural Technology Allahabad
                                </option>
                                <option value="Institute of Technical Education and Research (ITER), Bhubaneswar">
                                    Institute of Technical Education and Research (ITER), Bhubaneswar
                                </option>
                                <option value="Instituto Politécnico Nacional">Instituto Politécnico Nacional</option>
                                <option value="Instituto Tecnológico Autónomo de México (ITAM)">
                                    Instituto Tecnológico Autónomo de México (ITAM)
                                </option>
                                <option value="Instituto Tecnólogico de La Laguna (ITL)">
                                    Instituto Tecnólogico de La Laguna (ITL)
                                </option>
                                <option value="Instituto Tecnológico Superior de Cintalapa">
                                    Instituto Tecnológico Superior de Cintalapa
                                </option>
                                <option value="Instituto Tecnológico Superior de El Mante">
                                    Instituto Tecnológico Superior de El Mante
                                </option>
                                <option value="Instituto Tecnológico Superior de los Ríos">
                                    Instituto Tecnológico Superior de los Ríos
                                </option>
                                <option value="Instituto Tecnologico Superior de San Martin Texmelucan">
                                    Instituto Tecnologico Superior de San Martin Texmelucan
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Aguascalientes">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus
                                    Aguascalientes
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Chiapas">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Chiapas
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Chihuahua">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Chihuahua
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Ciudad de Mexico">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Ciudad de
                                    Mexico
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Ciudad Juárez">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Ciudad
                                    Juárez
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Cuernavaca">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus
                                    Cuernavaca
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Cumbres">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Cumbres
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Eugenio Garza Lagüera">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Eugenio
                                    Garza Lagüera
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Eugenio Garza Sada">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Eugenio
                                    Garza Sada
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Guadalajara">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus
                                    Guadalajara
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Hidalgo">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Hidalgo
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Irapuato">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Irapuato
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Laguna">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Laguna
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus León">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus León
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Morelia">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Morelia
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Obregón">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Obregón
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Puebla">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Puebla
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Querétaro">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Querétaro
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Saltillo">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Saltillo
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus San Luis Potosí">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus San Luis
                                    Potosí
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Santa Catarina">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Santa
                                    Catarina
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Santa Fe">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Santa Fe
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Sinaloa">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Sinaloa
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Sonora">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Sonora
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Tampico">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Tampico
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Toluca">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Toluca
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Valle Alto">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Valle
                                    Alto
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Veracruz">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Veracruz
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Zacatecas">
                                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) Campus Zacatecas
                                </option>
                                <option value="Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)">
                                    Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)
                                </option>
                                <option value="Instytut Pamięci Narodowej">Instytut Pamięci Narodowej</option>
                                <option value="International Institute of Information Technology-Hyderabad">
                                    International Institute of Information Technology-Hyderabad
                                </option>
                                <option value="International Institute Of Information Technology-Naya Raipur">
                                    International Institute Of Information Technology-Naya Raipur
                                </option>
                                <option value="International Leadership Charter High School">
                                    International Leadership Charter High School
                                </option>
                                <option value="International School of Choueifat">
                                    International School of Choueifat
                                </option>
                                <option value="Iowa Central Community College">Iowa Central Community College</option>
                                <option value="Iowa State University">Iowa State University</option>
                                <option value="Iowa Western Community College">Iowa Western Community College</option>
                                <option value="Istanbul University">Istanbul University</option>
                                <option value="IT University of Copenhagen">IT University of Copenhagen</option>
                                <option value="Ithaca College">Ithaca College</option>
                                <option value="ITMO University">ITMO University</option>
                                <option value="Jacobs University Bremen">Jacobs University Bremen</option>
                                <option value="Jagiellonian University">Jagiellonian University</option>
                                <option value="Jaipur National University">Jaipur National University</option>
                                <option value="Jalpaiguri Government Engineering College">
                                    Jalpaiguri Government Engineering College
                                </option>
                                <option value="James Gillespie's High School">James Gillespie's High School</option>
                                <option value="James Madison High School">James Madison High School</option>
                                <option value="James Madison University">James Madison University</option>
                                <option value="Jaypee Institute Of Information Technology">
                                    Jaypee Institute Of Information Technology
                                </option>
                                <option value="John A. Ferguson Senior High School">
                                    John A. Ferguson Senior High School
                                </option>
                                <option value="John Abbott College">John Abbott College</option>
                                <option value="John Bartram High School">John Bartram High School</option>
                                <option value="John F. Kennedy Memorial High School">
                                    John F. Kennedy Memorial High School
                                </option>
                                <option value="John Jay College of Criminal Justice, CUNY">
                                    John Jay College of Criminal Justice, CUNY
                                </option>
                                <option value="John Leggott College">John Leggott College</option>
                                <option value="John P. Stevens High School">John P. Stevens High School</option>
                                <option value="Johns Hopkins University">Johns Hopkins University</option>
                                <option value="Johnson & Wales University">Johnson & Wales University</option>
                                <option value="Johnson C. Smith University">Johnson C. Smith University</option>
                                <option value="Jules E. Mastbaum Technical High School">
                                    Jules E. Mastbaum Technical High School
                                </option>
                                <option value="Julia R. Masterman School">Julia R. Masterman School</option>
                                <option value="K.S. School of Business Management">
                                    K.S. School of Business Management
                                </option>
                                <option value="Kansai University">Kansai University</option>
                                <option value="Kansas State University">Kansas State University</option>
                                <option value="Kantipur Engineering College">Kantipur Engineering College</option>
                                <option value="Karlsruhe Institute of Technology">
                                    Karlsruhe Institute of Technology
                                </option>
                                <option value="Karunya Institute of Technology and Sciences">
                                    Karunya Institute of Technology and Sciences
                                </option>
                                <option value="Kathmandu BernHardt College">Kathmandu BernHardt College</option>
                                <option value="Kaunas University of Technology">Kaunas University of Technology</option>
                                <option value="Kean University">Kean University</option>
                                <option value="Keele University">Keele University</option>
                                <option value="Kennesaw State University">Kennesaw State University</option>
                                <option value="Kennett High School">Kennett High School</option>
                                <option value="Kensington High School Complex">Kensington High School Complex</option>
                                <option value="Kent State University">Kent State University</option>
                                <option value="Kent State University at Stark">Kent State University at Stark</option>
                                <option value="King Edward VI Five Ways School">King Edward VI Five Ways School</option>
                                <option value="King's College London">King's College London</option>
                                <option value="Kingsborough Community College, CUNY">
                                    Kingsborough Community College, CUNY
                                </option>
                                <option value="KIPP DuBois Charter School">KIPP DuBois Charter School</option>
                                <option value="Kitchener-Waterloo Collegiate & Vocational School">
                                    Kitchener-Waterloo Collegiate & Vocational School
                                </option>
                                <option value="Knox College">Knox College</option>
                                <option value="Kraków University of Economics">Kraków University of Economics</option>
                                <option value="KTH Royal Institute of Technology">
                                    KTH Royal Institute of Technology
                                </option>
                                <option value="L D College Of Engineering Library">
                                    L D College Of Engineering Library
                                </option>
                                <option value="La Roche College">La Roche College</option>
                                <option value="La Salle University - Philadelphia">
                                    La Salle University - Philadelphia
                                </option>
                                <option value="La Sierra University">La Sierra University</option>
                                <option value="Lafayette College">Lafayette College</option>
                                <option value="LaGuardia Community College, CUNY">
                                    LaGuardia Community College, CUNY
                                </option>
                                <option value="Lake Braddock Secondary School">Lake Braddock Secondary School</option>
                                <option value="Lakeside High School">Lakeside High School</option>
                                <option value="Lampeter-Strasburg High School">Lampeter-Strasburg High School</option>
                                <option value="Lancaster University">Lancaster University</option>
                                <option value="Lankenau High School">Lankenau High School</option>
                                <option value="Laval University">Laval University</option>
                                <option value="Lawrence Technological University">
                                    Lawrence Technological University
                                </option>
                                <option value="Lawrence University">Lawrence University</option>
                                <option value="Lehigh University">Lehigh University</option>
                                <option value="Lehman College, CUNY">Lehman College, CUNY</option>
                                <option value="Leiden University">Leiden University</option>
                                <option value="Lewis & Clark College">Lewis & Clark College</option>
                                <option value="Lewis University">Lewis University</option>
                                <option value="Lexington High School">Lexington High School</option>
                                <option value="Lick Wilmerding High School">Lick Wilmerding High School</option>
                                <option value="LIM College">LIM College</option>
                                <option value="Lincoln Christian University">Lincoln Christian University</option>
                                <option value="Lincoln Technical Institute - Center City Philadelphia">
                                    Lincoln Technical Institute - Center City Philadelphia
                                </option>
                                <option value="Lincoln Technical Institute - Northeast Philadelphia">
                                    Lincoln Technical Institute - Northeast Philadelphia
                                </option>
                                <option value="Lincoln University">Lincoln University</option>
                                <option value="Lindenwood University">Lindenwood University</option>
                                <option value="Linn-Mar High School">Linn-Mar High School</option>
                                <option value="Lisgar Collegiate Institute">Lisgar Collegiate Institute</option>
                                <option value="Little Flowers Public Sr Secondary School">
                                    Little Flowers Public Sr Secondary School
                                </option>
                                <option value="Livingston High School">Livingston High School</option>
                                <option value="Loch Raven High School">Loch Raven High School</option>
                                <option value="Lodz University of Technology">Lodz University of Technology</option>
                                <option value="London Metropolitan University">London Metropolitan University</option>
                                <option value="London School of Economics and Political Science">
                                    London School of Economics and Political Science
                                </option>
                                <option value="Lone Star College System">Lone Star College System</option>
                                <option value="Lord Krishna College of Engineering">
                                    Lord Krishna College of Engineering
                                </option>
                                <option value="Los Altos High School">Los Altos High School</option>
                                <option value="Loughborough University">Loughborough University</option>
                                <option value="Louisiana State University">Louisiana State University</option>
                                <option value="Lowell High School">Lowell High School</option>
                                <option value="Loyola Marymount University">Loyola Marymount University</option>
                                <option value="Luleå University of Technology, LTU">
                                    Luleå University of Technology, LTU
                                </option>
                                <option value="Luther College">Luther College</option>
                                <option value="Lynbrook High School">Lynbrook High School</option>
                                <option value="M.V.Jayaraman College of Engineering">
                                    M.V.Jayaraman College of Engineering
                                </option>
                                <option value="Macalester College">Macalester College</option>
                                <option value="MacArthur High School">MacArthur High School</option>
                                <option value="Macaulay Honors College, CUNY">Macaulay Honors College, CUNY</option>
                                <option value="Macomb Community College">Macomb Community College</option>
                                <option value="Madan Mohan Malaviya University of Technology">
                                    Madan Mohan Malaviya University of Technology
                                </option>
                                <option value="Madison College">Madison College</option>
                                <option value="Madison West High School">Madison West High School</option>
                                <option value="Maggie L. Walker Governor's School">
                                    Maggie L. Walker Governor's School
                                </option>
                                <option value="Maharaja Agrasen Institute of Technology">
                                    Maharaja Agrasen Institute of Technology
                                </option>
                                <option value="Maharaja Surajmal Institute of Technology">
                                    Maharaja Surajmal Institute of Technology
                                </option>
                                <option value="Maine South High School">Maine South High School</option>
                                <option value="Malvern Preparatory School">Malvern Preparatory School</option>
                                <option value="Malaviya National Institute of Technology">
                                    Malaviya National Institute of Technology
                                </option>
                                <option value="Manalapan High School">Manalapan High School</option>
                                <option value="Manchester Metropolitan University">
                                    Manchester Metropolitan University
                                </option>
                                <option value="Manhattan College">Manhattan College</option>
                                <option value="Manhattan High School">Manhattan High School</option>
                                <option value="Manipal Institute of Technology">Manipal Institute of Technology</option>
                                <option value="Manor College">Manor College</option>
                                <option value="Marc Garneau Collegiate Institute">
                                    Marc Garneau Collegiate Institute
                                </option>
                                <option value="Marcellus High School">Marcellus High School</option>
                                <option value="Mariana Bracetti Academy Charter School">
                                    Mariana Bracetti Academy Charter School
                                </option>
                                <option value="Marianopolis College">Marianopolis College</option>
                                <option value="Marist College">Marist College</option>
                                <option value="Maritime Academy Charter School (MACHS)">
                                    Maritime Academy Charter School (MACHS)
                                </option>
                                <option value="Markham District High School">Markham District High School</option>
                                <option value="Markville Secondary School">Markville Secondary School</option>
                                <option value="Marlboro High School">Marlboro High School</option>
                                <option value="Marquette University">Marquette University</option>
                                <option value="Marshall High School">Marshall High School</option>
                                <option value="Martin Luther King High School">Martin Luther King High School</option>
                                <option value="Marymount University">Marymount University</option>
                                <option value="Masaryk University">Masaryk University</option>
                                <option value="Massachusetts Institute of Technology">
                                    Massachusetts Institute of Technology
                                </option>
                                <option value="Mastery Charter School - Hardy Williams Academy">
                                    Mastery Charter School - Hardy Williams Academy
                                </option>
                                <option value="Mastery Charter School - Thomas Campus">
                                    Mastery Charter School - Thomas Campus
                                </option>
                                <option value="Mastery Charter School at Lenfest Campus">
                                    Mastery Charter School at Lenfest Campus
                                </option>
                                <option value="Mastery Charter School at Pickett Campus">
                                    Mastery Charter School at Pickett Campus
                                </option>
                                <option value="Mastery Charter School at Shoemaker Campus">
                                    Mastery Charter School at Shoemaker Campus
                                </option>
                                <option value="Mater Academy High School">Mater Academy High School</option>
                                <option value="Math, Civics and Sciences Charter School - Philadelphia">
                                    Math, Civics and Sciences Charter School - Philadelphia
                                </option>
                                <option value="Mathematics, Science, and Technology Community Charter School (MaST)">
                                    Mathematics, Science, and Technology Community Charter School (MaST)
                                </option>
                                <option value="Maulana Abul Kalam Azad University of Technology">
                                    Maulana Abul Kalam Azad University of Technology
                                </option>
                                <option value="Maulana Azad National Institute of Technology">
                                    Maulana Azad National Institute of Technology
                                </option>
                                <option value="Maulana Azad National Institute of Technology Bhopal">
                                    Maulana Azad National Institute of Technology Bhopal
                                </option>
                                <option value="Maumee Valley Country Day School">
                                    Maumee Valley Country Day School
                                </option>
                                <option value="MBM Engineering College, Jodhpur">
                                    MBM Engineering College, Jodhpur
                                </option>
                                <option value="McGill University">McGill University</option>
                                <option value="McMaster University">McMaster University</option>
                                <option value="Medgar Evers College, CUNY">Medgar Evers College, CUNY</option>
                                <option value="Medical University of Silesia">Medical University of Silesia</option>
                                <option value="Menlo School">Menlo School</option>
                                <option value="Merced College">Merced College</option>
                                <option value="Mercer County Community College">Mercer County Community College</option>
                                <option value="Mercer University">Mercer University</option>
                                <option value="Meredith College">Meredith College</option>
                                <option value="Messiah College">Messiah College</option>
                                <option value="Metas Adventist School">Metas Adventist School</option>
                                <option value="Metropolia University of Applied Sciences">
                                    Metropolia University of Applied Sciences
                                </option>
                                <option value="Metropolitan State University">Metropolitan State University</option>
                                <option value="Metuchen High School">Metuchen High School</option>
                                <option value="Miami Dade College">Miami Dade College</option>
                                <option value="Miami Lakes Educational Center">Miami Lakes Educational Center</option>
                                <option value="Miami University">Miami University</option>
                                <option value="Michigan State University">Michigan State University</option>
                                <option value="Michigan Technological University">
                                    Michigan Technological University
                                </option>
                                <option value="Microsoft School of the Future High School">
                                    Microsoft School of the Future High School
                                </option>
                                <option value="Middle Tennessee State University">
                                    Middle Tennessee State University
                                </option>
                                <option value="Middlebury College">Middlebury College</option>
                                <option value="Middlesex County Academy for Science, Mathematics & Engineering Technologies">
                                    Middlesex County Academy for Science, Mathematics & Engineering Technologies
                                </option>
                                <option value="Middlesex County College">Middlesex County College</option>
                                <option value="Middlesex University">Middlesex University</option>
                                <option value="Middleton High School">Middleton High School</option>
                                <option value="Middletown High School South">Middletown High School South</option>
                                <option value="Midwood">Midwood</option>
                                <option value="Miles College">Miles College</option>
                                <option value="Millburn High School">Millburn High School</option>
                                <option value="Millburn Middle School">Millburn Middle School</option>
                                <option value="Millville Senior High School">Millville Senior High School</option>
                                <option value="Milwaukee School of Engineering">Milwaukee School of Engineering</option>
                                <option value="Mission College Boulevard">Mission College Boulevard</option>
                                <option value="Mission San Jose High School">Mission San Jose High School</option>
                                <option value="Mississippi State University">Mississippi State University</option>
                                <option value="Mississippi University for Women">
                                    Mississippi University for Women
                                </option>
                                <option value="Missouri State University">Missouri State University</option>
                                <option value="Missouri University of Science and Technology">
                                    Missouri University of Science and Technology
                                </option>
                                <option value="Mohammed V University">Mohammed V University</option>
                                <option value="Molloy College">Molloy College</option>
                                <option value="Monmouth College">Monmouth College</option>
                                <option value="Monmouth University">Monmouth University</option>
                                <option value="Monroe Community College">Monroe Community College</option>
                                <option value="Monta Vista High School">Monta Vista High School</option>
                                <option value="Montana State University">Montana State University</option>
                                <option value="Montclair State University">Montclair State University</option>
                                <option value="Montgomery Blair High School">Montgomery Blair High School</option>
                                <option value="Montgomery College">Montgomery College</option>
                                <option value="Montgomery County Community College - Central Campus (Blue Bell)">
                                    Montgomery County Community College - Central Campus (Blue Bell)
                                </option>
                                <option value="Montgomery County Community College - West Campus (Pottstown)">
                                    Montgomery County Community College - West Campus (Pottstown)
                                </option>
                                <option value="Montgomery High School">Montgomery High School</option>
                                <option value="Montville Township High School">Montville Township High School</option>
                                <option value="Moore College of Art and Design">Moore College of Art and Design</option>
                                <option value="Moore Middle School">Moore Middle School</option>
                                <option value="Moorestown High School">Moorestown High School</option>
                                <option value="Moraine Valley Community College">
                                    Moraine Valley Community College
                                </option>
                                <option value="Morehouse College">Morehouse College</option>
                                <option value="Morgan State University">Morgan State University</option>
                                <option value="Morris County School of Technology">
                                    Morris County School of Technology
                                </option>
                                <option value="Morton College">Morton College</option>
                                <option value="Moscow Institute of Physics and Technology">
                                    Moscow Institute of Physics and Technology
                                </option>
                                <option value="Moscrop Secondary School">Moscrop Secondary School</option>
                                <option value="Motilal Nehru National Institute of Technology">
                                    Motilal Nehru National Institute of Technology
                                </option>
                                <option value="Motilal Nehru National Institute of Technology Allahabad">
                                    Motilal Nehru National Institute of Technology Allahabad
                                </option>
                                <option value="Motivation High School (formerly John Bartram High School)">
                                    Motivation High School (formerly John Bartram High School)
                                </option>
                                <option value="Mount Holyoke College">Mount Holyoke College</option>
                                <option value="Mountain View High School">Mountain View High School</option>
                                <option value="Mt. San Antonio College">Mt. San Antonio College</option>
                                <option value="Muhlenberg college">Muhlenberg college</option>
                                <option value="Multi-Cultural Academy Charter School">
                                    Multi-Cultural Academy Charter School
                                </option>
                                <option value="Murrell Dobbins Technical High School">
                                    Murrell Dobbins Technical High School
                                </option>
                                <option value="Nanyang Technological University">
                                    Nanyang Technological University
                                </option>
                                <option value="Narsee Monjee College of Commerce and Economics">
                                    Narsee Monjee College of Commerce and Economics
                                </option>
                                <option value="Nashua High School South">Nashua High School South</option>
                                <option value="National Institute of Engineering, Mysore">
                                    National Institute of Engineering, Mysore
                                </option>
                                <option value="National Institute of Technology Calicut">
                                    National Institute of Technology Calicut
                                </option>
                                <option value="National Institute of Technology, Jamshedpur">
                                    National Institute of Technology, Jamshedpur
                                </option>
                                <option value="National Institute of Technology, Raipur">
                                    National Institute of Technology, Raipur
                                </option>
                                <option value="National Institute of Technology, Silchar">
                                    National Institute of Technology, Silchar
                                </option>
                                <option value="National Institute of Technology, Srinagar">
                                    National Institute of Technology, Srinagar
                                </option>
                                <option value="National Institute of Technology, Tiruchirappalli">
                                    National Institute of Technology, Tiruchirappalli
                                </option>
                                "
                                <option value="National Institute of Technology, Warangal">
                                    National Institute of Technology, Warangal
                                </option>
                                <option value="National Research University Higher School Of Economics">
                                    National Research University Higher School Of Economics
                                </option>
                                <option value="National Univeristy of Singapore">
                                    National Univeristy of Singapore
                                </option>
                                <option value="Netaji Subhas Institute Of Technology">
                                    Netaji Subhas Institute Of Technology
                                </option>
                                <option value="Netaji Subhash Engineering College">
                                    Netaji Subhash Engineering College
                                </option>
                                <option value="Neumann University">Neumann University</option>
                                <option value="New Albany High School">New Albany High School</option>
                                <option value="New Foundations Charter School - Philadelphia">
                                    New Foundations Charter School - Philadelphia
                                </option>
                                <option value="New Jersey City University">New Jersey City University</option>
                                <option value="New Jersey Institute of Technology">
                                    New Jersey Institute of Technology
                                </option>
                                <option value="New Providence High School">New Providence High School</option>
                                <option value="New River Community College">New River Community College</option>
                                <option value="New York City College of Technology, CUNY">
                                    New York City College of Technology, CUNY
                                </option>
                                <option value="New York Institute of Technology">
                                    New York Institute of Technology
                                </option>
                                <option value="New York University">New York University</option>
                                <option value="New York University Abu Dhabi">New York University Abu Dhabi</option>
                                <option value="Newcastle University">Newcastle University</option>
                                <option value="Newton South High School">Newton South High School</option>
                                <option value="Niagara College">Niagara College</option>
                                <option value="Nipissing University">Nipissing University</option>
                                <option value="Nirma University">Nirma University</option>
                                <option value="Noakhali Science and Technology University">
                                    Noakhali Science and Technology University
                                </option>
                                <option value="Norco College">Norco College</option>
                                <option value="North American University">North American University</option>
                                <option value="North Andover High School">North Andover High School</option>
                                <option value="North Brunswick Township High School">
                                    North Brunswick Township High School
                                </option>
                                <option value="North Carolina Agricultural and Technical (A&T) State University">
                                    North Carolina Agricultural and Technical (A&T) State University
                                </option>
                                <option value="North Carolina School of Science and Mathematics">
                                    North Carolina School of Science and Mathematics
                                </option>
                                <option value="North Carolina State University">North Carolina State University</option>
                                <option value="North Dakota State University">North Dakota State University</option>
                                <option value="North Hunterdon High School">North Hunterdon High School</option>
                                <option value="North Park Secondary School">North Park Secondary School</option>
                                <option value="North Penn High School">North Penn High School</option>
                                <option value="North Shore Community College">North Shore Community College</option>
                                <option value="Northeast High School - Philadelphia">
                                    Northeast High School - Philadelphia
                                </option>
                                <option value="Northeastern University">Northeastern University</option>
                                <option value="Northern Arizona University">Northern Arizona University</option>
                                <option value="Northern Illinois University">Northern Illinois University</option>
                                <option value="Northern Kentucky University">Northern Kentucky University</option>
                                <option value="Northern Michigan University">Northern Michigan University</option>
                                <option value="Northern Secondary School">Northern Secondary School</option>
                                <option value="Northern Virginia Community College">
                                    Northern Virginia Community College
                                </option>
                                <option value="Northumbria University">Northumbria University</option>
                                <option value="Northview High School">Northview High School</option>
                                <option value="Northwest Missouri State University">
                                    Northwest Missouri State University
                                </option>
                                <option value="Northwest Parkway High School">Northwest Parkway High School</option>
                                <option value="Northwest Vista College">Northwest Vista College</option>
                                <option value="Northwestern Oklahoma State University">
                                    Northwestern Oklahoma State University
                                </option>
                                <option value="Northwestern University">Northwestern University</option>
                                <option value="Northwood Academy/Arts School">Northwood Academy/Arts School</option>
                                <option value="Nottingham Trent University">Nottingham Trent University</option>
                                <option value="Novi High School">Novi High School</option>
                                <option value="Oakland Community College">Oakland Community College</option>
                                <option value="Oakland University">Oakland University</option>
                                <option value="Oberlin College">Oberlin College</option>
                                <option value="Ocean City High School">Ocean City High School</option>
                                <option value="Ocean County College">Ocean County College</option>
                                <option value="Oglethorpe University">Oglethorpe University</option>
                                <option value="Ohio Christian University">Ohio Christian University</option>
                                <option value="Ohio University">Ohio University</option>
                                <option value="Okemos High School">Okemos High School</option>
                                <option value="Oklahoma State University">Oklahoma State University</option>
                                <option value="Old Dominion University">Old Dominion University</option>
                                <option value="Old Westbury, SUNY">Old Westbury, SUNY</option>
                                <option value="Olney High School">Olney High School</option>
                                <option value="Onondaga Community College">Onondaga Community College</option>
                                <option value="Opolska University of Technology">
                                    Opolska University of Technology
                                </option>
                                <option value="Oregon State University">Oregon State University</option>
                                <option value="Orleans Technical Institute">Orleans Technical Institute</option>
                                <option value="Osbourn Park High School">Osbourn Park High School</option>
                                <option value="Ostbayerische Technische Hochschule Regensburg">
                                    Ostbayerische Technische Hochschule Regensburg
                                </option>
                                <option value="Otterbein University">Otterbein University</option>
                                <option value="Overbrook High School - Philadelphia">
                                    Overbrook High School - Philadelphia
                                </option>
                                <option value="Oxford Academy High School">Oxford Academy High School</option>
                                <option value="Oxford Brookes University">Oxford Brookes University</option>
                                <option value="Pace University">Pace University</option>
                                <option value="Palo Alto High School">Palo Alto High School</option>
                                <option value="Palomar College">Palomar College</option>
                                <option value="Pandit Deendayal Petroleum University">
                                    Pandit Deendayal Petroleum University
                                </option>
                                <option value="Paramount International School">Paramount International School</option>
                                <option value="Parkview High School">Parkview High School</option>
                                <option value="Parkway Center City High School">Parkway Center City High School</option>
                                <option value="Parkway West High School">Parkway West High School</option>
                                <option value="Parsippany High School">Parsippany High School</option>
                                <option value="Parsons School of Design">Parsons School of Design</option>
                                <option value="Parul Institute of Engineering & Technology">
                                    Parul Institute of Engineering & Technology
                                </option>
                                <option value="Pasadena City College">Pasadena City College</option>
                                <option value="Pascal English School, Cyprus">Pascal English School, Cyprus</option>
                                <option value="Pathways School Noida">Pathways School Noida</option>
                                <option value="Patriot High School - Nokesville">
                                    Patriot High School - Nokesville
                                </option>
                                <option value="Patriot High School - Riverside">Patriot High School - Riverside</option>
                                <option value="Paul Robeson High School (formerly John Bartram High School)">
                                    Paul Robeson High School (formerly John Bartram High School)
                                </option>
                                <option value="Peirce College">Peirce College</option>
                                <option value="Penn State Erie, The Behrend College">
                                    Penn State Erie, The Behrend College
                                </option>
                                <option value="Penncrest High School">Penncrest High School</option>
                                <option value="Pennsylvania Academy of the Fine Arts">
                                    Pennsylvania Academy of the Fine Arts
                                </option>
                                <option value="Pennsylvania Cyber Charter School">
                                    Pennsylvania Cyber Charter School
                                </option>
                                <option value="Pennsylvania Distance Learning Charter School - Online">
                                    Pennsylvania Distance Learning Charter School - Online
                                </option>
                                <option value="Pennsylvania Institute of Technology - Center City Philadelphia">
                                    Pennsylvania Institute of Technology - Center City Philadelphia
                                </option>
                                <option value="Pennsylvania Institute of Technology - Media">
                                    Pennsylvania Institute of Technology - Media
                                </option>
                                <option value="Pennsylvania Leadership Charter School - Online">
                                    Pennsylvania Leadership Charter School - Online
                                </option>
                                <option value="Pennsylvania Virtual Charter School">
                                    Pennsylvania Virtual Charter School
                                </option>
                                <option value="PES University">PES University</option>
                                <option value="Philadelphia Academy Charter School">
                                    Philadelphia Academy Charter School
                                </option>
                                <option value="Philadelphia Electrical and Technology Charter School">
                                    Philadelphia Electrical and Technology Charter School
                                </option>
                                <option value="Philadelphia High School for Girls">
                                    Philadelphia High School for Girls
                                </option>
                                <option value="Philadelphia Performing Arts Charter School (String Theory High School) - Vine Street Campus">
                                    Philadelphia Performing Arts Charter School (String Theory High School) - Vine
                                    Street Campus
                                </option>
                                <option value="Piedmont High School">Piedmont High School</option>
                                <option value="Pierre Elliott Trudeau High School">
                                    Pierre Elliott Trudeau High School
                                </option>
                                <option value="Pima Community College">Pima Community College</option>
                                <option value="Pingree School">Pingree School</option>
                                <option value="Piscataway Township High School">Piscataway Township High School</option>
                                <option value="Pittsburgh Technical College - Philadelphia">
                                    Pittsburgh Technical College - Philadelphia
                                </option>
                                <option value="Pittsburgh Technical Institute">Pittsburgh Technical Institute</option>
                                <option value="Plano East Senior High School">Plano East Senior High School</option>
                                <option value="Plovdiv Medical University">Plovdiv Medical University</option>
                                <option value="Pokhara University">Pokhara University</option>
                                <option value="Politecnico di Milano">Politecnico di Milano</option>
                                <option value="Polsko-Japońska Akademia Technik Komputerowych">
                                    Polsko-Japońska Akademia Technik Komputerowych
                                </option>
                                <option value="Pomona College">Pomona College</option>
                                <option value="Poolesville High School">Poolesville High School</option>
                                <option value="Poornima College of Engineering">Poornima College of Engineering</option>
                                <option value="Poornima Group of Institutions">Poornima Group of Institutions</option>
                                <option value="Poornima Institute of Engineering and Technology">
                                    Poornima Institute of Engineering and Technology
                                </option>
                                <option value="Pope John Paul II High School">Pope John Paul II High School</option>
                                <option value="Port Credit Secondary School">Port Credit Secondary School</option>
                                <option value="Porter-Gaud School">Porter-Gaud School</option>
                                <option value="Portland State University">Portland State University</option>
                                <option value="Potomac Senior High School">Potomac Senior High School</option>
                                <option value="Potsdam, SUNY">Potsdam, SUNY</option>
                                <option value="Poznań University of Technology">Poznań University of Technology</option>
                                <option value="Presidency School, Surat.">Presidency School, Surat.</option>
                                <option value="Preston High School">Preston High School</option>
                                <option value="Preston University">Preston University</option>
                                <option value="Princeton High School">Princeton High School</option>
                                <option value="Princeton University">Princeton University</option>
                                <option value="Purdue University">Purdue University</option>
                                <option value="Queen Mary University of London">Queen Mary University of London</option>
                                <option value="Queen's University">Queen's University</option>
                                <option value="Queens College, CUNY">Queens College, CUNY</option>
                                <option value="Queensborough Community College, CUNY">
                                    Queensborough Community College, CUNY
                                </option>
                                <option value="R.V. College Of Engineering">R.V. College Of Engineering</option>
                                <option value="Radnor High School">Radnor High School</option>
                                <option value="Raksha Shakti University">Raksha Shakti University</option>
                                <option value="Ramapo College of New Jersey">Ramapo College of New Jersey</option>
                                <option value="Ramapo High School">Ramapo High School</option>
                                <option value="Rani Laxmi Bai Public School">Rani Laxmi Bai Public School</option>
                                <option value="Raritan Valley Community College">
                                    Raritan Valley Community College
                                </option>
                                <option value="Ravenscroft School">Ravenscroft School</option>
                                <option value="Ravenwood High School">Ravenwood High School</option>
                                <option value="Reach Cyber Charter School">Reach Cyber Charter School</option>
                                <option value="Red Bank Regional High School">Red Bank Regional High School</option>
                                <option value="Reed College">Reed College</option>
                                <option value="Regis High School">Regis High School</option>
                                <option value="Rensselaer Polytechnic Institute">
                                    Rensselaer Polytechnic Institute
                                </option>
                                <option value="Rheinisch-Westfälische Technische Hochschule Aachen (RWTH)">
                                    Rheinisch-Westfälische Technische Hochschule Aachen (RWTH)
                                </option>
                                <option value="Rhode Island College">Rhode Island College</option>
                                <option value="Rhode Island School of Design">Rhode Island School of Design</option>
                                <option value="Rhodes College">Rhodes College</option>
                                <option value="Rice University">Rice University</option>
                                <option value="Richard Montgomery High School">Richard Montgomery High School</option>
                                <option value="Richard Stockton University">Richard Stockton University</option>
                                <option value="Richardson High School">Richardson High School</option>
                                <option value="Richland College">Richland College</option>
                                <option value="Richmond Hill High School">Richmond Hill High School</option>
                                <option value="Rider University">Rider University</option>
                                <option value="Ridgewood High School">Ridgewood High School</option>
                                <option value="Riga Technical University">Riga Technical University</option>
                                <option value="River Dell High School">River Dell High School</option>
                                <option value="Robert Gordon University">Robert Gordon University</option>
                                <option value="Rochester Institute of Technology">
                                    Rochester Institute of Technology
                                </option>
                                <option value="Rock Ridge High School">Rock Ridge High School</option>
                                <option value="Roger Williams University">Roger Williams University</option>
                                <option value="Rollins College">Rollins College</option>
                                <option value="Roosevelt High School">Roosevelt High School</option>
                                <option value="Rosa Parks Middle School">Rosa Parks Middle School</option>
                                <option value="Rose-Hulman Institute of Technology">
                                    Rose-Hulman Institute of Technology
                                </option>
                                <option value="Rosemont College">Rosemont College</option>
                                <option value="Rowan College at Burlington County - Mount Holly">
                                    Rowan College at Burlington County - Mount Holly
                                </option>
                                <option value="Rowan College at Burlington County - Pemberton">
                                    Rowan College at Burlington County - Pemberton
                                </option>
                                <option value="Rowan College at Burlington County - Willingboro">
                                    Rowan College at Burlington County - Willingboro
                                </option>
                                <option value="Rowan College at Gloucester County - Mount Laurel">
                                    Rowan College at Gloucester County - Mount Laurel
                                </option>
                                <option value="Rowan University">Rowan University</option>
                                <option value="Roxborough High School">Roxborough High School</option>
                                <option value="Roxbury High School">Roxbury High School</option>
                                <option value="Royal Holloway, University of London">
                                    Royal Holloway, University of London
                                </option>
                                <option value="Rudbecksgymnasiet">Rudbecksgymnasiet</option>
                                <option value="Rutgers University - Newark">Rutgers University - Newark</option>
                                <option value="Rutgers University – Camden">Rutgers University – Camden</option>
                                <option value="Rutgers, The State University of New Jersey">
                                    Rutgers, The State University of New Jersey
                                </option>
                                <option value="Ryde School">Ryde School</option>
                                <option value="Ryerson University">Ryerson University</option>
                                <option value="Saginaw Valley State University">Saginaw Valley State University</option>
                                <option value="Sahrdaya College of Engineering and Technology">
                                    Sahrdaya College of Engineering and Technology
                                </option>
                                <option value="Saint Joseph High School">Saint Joseph High School</option>
                                <option value="Saint Joseph's College of Maine">Saint Joseph's College of Maine</option>
                                <option value="Saint Joseph's Preparatory School - Philadelphia">
                                    Saint Joseph's Preparatory School - Philadelphia
                                </option>
                                <option value="Saint Joseph's University - Philadelphia">
                                    Saint Joseph's University - Philadelphia
                                </option>
                                <option value="Saint Paul College">Saint Paul College</option>
                                <option value="Saint Peter's Preparatory School">
                                    Saint Peter's Preparatory School
                                </option>
                                <option value="Saint Peter's University">Saint Peter's University</option>
                                <option value="Salem Community College">Salem Community College</option>
                                <option value="Salem State University">Salem State University</option>
                                <option value="Samuel Fels High School - Philadelphia">
                                    Samuel Fels High School - Philadelphia
                                </option>
                                <option value="San Diego State University">San Diego State University</option>
                                <option value="San Francisco State University">San Francisco State University</option>
                                <option value="San Jose State University">San Jose State University</option>
                                <option value="San Marcos High School">San Marcos High School</option>
                                <option value="San Marin High School">San Marin High School</option>
                                <option value="San Mateo High School">San Mateo High School</option>
                                <option value="Sankofa Freedom Academy Charter School">
                                    Sankofa Freedom Academy Charter School
                                </option>
                                <option value="Sant Longowal Institute of Engineering and Technology">
                                    Sant Longowal Institute of Engineering and Technology
                                </option>
                                <option value="Santa Barbara City College">Santa Barbara City College</option>
                                <option value="Santa Clara University">Santa Clara University</option>
                                <option value="Santa Margarita Catholic High School">
                                    Santa Margarita Catholic High School
                                </option>
                                <option value="Santa Rosa Junior College">Santa Rosa Junior College</option>
                                <option value="Saratoga High School">Saratoga High School</option>
                                <option value="Sardar Patel University">Sardar Patel University</option>
                                <option value="Sardar Vallabhbhai National Institute of Technology, Surat">
                                    Sardar Vallabhbhai National Institute of Technology, Surat
                                </option>
                                <option value="Sarvajanik College of Engineering & Technology">
                                    Sarvajanik College of Engineering & Technology
                                </option>
                                <option value="Saurashtra University Rajkot">Saurashtra University Rajkot</option>
                                <option value="Savannah State University">Savannah State University</option>
                                <option value="Savitribai Phule Pune University">
                                    Savitribai Phule Pune University
                                </option>
                                <option value="School of Professional Studies, CUNY">
                                    School of Professional Studies, CUNY
                                </option>
                                <option value="School of Visual Arts, New York">School of Visual Arts, New York</option>
                                <option value="Science Leadership Academy">Science Leadership Academy</option>
                                <option value="Scranton High School">Scranton High School</option>
                                <option value="Seneca College">Seneca College</option>
                                <option value="Seton Hall University">Seton Hall University</option>
                                <option value="Seven Lakes High School">Seven Lakes High School</option>
                                <option value="Seventh Day Adventist High School">
                                    Seventh Day Adventist High School
                                </option>
                                <option value="Shaker High School">Shaker High School</option>
                                <option value="Shankersinh Vaghela Bapu Institute of Technology">
                                    Shankersinh Vaghela Bapu Institute of Technology
                                </option>
                                <option value="Sheffield Hallam University">Sheffield Hallam University</option>
                                <option value="Shelton High School">Shelton High School</option>
                                <option value="Sherwood Convent School">Sherwood Convent School</option>
                                <option value="Sherwood High School">Sherwood High School</option>
                                <option value="Shiv Nadar University">Shiv Nadar University</option>
                                <option value="Shri Govindram Seksaria Institute of Technology and Science">
                                    Shri Govindram Seksaria Institute of Technology and Science
                                </option>
                                <option value="Shri Guru Ram Rai Public School">Shri Guru Ram Rai Public School</option>
                                <option value="Shri Vaishnav Institute of Technology and Science">
                                    Shri Vaishnav Institute of Technology and Science
                                </option>
                                <option value="Siena College">Siena College</option>
                                <option value="Silesian University of Technology">
                                    Silesian University of Technology
                                </option>
                                <option value="Silver Oak College of Engineering & Technology">
                                    Silver Oak College of Engineering & Technology
                                </option>
                                <option value="Simmons College">Simmons College</option>
                                <option value="Simón Bolívar University">Simón Bolívar University</option>
                                <option value="Simon Fraser University">Simon Fraser University</option>
                                <option value="Simon Gratz High School">Simon Gratz High School</option>
                                <option value="Simpson College">Simpson College</option>
                                <option value="Sinclair Community College">Sinclair Community College</option>
                                <option value="Singapore University of Technology and Design">
                                    Singapore University of Technology and Design
                                </option>
                                <option value="Sir John A. Macdonald Secondary School">
                                    Sir John A. Macdonald Secondary School
                                </option>
                                <option value="Sir Padampat Singhania University">
                                    Sir Padampat Singhania University
                                </option>
                                <option value="Sitarambhai Naranji Patel Institute of Technology & Research Centre">
                                    Sitarambhai Naranji Patel Institute of Technology & Research Centre
                                </option>
                                <option value="Skidmore College">Skidmore College</option>
                                <option value="Slippery Rock University of Pennsylvania">
                                    Slippery Rock University of Pennsylvania
                                </option>
                                <option value="Slovak University of Technology in Bratislava (STU)">
                                    Slovak University of Technology in Bratislava (STU)
                                </option>
                                <option value="Smith College">Smith College</option>
                                <option value="Spelman College">Spelman College</option>
                                <option value="SOAS University of London">SOAS University of London</option>
                                <option value="Souderton Area High School">Souderton Area High School</option>
                                <option value="South Brunswick High School">South Brunswick High School</option>
                                <option value="South Carolina State University">South Carolina State University</option>
                                <option value="South Dakota School of Mines and Technology">
                                    South Dakota School of Mines and Technology
                                </option>
                                <option value="South Hills School of Business & Technology">
                                    South Hills School of Business & Technology
                                </option>
                                <option value="South Lakes High School">South Lakes High School</option>
                                <option value="South Philadelphia High School">South Philadelphia High School</option>
                                <option value="South Texas College">South Texas College</option>
                                <option value="Southeastern Louisiana University">
                                    Southeastern Louisiana University
                                </option>
                                <option value="Southern Connecticut State University">
                                    Southern Connecticut State University
                                </option>
                                <option value="Southern Illinois University Carbondale">
                                    Southern Illinois University Carbondale
                                </option>
                                <option value="Southern Illinois University Edwardsville">
                                    Southern Illinois University Edwardsville
                                </option>
                                <option value="Southern Methodist University">Southern Methodist University</option>
                                <option value="Southern Oregon University">Southern Oregon University</option>
                                <option value="Southern University and A&M College">
                                    Southern University and A&M College
                                </option>
                                <option value="Southern Utah University">Southern Utah University</option>
                                <option value="Southwestern College">Southwestern College</option>
                                <option value="Spotswood High School">Spotswood High School</option>
                                <option value="Spring Arbor University">Spring Arbor University</option>
                                <option value="Springside Chestnut Hill Academy">
                                    Springside Chestnut Hill Academy
                                </option>
                                <option value="Sreenidhi Institute of Science & Technology">
                                    Sreenidhi Institute of Science & Technology
                                </option>
                                <option value="Sri Sivasubramaniya Nadar College of Engineering">
                                    Sri Sivasubramaniya Nadar College of Engineering
                                </option>
                                <option value="St Brendan High School">St Brendan High School</option>
                                <option value="St Edwards University">St Edwards University</option>
                                <option value="St Mary's Catholic High School – Croydon">
                                    St Mary's Catholic High School – Croydon
                                </option>
                                <option value="St Mary's CE High School – Cheshunt">
                                    St Mary's CE High School – Cheshunt
                                </option>
                                <option value="St Paul's Catholic College – Sunbury-on-Thames">
                                    St Paul's Catholic College – Sunbury-on-Thames
                                </option>
                                <option value="St. Charles Borromeo Seminary">St. Charles Borromeo Seminary</option>
                                <option value="St. Cloud State University">St. Cloud State University</option>
                                <option value="St. David Catholic Secondary School">
                                    St. David Catholic Secondary School
                                </option>
                                <option value="St. John's University, New York">St. John's University, New York</option>
                                <option value="St. Mark's School, Hong Kong">St. Mark's School, Hong Kong</option>
                                <option value="St. Mary's Convent School">St. Mary's Convent School</option>
                                <option value="St. Mary's Ryken High School">St. Mary's Ryken High School</option>
                                <option value="St. Michael College of Engineering & Technology">
                                    St. Michael College of Engineering & Technology
                                </option>
                                <option value="St. Raymond High School for Boys And Girls">
                                    St. Raymond High School for Boys And Girls
                                </option>
                                <option value="St. Theresa of Lisieux Catholic High School">
                                    St. Theresa of Lisieux Catholic High School
                                </option>
                                <option value="St. Xavier's Senior Secondary School, Jaipur">
                                    St. Xavier's Senior Secondary School, Jaipur
                                </option>
                                <option value="Stanford University">Stanford University</option>
                                <option value="Star Technical Institute">Star Technical Institute</option>
                                <option value="Staten Island Technical High School">
                                    Staten Island Technical High School
                                </option>
                                <option value="Stephen F. Austin State University">
                                    Stephen F. Austin State University
                                </option>
                                <option value="Stetson University">Stetson University</option>
                                <option value="Stevens Institute of Technology">Stevens Institute of Technology</option>
                                <option value="Stevenson University">Stevenson University</option>
                                <option value="Stockholm University">Stockholm University</option>
                                <option value="Stockton University">Stockton University</option>
                                <option value="Stonehill College">Stonehill College</option>
                                <option value="Stonewall Jackson High School - Manassas">
                                    Stonewall Jackson High School - Manassas
                                </option>
                                <option value="Stonewall Jackson High School - Quicksburg">
                                    Stonewall Jackson High School - Quicksburg
                                </option>
                                <option value="Stony Brook University, SUNY">Stony Brook University, SUNY</option>
                                <option value="Strawberry Mansion High School">Strawberry Mansion High School</option>
                                <option value="Strayer University - Bensalem">Strayer University - Bensalem</option>
                                <option value="Strayer University - Philadelphia Center City">
                                    Strayer University - Philadelphia Center City
                                </option>
                                <option value="Stuyvesant High School">Stuyvesant High School</option>
                                <option value="Sulphur High School">Sulphur High School</option>
                                <option value="SUNY Polytechnic Institute">SUNY Polytechnic Institute</option>
                                <option value="SUPINFO International University">
                                    SUPINFO International University
                                </option>
                                <option value="Susq-Cyber Charter School">Susq-Cyber Charter School</option>
                                <option value="Susquehanna University">Susquehanna University</option>
                                <option value="Sussex County Community College">Sussex County Community College</option>
                                <option value="Swansea University">Swansea University</option>
                                <option value="Swarthmore College">Swarthmore College</option>
                                <option value="Symbiosis International University">
                                    Symbiosis International University
                                </option>
                                <option value="Syracuse University">Syracuse University</option>
                                <option value="Tacoma Community College">Tacoma Community College</option>
                                <option value="Tacony Academy Charter School">Tacony Academy Charter School</option>
                                <option value="Tadeusz Kościuszko University of Technology">
                                    Tadeusz Kościuszko University of Technology
                                </option>
                                <option value="Tallinn University">Tallinn University</option>
                                <option value="Tallinn University of Technology">
                                    Tallinn University of Technology
                                </option>
                                <option value="Talmudical Yeshiva of Philadelphia">
                                    Talmudical Yeshiva of Philadelphia
                                </option>
                                <option value="Tampere University of Applied Sciences">
                                    Tampere University of Applied Sciences
                                </option>
                                <option value="Tampere University of Technology">
                                    Tampere University of Technology
                                </option>
                                <option value="Tarleton State University">Tarleton State University</option>
                                <option value="TECH Freire Charter High School">TECH Freire Charter High School</option>
                                <option value="Technische Universität München">Technische Universität München</option>
                                <option value="Techno India College of Technology">
                                    Techno India College of Technology
                                </option>
                                <option value="Techno India University">Techno India University</option>
                                <option value="Tecnológico de Estudio Superiores de Ixtapaluca">
                                    Tecnológico de Estudio Superiores de Ixtapaluca
                                </option>
                                <option value="Tecnológico de Estudios Superiores de Ecatepec">
                                    Tecnológico de Estudios Superiores de Ecatepec
                                </option>
                                <option value="Tecnológico de Estudios Superiores de Jilotepec">
                                    Tecnológico de Estudios Superiores de Jilotepec
                                </option>
                                <option value="Teesside University">Teesside University</option>
                                <option value="Temple University">Temple University</option>
                                <option value="Temple University - Ambler">Temple University - Ambler</option>
                                <option value="Temple University - Harrisburg">Temple University - Harrisburg</option>
                                <option value="Temple University - Health Sciences Campus">
                                    Temple University - Health Sciences Campus
                                </option>
                                <option value="Temple University - Rome">Temple University - Rome</option>
                                <option value="Temple University - Tokyo">Temple University - Tokyo</option>
                                <option value="Tenafly High School">Tenafly High School</option>
                                <option value="Tennessee State University">Tennessee State University</option>
                                <option value="Texas A&M University">Texas A&M University</option>
                                <option value="Texas A&M University – Central Texas">
                                    Texas A&M University – Central Texas
                                </option>
                                <option value="Texas A&M University – Corpus Christi">
                                    Texas A&M University – Corpus Christi
                                </option>
                                <option value="Texas A&M University – Kingsville">
                                    Texas A&M University – Kingsville
                                </option>
                                <option value="Texas Christian University">Texas Christian University</option>
                                <option value="Texas Southern University">Texas Southern University</option>
                                <option value="Texas Southmost College">Texas Southmost College</option>
                                <option value="Texas State University">Texas State University</option>
                                <option value="Texas Tech University">Texas Tech University</option>
                                <option value="Thakur College of Engineering and Technology">
                                    Thakur College of Engineering and Technology
                                </option>
                                <option value="The Arts Academy at Benjamin Rush">
                                    The Arts Academy at Benjamin Rush
                                </option>
                                <option value="The British University In Egypt">The British University In Egypt</option>
                                <option value="The Bronx High School of Science">
                                    The Bronx High School of Science
                                </option>
                                <option value="The City College of New York, CUNY">
                                    The City College of New York, CUNY
                                </option>
                                <option value="The College at Brockport, SUNY">The College at Brockport, SUNY</option>
                                <option value="The College of New Jersey">The College of New Jersey</option>
                                <option value="The College of Saint Rose">The College of Saint Rose</option>
                                <option value="The Curtis Institute of Music">The Curtis Institute of Music</option>
                                <option value="The George Washington University">
                                    The George Washington University
                                </option>
                                <option value="The Governor's School @ Innovation Park">
                                    The Governor's School @ Innovation Park
                                </option>
                                <option value="The Harker School">The Harker School</option>
                                <option value="The Hill School">The Hill School</option>
                                <option value="The Katholieke Universiteit Leuven">
                                    The Katholieke Universiteit Leuven
                                </option>
                                <option value="The LNM Institute of Information Technology">
                                    The LNM Institute of Information Technology
                                </option>
                                <option value="The Maharaja Sayajirao University of Baroda">
                                    The Maharaja Sayajirao University of Baroda
                                </option>
                                <option value="The Mount Tabor Training College">
                                    The Mount Tabor Training College
                                </option>
                                <option value="The Ohio State University">The Ohio State University</option>
                                <option value="The Open University">The Open University</option>
                                <option value="The Pennsylvania State University">
                                    The Pennsylvania State University
                                </option>
                                <option value="The Pennsylvania State University – Abington Campus">
                                    The Pennsylvania State University – Abington Campus
                                </option>
                                <option value="The Pennsylvania State University – Berks">
                                    The Pennsylvania State University – Berks
                                </option>
                                <option value="The Pennsylvania State University – Brandywine">
                                    The Pennsylvania State University – Brandywine
                                </option>
                                <option value="The Pennsylvania State University – Harrisburg">
                                    The Pennsylvania State University – Harrisburg
                                </option>
                                <option value="The Pennsylvania State University – York Campus">
                                    The Pennsylvania State University – York Campus
                                </option>
                                <option value="The Roxbury Latin School">The Roxbury Latin School</option>
                                <option value="The Savannah College of Art and Design">
                                    The Savannah College of Art and Design
                                </option>
                                <option value="The SRM University">The SRM University</option>
                                <option value="The Technical University of Denmark">
                                    The Technical University of Denmark
                                </option>
                                <option value="The Technische Universität Berlin">
                                    The Technische Universität Berlin
                                </option>
                                <option value="The Université de Sherbrooke">The Université de Sherbrooke</option>
                                <option value="The University of Aberdeen">The University of Aberdeen</option>
                                <option value="The University of Akron">The University of Akron</option>
                                <option value="The University of Alabama">The University of Alabama</option>
                                <option value="The University of Alabama at Birmingham">
                                    The University of Alabama at Birmingham
                                </option>
                                <option value="The University of Alberta">The University of Alberta</option>
                                <option value="The University of Applied Sciences Upper Austria">
                                    The University of Applied Sciences Upper Austria
                                </option>
                                <option value="The University of Arizona">The University of Arizona</option>
                                <option value="The University of Arkansas">The University of Arkansas</option>
                                <option value="The University of Bath">The University of Bath</option>
                                <option value="The University of Bedfordshire">The University of Bedfordshire</option>
                                <option value="The University of Birmingham">The University of Birmingham</option>
                                <option value="The University of Bolton">The University of Bolton</option>
                                <option value="The University of Bonn">The University of Bonn</option>
                                <option value="The University of Bristol">The University of Bristol</option>
                                <option value="The University of British Columbia">
                                    The University of British Columbia
                                </option>
                                <option value="The University of Calgary">The University of Calgary</option>
                                <option value="The University of Calicut">The University of Calicut</option>
                                <option value="The University of California, Berkeley">
                                    The University of California, Berkeley
                                </option>
                                <option value="The University of California, Davis">
                                    The University of California, Davis
                                </option>
                                <option value="The University of California, Irvine">
                                    The University of California, Irvine
                                </option>
                                <option value="The University of California, Los Angeles">
                                    The University of California, Los Angeles
                                </option>
                                <option value="The University of California, Merced">
                                    The University of California, Merced
                                </option>
                                <option value="The University of California, Riverside">
                                    The University of California, Riverside
                                </option>
                                <option value="The University of California, San Diego">
                                    The University of California, San Diego
                                </option>
                                <option value="The University of California, Santa Barbara">
                                    The University of California, Santa Barbara
                                </option>
                                <option value="The University of California, Santa Cruz">
                                    The University of California, Santa Cruz
                                </option>
                                <option value="The University of Cambridge">The University of Cambridge</option>
                                <option value="The University of Central Florida">
                                    The University of Central Florida
                                </option>
                                <option value="The University of Chicago">The University of Chicago</option>
                                <option value="The University of Colorado Boulder">
                                    The University of Colorado Boulder
                                </option>
                                <option value="The University of Colorado Colorado Springs">
                                    The University of Colorado Colorado Springs
                                </option>
                                <option value="The University of Connecticut">The University of Connecticut</option>
                                <option value="The University of Dallas">The University of Dallas</option>
                                <option value="The University of Delaware">The University of Delaware</option>
                                <option value="The University of Denver">The University of Denver</option>
                                <option value="The University of Derby">The University of Derby</option>
                                <option value="The University of Dundee">The University of Dundee</option>
                                <option value="The University of Edinburgh">The University of Edinburgh</option>
                                <option value="The University of Essex">The University of Essex</option>
                                <option value="The University of Evansville">The University of Evansville</option>
                                <option value="The University of Exeter">The University of Exeter</option>
                                <option value="The University of Falmouth">The University of Falmouth</option>
                                <option value="The University of Florida">The University of Florida</option>
                                <option value="The University of Gdańsk">The University of Gdańsk</option>
                                <option value="The University of Georgia">The University of Georgia</option>
                                <option value="The University of Glasgow">The University of Glasgow</option>
                                <option value="The University of Groningen">The University of Groningen</option>
                                <option value="The University of Guelph">The University of Guelph</option>
                                <option value="The University of Houston">The University of Houston</option>
                                <option value="The University of Houston – Clear Lake">
                                    The University of Houston – Clear Lake
                                </option>
                                <option value="The University of Houston – Downtown">
                                    The University of Houston – Downtown
                                </option>
                                <option value="The University of Huddersfield">The University of Huddersfield</option>
                                <option value="The University of Idaho">The University of Idaho</option>
                                <option value="The University of Illinois at Chicago">
                                    The University of Illinois at Chicago
                                </option>
                                <option value="The University of Illinois at Urbana-Champaign">
                                    The University of Illinois at Urbana-Champaign
                                </option>
                                <option value="The University of Information Technology and Management in Rzeszow">
                                    The University of Information Technology and Management in Rzeszow
                                </option>
                                <option value="The University of Iowa">The University of Iowa</option>
                                <option value="The University of Kansas">The University of Kansas</option>
                                <option value="The University of Kent">The University of Kent</option>
                                <option value="The University of Kentucky">The University of Kentucky</option>
                                <option value="The University of La Verne">The University of La Verne</option>
                                <option value="The University of Leeds">The University of Leeds</option>
                                <option value="The University of Leicester">The University of Leicester</option>
                                <option value="The University of Lincoln">The University of Lincoln</option>
                                <option value="The University of Liverpool">The University of Liverpool</option>
                                <option value="The University of Ljubljana">The University of Ljubljana</option>
                                <option value="The University of Louisiana at Lafayette">
                                    The University of Louisiana at Lafayette
                                </option>
                                <option value="The University of Louisiana at Monroe">
                                    The University of Louisiana at Monroe
                                </option>
                                <option value="The University of Louisville">The University of Louisville</option>
                                <option value="The University of Málaga">The University of Málaga</option>
                                <option value="The University of Manchester">The University of Manchester</option>
                                <option value="The University of Manitoba">The University of Manitoba</option>
                                <option value="The University of Maryland, Baltimore County">
                                    The University of Maryland, Baltimore County
                                </option>
                                <option value="The University of Maryland, College Park">
                                    The University of Maryland, College Park
                                </option>
                                <option value="The University of Massachusetts Amherst">
                                    The University of Massachusetts Amherst
                                </option>
                                <option value="The University of Massachusetts Boston">
                                    The University of Massachusetts Boston
                                </option>
                                <option value="The University of Massachusetts Dartmouth">
                                    The University of Massachusetts Dartmouth
                                </option>
                                <option value="The University of Massachusetts Lowell">
                                    The University of Massachusetts Lowell
                                </option>
                                <option value="The University of Miami">The University of Miami</option>
                                <option value="The University of Michigan">The University of Michigan</option>
                                <option value="The University of Michigan-Dearborn">
                                    The University of Michigan-Dearborn
                                </option>
                                <option value="The University of Michigan-Flint">
                                    The University of Michigan-Flint
                                </option>
                                <option value="The University of Minnesota">The University of Minnesota</option>
                                <option value="The University of Mississippi">The University of Mississippi</option>
                                <option value="The University of Missouri">The University of Missouri</option>
                                <option value="The University of Missouri-Kansas City">
                                    The University of Missouri-Kansas City
                                </option>
                                <option value="The University of Missouri-St. Louis">
                                    The University of Missouri-St. Louis
                                </option>
                                <option value="The University of Nebraska-Lincoln">
                                    The University of Nebraska-Lincoln
                                </option>
                                <option value="The University of New Brunswick">The University of New Brunswick</option>
                                <option value="The University of New Hampshire">The University of New Hampshire</option>
                                <option value="The University of New Haven">The University of New Haven</option>
                                <option value="The University of North Carolina at Chapel Hill">
                                    The University of North Carolina at Chapel Hill
                                </option>
                                <option value="The University of North Carolina at Charlotte">
                                    The University of North Carolina at Charlotte
                                </option>
                                <option value="The University of North Carolina at Greensboro">
                                    The University of North Carolina at Greensboro
                                </option>
                                <option value="The University of North Texas">The University of North Texas</option>
                                <option value="The University of Northampton">The University of Northampton</option>
                                <option value="The University of Notre Dame">The University of Notre Dame</option>
                                <option value="The University of Nottingham">The University of Nottingham</option>
                                <option value="The University of Oklahoma">The University of Oklahoma</option>
                                <option value="The University of Ontario Institute of Technology">
                                    The University of Ontario Institute of Technology
                                </option>
                                <option value="The University of Oregon">The University of Oregon</option>
                                <option value="The University of Ottawa">The University of Ottawa</option>
                                <option value="The University of Oulu">The University of Oulu</option>
                                <option value="The University of Oxford">The University of Oxford</option>
                                <option value="The University of Pennsylvania">The University of Pennsylvania</option>
                                <option value="The University of Petroleum and Energy Studies">
                                    The University of Petroleum and Energy Studies
                                </option>
                                <option value="The University of Phoenix">The University of Phoenix</option>
                                <option value="The University of Pittsburgh">The University of Pittsburgh</option>
                                <option value="The University of Portland">The University of Portland</option>
                                <option value="The University of Portsmouth">The University of Portsmouth</option>
                                <option value="The University of Puerto Rico, Mayagüez Campus">
                                    The University of Puerto Rico, Mayagüez Campus
                                </option>
                                <option value="The University of Puerto Rico, Río Piedras Campus">
                                    The University of Puerto Rico, Río Piedras Campus
                                </option>
                                <option value="The University of Richmond">The University of Richmond</option>
                                <option value="The University of Rochester">The University of Rochester</option>
                                <option value="The University of Salford">The University of Salford</option>
                                <option value="The University of San Francisco">The University of San Francisco</option>
                                <option value="The University of Sharjah">The University of Sharjah</option>
                                <option value="The University of Sheffield">The University of Sheffield</option>
                                <option value="The University of Silesia in Katowice">
                                    The University of Silesia in Katowice
                                </option>
                                <option value="The University of South Carolina">
                                    The University of South Carolina
                                </option>
                                <option value="The University of South Florida">The University of South Florida</option>
                                <option value="The University of Southampton">The University of Southampton</option>
                                <option value="The University of Southern California">
                                    The University of Southern California
                                </option>
                                <option value="The University of Southern Denmark">
                                    The University of Southern Denmark
                                </option>
                                <option value="The University of St Andrews">The University of St Andrews</option>
                                <option value="The University of St. Gallen">The University of St. Gallen</option>
                                <option value="The University of St. Thomas">The University of St. Thomas</option>
                                <option value="The University of Stirling">The University of Stirling</option>
                                <option value="The University of Strathclyde">The University of Strathclyde</option>
                                <option value="The University of Stuttgart">The University of Stuttgart</option>
                                <option value="The University of Surrey">The University of Surrey</option>
                                <option value="The University of Sussex">The University of Sussex</option>
                                <option value="The University of Tampa">The University of Tampa</option>
                                <option value="The University of the District of Columbia">
                                    The University of the District of Columbia
                                </option>
                                <option value="The University of Tennessee">The University of Tennessee</option>
                                <option value="The University of Texas – Pan American">
                                    The University of Texas – Pan American
                                </option>
                                <option value="The University of Texas at Arlington">
                                    The University of Texas at Arlington
                                </option>
                                <option value="The University of Texas at Austin">
                                    The University of Texas at Austin
                                </option>
                                <option value="The University of Texas at Dallas">
                                    The University of Texas at Dallas
                                </option>
                                <option value="The University of Texas at El Paso">
                                    The University of Texas at El Paso
                                </option>
                                <option value="The University of Texas at San Antonio">
                                    The University of Texas at San Antonio
                                </option>
                                <option value="The University of Texas at Tyler">
                                    The University of Texas at Tyler
                                </option>
                                <option value="The University of Texas of the Permian Basin">
                                    The University of Texas of the Permian Basin
                                </option>
                                <option value="The University of Texas Rio Grande Valley">
                                    The University of Texas Rio Grande Valley
                                </option>
                                <option value="The University of the Pacific">The University of the Pacific</option>
                                <option value="The University of the South - Sewanee">
                                    The University of the South - Sewanee
                                </option>
                                <option value="The University of Toledo">The University of Toledo</option>
                                <option value="The University of Toronto">The University of Toronto</option>
                                <option value="The University of Toronto Mississauga">
                                    The University of Toronto Mississauga
                                </option>
                                <option value="The University of Toronto Scarborough">
                                    The University of Toronto Scarborough
                                </option>
                                <option value="The University of Tulsa">The University of Tulsa</option>
                                <option value="The University of Utah">The University of Utah</option>
                                <option value="The University of Vermont">The University of Vermont</option>
                                <option value="The University of Victoria">The University of Victoria</option>
                                <option value="The University of Virginia">The University of Virginia</option>
                                <option value="The University of Warsaw">The University of Warsaw</option>
                                <option value="The University of Warwick">The University of Warwick</option>
                                <option value="The University of Washington">The University of Washington</option>
                                <option value="The University of Washington Bothell">
                                    The University of Washington Bothell
                                </option>
                                <option value="The University of Waterloo">The University of Waterloo</option>
                                <option value="The University of West Georgia">The University of West Georgia</option>
                                <option value="The University of Western Ontario">
                                    The University of Western Ontario
                                </option>
                                <option value="The University of Westminster">The University of Westminster</option>
                                <option value="The University of Windsor">The University of Windsor</option>
                                <option value="The University of Wisconsin-Eau Claire">
                                    The University of Wisconsin-Eau Claire
                                </option>
                                <option value="The University of Wisconsin-Green Bay">
                                    The University of Wisconsin-Green Bay
                                </option>
                                <option value="The University of Wisconsin-La Crosse">
                                    The University of Wisconsin-La Crosse
                                </option>
                                <option value="The University of Wisconsin-Madison">
                                    The University of Wisconsin-Madison
                                </option>
                                <option value="The University of Wisconsin-Milwaukee">
                                    The University of Wisconsin-Milwaukee
                                </option>
                                <option value="The University of Wisconsin-Oshkosh">
                                    The University of Wisconsin-Oshkosh
                                </option>
                                <option value="The University of Wisconsin-Parkside">
                                    The University of Wisconsin-Parkside
                                </option>
                                <option value="The University of Wisconsin-Platteville">
                                    The University of Wisconsin-Platteville
                                </option>
                                <option value="The University of Wisconsin-River Falls">
                                    The University of Wisconsin-River Falls
                                </option>
                                <option value="The University of Wisconsin-Stevens Point">
                                    The University of Wisconsin-Stevens Point
                                </option>
                                <option value="The University of Wisconsin-Stout">
                                    The University of Wisconsin-Stout
                                </option>
                                <option value="The University of Wisconsin-Superior">
                                    The University of Wisconsin-Superior
                                </option>
                                <option value="The University of Wisconsin-Whitewater">
                                    The University of Wisconsin-Whitewater
                                </option>
                                <option value="The University of Wolverhampton">The University of Wolverhampton</option>
                                <option value="The University of Wrocław">The University of Wrocław</option>
                                <option value="The University of York">The University of York</option>
                                <option value="The University of Zagreb">The University of Zagreb</option>
                                <option value="The Workshop School - Philadelphia">
                                    The Workshop School - Philadelphia
                                </option>
                                <option value="Thomas A. Edison High School - Philadelphia">
                                    Thomas A. Edison High School - Philadelphia
                                </option>
                                <option value="Thomas Edison State College">Thomas Edison State College</option>
                                <option value="Thomas Jefferson High School for Science and Technology">
                                    Thomas Jefferson High School for Science and Technology
                                </option>
                                <option value="Thomas Jefferson University - East Falls (formerly Philadelphia University)">
                                    Thomas Jefferson University - East Falls (formerly Philadelphia University)
                                </option>
                                <option value="Thomas Jefferson University - Philadelphia Center City">
                                    Thomas Jefferson University - Philadelphia Center City
                                </option>
                                <option value="Thomas Nelson Community College">Thomas Nelson Community College</option>
                                <option value="Thomas S. Wootton High School">Thomas S. Wootton High School</option>
                                <option value="Thompson Institute - Philadelphia">
                                    Thompson Institute - Philadelphia
                                </option>
                                <option value="Tongji University">Tongji University</option>
                                <option value="Towson High School">Towson High School</option>
                                <option value="Towson University">Towson University</option>
                                <option value="Trent University">Trent University</option>
                                <option value="Trinity College">Trinity College</option>
                                <option value="Trinity International University">
                                    Trinity International University
                                </option>
                                <option value="Trinity Valley School">Trinity Valley School</option>
                                <option value="Troy Athens High School">Troy Athens High School</option>
                                <option value="Troy High School">Troy High School</option>
                                <option value="Troy University">Troy University</option>
                                <option value="Truman State University">Truman State University</option>
                                <option value="Tshwane University of Technology">
                                    Tshwane University of Technology
                                </option>
                                <option value="TU/e Technische Universiteit Eindhoven University of Technology">
                                    TU/e Technische Universiteit Eindhoven University of Technology
                                </option>
                                <option value="Tufts University">Tufts University</option>
                                <option value="Tulane University">Tulane University</option>
                                <option value="Tunis El Manar University">Tunis El Manar University</option>
                                <option value="Turner Fenton Secondary School">Turner Fenton Secondary School</option>
                                <option value="Ulster University">Ulster University</option>
                                <option value="UNAM FES Aragón">UNAM FES Aragón</option>
                                <option value="Union County College">Union County College</option>
                                <option value="Union County Magnet High School">Union County Magnet High School</option>
                                <option value="Union County Vocational-Technical Schools">
                                    Union County Vocational-Technical Schools
                                </option>
                                <option value="Union University">Union University</option>
                                <option value="Unionville High School">Unionville High School</option>
                                <option value="United College of Engineering and Research">
                                    United College of Engineering and Research
                                </option>
                                <option value="United Institute of Technology">United Institute of Technology</option>
                                <option value="Universidad Autónoma de Baja California (UABC), Tijuana">
                                    Universidad Autónoma de Baja California (UABC), Tijuana
                                </option>
                                <option value="Universidad Autónoma de Coahuila">
                                    Universidad Autónoma de Coahuila
                                </option>
                                <option value="Universidad Autónoma de Madrid">Universidad Autónoma de Madrid</option>
                                <option value="Universidad Autónoma de Nuevo León">
                                    Universidad Autónoma de Nuevo León
                                </option>
                                <option value="Universidad Autónoma de San Luis Potosí">
                                    Universidad Autónoma de San Luis Potosí
                                </option>
                                <option value="Universidad Autónoma de Tlaxcala">
                                    Universidad Autónoma de Tlaxcala
                                </option>
                                <option value="Universidad Autónoma del Estado de México">
                                    Universidad Autónoma del Estado de México
                                </option>
                                <option value="Universidad Autónoma del Estado de Morelos">
                                    Universidad Autónoma del Estado de Morelos
                                </option>
                                <option value="Universidad Autónoma del Perú">Universidad Autónoma del Perú</option>
                                <option value="Universidad Autónoma Metropolitana">
                                    Universidad Autónoma Metropolitana
                                </option>
                                <option value="Universidad Centro de Estudios Cortazar">
                                    Universidad Centro de Estudios Cortazar
                                </option>
                                <option value="Universidad de Guadalajara">Universidad de Guadalajara</option>
                                <option value="Universidad de Guanajuato">Universidad de Guanajuato</option>
                                <option value="Universidad de La Salle Bajío">Universidad de La Salle Bajío</option>
                                <option value="Universidad de La Laguna">Universidad de La Laguna</option>
                                <option value="Universidad de Monterrey">Universidad de Monterrey</option>
                                <option value="Universidad del Desarrollo">Universidad del Desarrollo</option>
                                <option value="Universidad del Valle de México">Universidad del Valle de México</option>
                                <option value="Universidad en Línea, Mexico">Universidad en Línea, Mexico</option>
                                <option value="Universidad Iberoamericana">Universidad Iberoamericana</option>
                                <option value="Universidad Interamericana de Puerto Rico">
                                    Universidad Interamericana de Puerto Rico
                                </option>
                                <option value="Universidad Nacional Autónoma de México">
                                    Universidad Nacional Autónoma de México
                                </option>
                                <option value="Universidad Panamericana">Universidad Panamericana</option>
                                <option value="Universidad Politécnica de Guanajuato">
                                    Universidad Politécnica de Guanajuato
                                </option>
                                <option value="Universidad Politécnica de Querétaro">
                                    Universidad Politécnica de Querétaro
                                </option>
                                <option value="Universidad TecMilenio">Universidad TecMilenio</option>
                                <option value="Universidad Tecnológica de México">
                                    Universidad Tecnológica de México
                                </option>
                                <option value="Universidad Tecnológica de Puebla">
                                    Universidad Tecnológica de Puebla
                                </option>
                                <option value="Universidad Tecnológica de Torreón">
                                    Universidad Tecnológica de Torreón
                                </option>
                                <option value="Universidad Veracruzana">Universidad Veracruzana</option>
                                <option value="Universitat Autònoma de Barcelona, UAB">
                                    Universitat Autònoma de Barcelona, UAB
                                </option>
                                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                                <option value="Universitat Oberta de Catalunya, UOC">
                                    Universitat Oberta de Catalunya, UOC
                                </option>
                                <option value="Universitat Politècnica de Catalunya">
                                    Universitat Politècnica de Catalunya
                                </option>
                                <option value="Universitat Politècnica de Catalunya, UPC">
                                    Universitat Politècnica de Catalunya, UPC
                                </option>
                                <option value="Universitat Pompeu Fabra">Universitat Pompeu Fabra</option>
                                <option value="Universität Regensburg">Universität Regensburg</option>
                                <option value="Universität Zürich">Universität Zürich</option>
                                <option value="Universitatea Politehnica Timişoara">
                                    Universitatea Politehnica Timişoara
                                </option>
                                <option value="Université de Bordeaux">Université de Bordeaux</option>
                                <option value="Université de Mons">Université de Mons</option>
                                <option value="Université du Québec à Montréal">Université du Québec à Montréal</option>
                                <option value="University at Albany, SUNY">University at Albany, SUNY</option>
                                <option value="University at Binghamton, SUNY">University at Binghamton, SUNY</option>
                                <option value="University at Buffalo, SUNY">University at Buffalo, SUNY</option>
                                <option value="University at New Paltz, SUNY">University at New Paltz, SUNY</option>
                                <option value="University at Oneonta, SUNY">University at Oneonta, SUNY</option>
                                <option value="University at Orange, SUNY">University at Orange, SUNY</option>
                                <option value="University at Oswego, SUNY">University at Oswego, SUNY</option>
                                <option value="University at Plattsburgh, SUNY">University at Plattsburgh, SUNY</option>
                                <option value="University Campus Suffolk">University Campus Suffolk</option>
                                <option value="University College London">University College London</option>
                                <option value="University of Basel">University of Basel</option>
                                <option value="University of Białystok">University of Białystok</option>
                                <option value="University of Cincinnati">University of Cincinnati</option>
                                <option value="University of Cincinnati Clermont College">
                                    University of Cincinnati Clermont College
                                </option>
                                <option value="University of Duisburg-Essen">University of Duisburg-Essen</option>
                                <option value="University of Gothenburg">University of Gothenburg</option>
                                <option value="University of Helsinki">University of Helsinki</option>
                                <option value="University of Hull">University of Hull</option>
                                <option value="University of London">University of London</option>
                                <option value="University of Mary Washington">University of Mary Washington</option>
                                <option value="University of Maryland University College">
                                    University of Maryland University College
                                </option>
                                <option value="University of North America">University of North America</option>
                                <option value="University of North Florida">University of North Florida</option>
                                <option value="University of North Georgia">University of North Georgia</option>
                                <option value="University of Pikeville">University of Pikeville</option>
                                <option value="University of Queensland">University of Queensland</option>
                                <option value="University of Roehampton">University of Roehampton</option>
                                <option value="University of Saskatchewan">University of Saskatchewan</option>
                                <option value="University of Science and Technology Houari Boumediene">
                                    University of Science and Technology Houari Boumediene
                                </option>
                                <option value="University of Southampton">University of Southampton</option>
                                <option value="University of Southern Indiana">University of Southern Indiana</option>
                                <option value="University of Sunderland">University of Sunderland</option>
                                <option value="University of Tartu">University of Tartu</option>
                                <option value="University of the Arts - Philadelphia">
                                    University of the Arts - Philadelphia
                                </option>
                                <option value="University of the People">University of the People</option>
                                <option value="University of the Sciences in Philadelphia">
                                    University of the Sciences in Philadelphia
                                </option>
                                <option value="University of Trento">University of Trento</option>
                                <option value="University of Udaipur">University of Udaipur</option>
                                <option value="University of Valley Forge">University of Valley Forge</option>
                                <option value="University of Washington Tacoma">University of Washington Tacoma</option>
                                <option value="University of West Florida">University of West Florida</option>
                                <option value="Upper Canada College">Upper Canada College</option>
                                <option value="Upper Darby High School">Upper Darby High School</option>
                                <option value="Upper Iowa University">Upper Iowa University</option>
                                <option value="Upper Moreland High School">Upper Moreland High School</option>
                                <option value="Urbana High School">Urbana High School</option>
                                <option value="Ursinus College">Ursinus College</option>
                                <option value="Utah State University">Utah State University</option>
                                <option value="Utica College">Utica College</option>
                                <option value="Utkal University">Utkal University</option>
                                <option value="Uttar Pradesh Technical University">
                                    Uttar Pradesh Technical University
                                </option>
                                <option value="Uttaranchal Institute of Technology">
                                    Uttaranchal Institute of Technology
                                </option>
                                <option value="Vadodara Institute of Engineering">
                                    Vadodara Institute of Engineering
                                </option>
                                <option value="Valencia College">Valencia College</option>
                                <option value="Valley Christian High School">Valley Christian High School</option>
                                <option value="Valley High School">Valley High School</option>
                                <option value="Vanderbilt University">Vanderbilt University</option>
                                <option value="Vanier College">Vanier College</option>
                                <option value="Vassar College">Vassar College</option>
                                <option value="Veer Narmad South Gujarat University">
                                    Veer Narmad South Gujarat University
                                </option>
                                <option value="Veer Surendra Sai University of Technology, Burla">
                                    Veer Surendra Sai University of Technology, Burla
                                </option>
                                <option value="Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College">
                                    Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College
                                </option>
                                <option value="Vellore Institute of Technology">Vellore Institute of Technology</option>
                                <option value="Veterans Memorial Early College High School">
                                    Veterans Memorial Early College High School
                                </option>
                                <option value="VIA University College">VIA University College</option>
                                <option value="Victoria Park Collegiate Institute">
                                    Victoria Park Collegiate Institute
                                </option>
                                <option value="Vidyakunj International School">Vidyakunj International School</option>
                                <option value="Villanova University">Villanova University</option>
                                <option value="Vincennes University">Vincennes University</option>
                                <option value="Vincent Massey Secondary School">Vincent Massey Secondary School</option>
                                <option value="Virginia Commonwealth University">
                                    Virginia Commonwealth University
                                </option>
                                <option value="Virginia Tech">Virginia Tech</option>
                                <option value="Virtual High School @ PWCS">Virtual High School @ PWCS</option>
                                <option value="Visvesvaraya National Institute of Technology">
                                    Visvesvaraya National Institute of Technology
                                </option>
                                <option value="Visvesvaraya Technological University">
                                    Visvesvaraya Technological University
                                </option>
                                <option value="VIT University">VIT University</option>
                                <option value="Vivekanand Education Society's Institute of Technology">
                                    Vivekanand Education Society's Institute of Technology
                                </option>
                                <option value="Vivekananda College for BCA">Vivekananda College for BCA</option>
                                <option value="Vrije Universiteit Amsterdam">Vrije Universiteit Amsterdam</option>
                                <option value="Wake Forest University">Wake Forest University</option>
                                <option value="Walnut Hill College">Walnut Hill College</option>
                                <option value="Walt Whitman High School">Walt Whitman High School</option>
                                <option value="Walter Biddle Saul High School">Walter Biddle Saul High School</option>
                                <option value="Ward Melville High School">Ward Melville High School</option>
                                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                                <option value="Warsaw University of Technology">Warsaw University of Technology</option>
                                <option value="Wartburg College">Wartburg College</option>
                                <option value="Washington and Lee University">Washington and Lee University</option>
                                <option value="Washington State University">Washington State University</option>
                                <option value="Washington Township High School">Washington Township High School</option>
                                <option value="Washington University in St. Louis">
                                    Washington University in St. Louis
                                </option>
                                <option value="Waterloo Collegiate Institute">Waterloo Collegiate Institute</option>
                                <option value="Waunakee High School">Waunakee High School</option>
                                <option value="Wayne State University">Wayne State University</option>
                                <option value="Webb Bridge Middle School">Webb Bridge Middle School</option>
                                <option value="Wellesley College">Wellesley College</option>
                                <option value="Wells College">Wells College</option>
                                <option value="Wentworth Institute of Technology">
                                    Wentworth Institute of Technology
                                </option>
                                <option value="Wesleyan University">Wesleyan University</option>
                                <option value="West Chester University">West Chester University</option>
                                <option value="West Morris Mendham High School">West Morris Mendham High School</option>
                                <option value="West Philadelphia High School">West Philadelphia High School</option>
                                <option value="West Potomac High School">West Potomac High School</option>
                                <option value="West Scranton High School">West Scranton High School</option>
                                <option value="West Windsor-Plainsboro High School North">
                                    West Windsor-Plainsboro High School North
                                </option>
                                <option value="West Windsor-Plainsboro High School South">
                                    West Windsor-Plainsboro High School South
                                </option>
                                <option value="Westdale Secondary School">Westdale Secondary School</option>
                                <option value="Western Connecticut State University">
                                    Western Connecticut State University
                                </option>
                                <option value="Western Governors University">Western Governors University</option>
                                <option value="Western Kentucky University">Western Kentucky University</option>
                                <option value="Western Michigan University">Western Michigan University</option>
                                <option value="Western New England University">Western New England University</option>
                                <option value="Western Technical College">Western Technical College</option>
                                <option value="Western University">Western University</option>
                                <option value="Western Washington University">Western Washington University</option>
                                <option value="Westfield High School">Westfield High School</option>
                                <option value="Westminster College">Westminster College</option>
                                <option value="Westminster School">Westminster School</option>
                                <option value="Westwood High School">Westwood High School</option>
                                <option value="Whitefish Bay High School">Whitefish Bay High School</option>
                                <option value="Whitworth University">Whitworth University</option>
                                <option value="Wichita State University">Wichita State University</option>
                                <option value="Widener University">Widener University</option>
                                <option value="Wilbert Tucker Woodson High School">
                                    Wilbert Tucker Woodson High School
                                </option>
                                <option value="Wilfrid Laurier University">Wilfrid Laurier University</option>
                                <option value="Wilkes University">Wilkes University</option>
                                <option value="William & Mary">William & Mary</option>
                                <option value="William L. Sayre High School">William L. Sayre High School</option>
                                <option value="William Lyon Mackenzie Collegiate Institute">
                                    William Lyon Mackenzie Collegiate Institute
                                </option>
                                <option value="William Paterson University">William Paterson University</option>
                                <option value="William W. Bodine High School">William W. Bodine High School</option>
                                <option value="Williams College">Williams College</option>
                                <option value="Williamson Free School of Mechanical Trades">
                                    Williamson Free School of Mechanical Trades
                                </option>
                                <option value="Wilmington University">Wilmington University</option>
                                <option value="Wiltshire College">Wiltshire College</option>
                                <option value="Winona State University">Winona State University</option>
                                <option value="Winston Churchill High School">Winston Churchill High School</option>
                                <option value="Winthrop University">Winthrop University</option>
                                <option value="Woodbridge High School - Bridgeville">
                                    Woodbridge High School - Bridgeville
                                </option>
                                <option value="Woodbridge High School - Irvine">Woodbridge High School - Irvine</option>
                                <option value="Woodbridge High School - London">Woodbridge High School - London</option>
                                <option value="Woodbridge High School - Woodbridge, NJ">
                                    Woodbridge High School - Woodbridge, NJ
                                </option>
                                <option value="Woodbridge High School - Woodbridge, ON">
                                    Woodbridge High School - Woodbridge, ON
                                </option>
                                <option value="Woodbridge High School - Woodbridge, VA">
                                    Woodbridge High School - Woodbridge, VA
                                </option>
                                <option value="Worcester Polytechnic Institute">Worcester Polytechnic Institute</option>
                                <option value="Worcester State University">Worcester State University</option>
                                <option value="World Communications Charter School">
                                    World Communications Charter School
                                </option>
                                <option value="Wright State University">Wright State University</option>
                                <option value="Wrocław University of Economics">Wrocław University of Economics</option>
                                <option value="Wrocław University of Technology">
                                    Wrocław University of Technology
                                </option>
                                <option value="Wyższa Szkoła Biznesu – National-Louis University">
                                    Wyższa Szkoła Biznesu – National-Louis University
                                </option>
                                <option value="Xavier University">Xavier University</option>
                                <option value="Yale University">Yale University</option>
                                <option value="Yale-NUS College">Yale-NUS College</option>
                                <option value="Yeshiva University">Yeshiva University</option>
                                <option value="YMCA University of Science & Technology">
                                    YMCA University of Science & Technology
                                </option>
                                <option value="York College of Pennsylvania">York College of Pennsylvania</option>
                                <option value="York College, CUNY">York College, CUNY</option>
                                <option value="York University">York University</option>
                                <option value="Youngstown State University">Youngstown State University</option>
                                <option value="YouthBuild Philadelphia Charter School">
                                    YouthBuild Philadelphia Charter School
                                </option>
                                <option value="Zespół Szkół im. Jana Pawła II w Niepołomicach">
                                    Zespół Szkół im. Jana Pawła II w Niepołomicach
                                </option>
                                <option value="Zespół Szkół Łączności, Monte Cassino 31">
                                    Zespół Szkół Łączności, Monte Cassino 31
                                </option>
                                <option value="Zespół Szkół nr 1 im. Jana Pawła II w Przysusze">
                                    Zespół Szkół nr 1 im. Jana Pawła II w Przysusze
                                </option>
                                <option value="Zespół szkół nr 1 im. Stanisława Staszica w Bochni">
                                    Zespół szkół nr 1 im. Stanisława Staszica w Bochni
                                </option>
                                <option value="Zespół Szkół Nr.2 im. Jana Pawła II w Miechowie">
                                    Zespół Szkół Nr.2 im. Jana Pawła II w Miechowie
                                </option>
                            </select>
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="levelOfStudy">
                                Current Level of Study <span className="required">*</span>
                            </label>
                            <select id="levelOfStudy" name="levelOfStudy" onChange={handleInputChange} required>
                                <option value="" disabled={true} selected={true}>
                                    Current Level of Study
                                </option>
                                <option value="High School">High School</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                                <option value="Graduate">Graduate</option>
                            </select>
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="gender">
                                Gender <span className="required">*</span>
                            </label>
                            <select id="gender" name="gender" onChange={handleInputChange} required>
                                <option value="" disabled={true} selected={true}>
                                    Gender
                                </option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="race">
                                Race <span className="required">*</span>
                            </label>
                            <select id="race" name="race" onChange={handleInputChange} required>
                                <option value="" disabled={true} selected={true}>
                                    race
                                </option>
                                <option value="American Indian or Alaskan Native">
                                    American Indian or Alaskan Native
                                </option>
                                <option value="Asian/Pacific Islander">Asian/Pacific Islander</option>
                                <option value="Black or African American">Black or African American</option>
                                <option value="Latino">Latino</option>
                                <option value="White/Caucasion">White/Caucasion</option>
                                <option value="Prefer not to answer">Prefer not to answer</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="stateOrCountry">
                            If you live in the US, what state do you currently live in? If you do not reside within the
                            US, what country are you from?
                        </label>
                        <select id="stateOrCountry" name="stateOrCountry" onChange={handleInputChange} required>
                            <option value="" disabled={true} selected={true}>
                                Select an Option
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
                            <option value="" disabled={true}>
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
                            <option value="" disabled={true} selected={true}>
                                Select an Option
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
                            <option value="" disabled={true} selected={true}>
                                Select an Option
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
