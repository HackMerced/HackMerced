import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// HackMerced I
import MLHBANNER from '../../assets/images/mlh-badge.svg';

import Navbar from './navbar';

let container: HTMLDivElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

test('check if images load for HackMerced I', () => {
    act(() => {
        render(<Navbar />, container);
    });

    expect(container.getElementsByClassName('MLH')).toHaveAttribute('src', MLHBANNER);
});

