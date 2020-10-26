import React, { FC } from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import Application from '../../components/HackMercedApplication/hackmerced-application';
const DashBoard: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <section>
                <Application />
            </section>
            <Footer />
        </>
    );

};

export default DashBoard;
