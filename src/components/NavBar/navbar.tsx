import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import MLHBANNER from '../../assets/images/mlh-badge.svg';
import './navbar.scss';

function Navbar() {
    let { pathname } = useLocation();
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);

    useEffect(() => {
        const closeDrawer = (event: { target: any }) => {
            if (drawerRef.current && (drawerRef?.current as any).contains(event.target)) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener('mousedown', closeDrawer);
        return () => document.removeEventListener('mousedown', closeDrawer);
    }, []);

    const NavbarItemsProps = {
        openDrawer: openDrawer,
    };

    return (
        <Styles.Wrapper className="test">
            <Menu.Wrapper>
                <Menu.Logo>
                    <img className="MLH" src={MLHBANNER} width="100" height="175" alt="MLH BANNER" />
                </Menu.Logo>

                <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                    <HamburgerButton.Lines />
                </HamburgerButton.Wrapper>

                <Menu.Items ref={drawerRef} {...NavbarItemsProps}>
                    <Menu.Item>
                        <Link to="/">Home</Link>
                        {pathname === '/' ? <div className="break-line"></div> : null}
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/past-hackathons">Past Hackathons</Link>
                        {pathname === '/past-hackathons' ? <div className="break-line"></div> : null}
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/sponsors">Sponsors</Link>
                        {pathname === '/sponsors' ? <div className="break-line"></div> : null}
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/contact-us">Contact Us</Link>
                        {pathname === '/contact-us' ? <div className="break-line"></div> : null}
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/application">Apply</Link>
                        {pathname === '/application' ? <div className="break-line"></div> : null}
                    </Menu.Item>
                </Menu.Items>
            </Menu.Wrapper>
        </Styles.Wrapper>
    );
}

const Styles = {
    Wrapper: styled.main`
        display: flex;
        background-color: #ffb181;
        height: auto;
        color: white;

        @media only screen and (max-width: 40em) {
            height: ${(): string => {
            const { pathname } = useLocation();
            return pathname !== '/' ? '13vw' : 'auto';
        }
        };
    `,
};

const Menu = {
    Wrapper: styled.nav`
        flex: 1;
        align-self: flex-start;
        padding: 1rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

/*         // 40em == 640px
        @media only screen and (max-width: 40em) {
            position: fixed;
            width: 100vw;
            top: 0;
        } */
    `,
    Logo: styled.h1`
        padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style: none;
        font-weight: 700;
        text-transform: uppercase;

        @media only screen and (max-width: 40em) {
            position: fixed;
            right: 0;
            top: 0;
            height: 100%;
            flex-direction: column;
            padding: 1rem 2rem;
            transition: 0.2s ease-out;
            background-color: #ffb181;
            transform: ${({ openDrawer }: { openDrawer: any }) => (openDrawer ? `translateX(0)` : `translateX(100%)`)};
        }
    `,
    Item: styled.li`
        padding: 0 1rem;
        cursor: pointer;

        @media only screen and (max-width: 40em) {
            padding: 1rem 0;
        }
    `,
};

const HamburgerButton = {
    Wrapper: styled.button`
        height: 3rem;
        width: 3rem;
        position: relative;
        font-size: 12px;
        display: none;
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;

        &:after {
            content: '';
            display: block;
            position: absolute;
            height: 150%;
            width: 150%;
            top: -25%;
            left: -25%;
        }

        @media only screen and (max-width: 40em) {
            display: block;
        }
    `,
    Lines: styled.div`
        top: 50%;
        margin-top: -0.125em;

        &,
        &:after,
        &:before {
            /* Create lines */
            height: 2px;
            pointer-events: none;
            display: block;
            content: '';
            width: 100%;
            background-color: white;
            position: absolute;
        }

        &:after {
            /* Move bottom line below center line */
            top: -0.8rem;
        }

        &:before {
            /* Move top line on top of center line */
            top: 0.8rem;
        }
    `,
};

export default Navbar;
