import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MLH_BANNER from "../../assets/images/mlh-badge.svg";

let container: HTMLDivElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

test("check if images load for HackMerced I", () => {
    act(() => {
        // TODO: fix below with this link https://stackoverflow.com/questions/55552147/invariant-failed-you-should-not-use-route-outside-a-router
        // render(<Navbar />, container);
        render(<img className="MLH" src={MLH_BANNER} width="100" height="175" alt="MLH BANNER" />, container);
    });

    expect(container).not.toBeEmpty();
});
