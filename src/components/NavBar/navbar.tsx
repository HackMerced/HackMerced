import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import MLHBANNER from '../../assets/images/mlh-badge.svg';
import './navbar.scss';

const Navbar: FC<{ backgroundColor?: string; textColor?: string; breakLineColor?: string; showBanner?: boolean }> = ({
    backgroundColor,
    textColor,
    breakLineColor,
    showBanner = true,
}): JSX.Element => {
    const { pathname } = useLocation();
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

    const BreakLine = (): JSX.Element => {
        return <div className="break-line" style={{ borderColor: breakLineColor }}></div>;
    };

    return (
        <Styles.Wrapper className="test" style={{ backgroundColor, color: textColor }}>
            <Menu.Wrapper>
                <Menu.Logo>
                    {showBanner ? (
                        <img className="MLH" src={MLHBANNER} width="100" height="175" alt="MLH BANNER" />
                    ) : (
                        <div className="hmtext">HackMerced</div>
                    )}
                </Menu.Logo>

                <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                    <HamburgerButton.Lines breakLineColor={breakLineColor} />
                </HamburgerButton.Wrapper>

                <Menu.Items ref={drawerRef} {...NavbarItemsProps} style={{ backgroundColor }}>
                    <Menu.Item>
                        <Link to="/">Home</Link>
                        {pathname === '/' ? BreakLine() : null}
                    </Menu.Item>
                    {/* <Menu.Item>
                        <Link to="/designmerced">DesignMerced</Link>
                        {pathname === '/designmerced' ? BreakLine() : null}
                    </Menu.Item> */}
                    {/* <Menu.Item>
                        <Link to="/past-hackathons">Past Hackathons</Link>
                        {pathname === '/past-hackathons' ? BreakLine() : null}
                    </Menu.Item> */}
                    {/* <Menu.Item>
                        <a href="https://hackmercedvi.typeform.com/to/mY7E1Fug">Apply</a>
                        
                        {pathname === '/application' ? <div className="break-line"></div> : null}
                    </Menu.Item> */}
                    <Menu.Item>
                        <Link to="/sponsors">Sponsors</Link>
                        {pathname === '/sponsors' ? BreakLine() : null}
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/contact-us">Contact Us</Link>
                        {pathname === '/contact-us' ? BreakLine() : null}
                    </Menu.Item>
                    {/* <Menu.Item>
                        <Link to="/login">Login</Link>
                        {pathname === '/login' ? <div className="break-line"></div> : null}
                    </Menu.Item> */}
                </Menu.Items>
            </Menu.Wrapper>
        </Styles.Wrapper>
    );
};

const Styles = {
    Wrapper: styled.header`
        display: flex;
        background-color: #ffb181;
        height: auto;
        color: white;

        @media only screen and (max-width: 40em) {
            height: ${(): string => {
                const { pathname } = useLocation();
                return pathname !== '/' ? '13vw' : 'auto';
            }};
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
    `,
    Logo: styled.h1`
        padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style: none;
        font-weight: 700;
        text-transform: uppercase;
        z-index: 30;

        @media only screen and (max-width: 910px) {
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

        @media only screen and (max-width: 910px) {
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

        @media only screen and (max-width: 910px) {
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
            background-color: ${({ breakLineColor }: { breakLineColor: any }) => breakLineColor};
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
