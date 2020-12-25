import React, { FC, Fragment } from "react";
import { useHistory } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import SubNavbar from "../../components/SubNavBar";
// import Application from '../../components/HackMercedApplication/hackmerced-application';
// import AsideBox from '../../components/AsideBox/asidebox'
import "./styles.scss";
import { HackerState, TokenState } from "../../App.types";

const authenticateHacker = (hacker: HackerState) => {
  if (hacker.id === '' || hacker.email === '' || hacker.firstName === '' || hacker.lastName === '') {
    return false;
  }

  return true;
}

const authenticateToken = (token: TokenState) => {
  if (token.accessToken === '' || token.refreshToken === '' || token.tokenType !== 'Bearer') {
    return false;
  }

  return true;
}

const Dashboard: FC<{
    hacker: HackerState | undefined;
    updateHacker: React.Dispatch<React.SetStateAction<HackerState | undefined>>;
    token: TokenState | undefined;
    updateToken: React.Dispatch<React.SetStateAction<TokenState | undefined>>;
}> = ({ hacker, token }): JSX.Element => {
    const history = useHistory();

    if (hacker === undefined || token  === undefined) {
      history.push("/404");
    } else if (!authenticateHacker(hacker as HackerState) && !authenticateToken(token as TokenState)) {
        history.push("/401");
    }

    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Dashboard;
