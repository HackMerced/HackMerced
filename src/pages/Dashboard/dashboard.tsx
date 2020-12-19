import React, { FC } from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import SubNavbar from '../../components/Sub-NavBar/sub-navbar';
import Application from '../../components/HackMercedApplication/hackmerced-application';
import AsideBox from '../../components/AsideBox/asidebox'
import './dashboard.scss'

const DashBoard: FC = (): JSX.Element => {
    return (
        <>
            <Navbar showBanner={false} />
            <div className="dashboard-outside-background">
                <section>
                    <SubNavbar backgroundColor="white" textColor="#ffb181" breakLineColor="#ffb181" />
                    <Application />

                </section>
                <AsideBox />
                <aside>
                </aside>
            </div>
            <Footer />
        </>
    );
};

export default DashBoard;
