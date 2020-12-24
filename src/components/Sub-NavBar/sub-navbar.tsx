import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import './sub-navbar.scss';

const SubNavbar: FC<{ backgroundColor?: string; textColor?: string; breakLineColor?: string }> = ({
    backgroundColor,
    textColor,
    breakLineColor,
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

    const SubNavbarItemsProps = {
        openDrawer: openDrawer,
    };

    const BreakLine = (): JSX.Element => {
        return <div className="break-line" style={{ borderColor: breakLineColor }}></div>;
    };

    return (
        <Styles.Wrapper className="sub-navbar" style={{ backgroundColor, color: textColor }}>
            <Menu.Wrapper>
                <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                    <HamburgerButton.Lines breakLineColor={breakLineColor} />
                </HamburgerButton.Wrapper>

                <Menu.Items ref={drawerRef} {...SubNavbarItemsProps} style={{ backgroundColor }}>
                    {/* <Menu.Item className="subnavbar-text">
                        <Link to="/dashboard">MY APPLICATION</Link>
                        {pathname === '/dashboard' ? BreakLine() : null}
                    </Menu.Item> */}
                    <Menu.Item className="subnavbar-text">
                        <Link to="/">LIVE</Link>
                        {pathname === '/' ? BreakLine() : null}
                    </Menu.Item>
                    <Menu.Item className="subnavbar-text">
                        <Link to="/dashboard-schedule">SCHEDULE</Link>
                        {pathname === '/dashboard-schedule' ? BreakLine() : null}
                    </Menu.Item>
                    <Menu.Item className="subnavbar-text">
                        <Link
                            to={{
                                pathname: '/dashboard',
                                hash: '',
                                state: { fromDashboard: true },
                            }}
                        >
                            PRIZES
                        </Link>
                        {pathname === '/dashboard-prizes' ? BreakLine() : null}
                    </Menu.Item>
                </Menu.Items>
            </Menu.Wrapper>
        </Styles.Wrapper>
    );
};

const Styles = {
    Wrapper: styled.header`
        display: flex;
        background-color: #F0F0F3;
        height: auto;
        color: #F0F0F3;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    Items: styled.ul`
        display: flex;
        width: 100%;
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
        flex-grow: 1;
        padding: 0 3rem;
        cursor: pointer;
        text-align: center;

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
            background-color: #ffb181;
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

export default SubNavbar;
