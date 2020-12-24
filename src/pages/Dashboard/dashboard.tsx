import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import SubNavbar from '../../components/Sub-NavBar/sub-navbar';
// import Application from '../../components/HackMercedApplication/hackmerced-application';
// import AsideBox from '../../components/AsideBox/asidebox'
import './dashboard.scss';
import { HackerState, TokenState } from '../../App.types';

const Dashboard: FC<{
    hacker: HackerState | undefined;
    updateHacker: React.Dispatch<React.SetStateAction<HackerState | undefined>>;
    token: TokenState | undefined;
    updateToken: React.Dispatch<React.SetStateAction<TokenState | undefined>>;
}> = ({ hacker, token }): JSX.Element => {
    const history = useHistory();

    if (token?.accessToken === hacker?.email) {
        history.push('/401');
    }

    return (
        <>
            <Navbar showBanner={false} />
            <div className="dashboard-outside-background">
                <section>
                    <SubNavbar backgroundColor="#F0F0F3" textColor="#ffb181" breakLineColor="#ffb181" />
                    {/* <Application />
                    <aside>
                        <AsideBox />
                    </aside> */}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
