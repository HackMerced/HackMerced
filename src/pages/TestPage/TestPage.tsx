import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fdf2e9;
    font-family: 'Annie Use Your Telescope', cursive;
  }
`;

const TestPage: FC = () => {
    return (
        <div>
            <GlobalStyle />
            <HamburgerMenu />
        </div>
    );
};

export default TestPage;
