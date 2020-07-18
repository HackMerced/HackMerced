import React from 'react';

import { StyledHamburger } from './Hamburger.styled';

export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
    <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
    </StyledHamburger>
);

export default Hamburger;
