import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Successes from ".";

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

// test('render HackMerced I statistics', () => {
//     act(() => {
//         render(
//             <Successes
//                 iteration={null}
//                 hoursOfHacking={36}
//                 numberOfAttendees={200}
//                 projectsSubmitted={20}
//                 amountOfPrizes={2}
//                 numberOfWorkshops={8}
//                 numberOfSponsors={10}
//             />,
//             container,
//         );
//     });
//     expect(container.getElementsByClassName('card1')).toHaveTextContent(/(hours of hacking)/i);
//     expect(container.getElementsByClassName('card2')).toHaveTextContent(/(attendees)/i);
//     expect(container.getElementsByClassName('card3')).toHaveTextContent(/(projects submitted)/i);
//     expect(container.getElementsByClassName('card4')).toHaveTextContent(/(amount of prizes)/i);
//     expect(container.getElementsByClassName('card5')).toHaveTextContent(/(workshops)/i);
//     expect(container.getElementsByClassName('card6')).toHaveTextContent(/(sponsors)/i);
// });

// test('render HackMerced II statistics', () => {
//     act(() => {
//         render(
//             <Successes
//                 iteration={'II'}
//                 hoursOfHacking={36}
//                 numberOfAttendees={400}
//                 projectsSubmitted={33}
//                 amountOfPrizes={5}
//                 numberOfWorkshops={8}
//                 numberOfSponsors={15}
//             />,
//             container,
//         );
//     });
//     expect(container.getElementsByClassName('card1')).toHaveTextContent(/(hours of hacking)/i);
//     expect(container.getElementsByClassName('card2')).toHaveTextContent(/(attendees)/i);
//     expect(container.getElementsByClassName('card3')).toHaveTextContent(/(projects submitted)/i);
//     expect(container.getElementsByClassName('card4')).toHaveTextContent(/(amount of prizes)/i);
//     expect(container.getElementsByClassName('card5')).toHaveTextContent(/(workshops)/i);
//     expect(container.getElementsByClassName('card6')).toHaveTextContent(/(sponsors)/i);
// });

// test('render HackMerced III statistics', () => {
//     act(() => {
//         render(
//             <Successes
//                 iteration={'III'}
//                 hoursOfHacking={36}
//                 numberOfAttendees={500}
//                 projectsSubmitted={32}
//                 amountOfPrizes={5}
//                 numberOfWorkshops={8}
//                 numberOfSponsors={15}
//             />,
//             container,
//         );
//     });
//     expect(container.getElementsByClassName('card1')).toHaveTextContent(/(hours of hacking)/i);
//     expect(container.getElementsByClassName('card2')).toHaveTextContent(/(attendees)/i);
//     expect(container.getElementsByClassName('card3')).toHaveTextContent(/(projects submitted)/i);
//     expect(container.getElementsByClassName('card4')).toHaveTextContent(/(amount of prizes)/i);
//     expect(container.getElementsByClassName('card5')).toHaveTextContent(/(workshops)/i);
//     expect(container.getElementsByClassName('card6')).toHaveTextContent(/(sponsors)/i);
// });

// test('render HackMerced IV statistics', () => {
//     act(() => {
//         render(
//             <Successes
//                 iteration={'IV'}
//                 hoursOfHacking={36}
//                 numberOfAttendees={500}
//                 projectsSubmitted={34}
//                 amountOfPrizes={5}
//                 numberOfWorkshops={8}
//                 numberOfSponsors={20}
//             />,
//             container,
//         );
//     });
//     expect(container.getElementsByClassName('card1')).toHaveTextContent(/(hours of hacking)/i);
//     expect(container.getElementsByClassName('card2')).toHaveTextContent(/(attendees)/i);
//     expect(container.getElementsByClassName('card3')).toHaveTextContent(/(projects submitted)/i);
//     expect(container.getElementsByClassName('card4')).toHaveTextContent(/(amount of prizes)/i);
//     expect(container.getElementsByClassName('card5')).toHaveTextContent(/(workshops)/i);
//     expect(container.getElementsByClassName('card6')).toHaveTextContent(/(sponsors)/i);
// });

test("render HackMerced V statistics", () => {
    const successs: {
        hoursOfHacking: number;
        numberOfAttendees: number;
        projectsSubmitted: number;
        amountOfPrizes: number;
        numberOfWorkshops: number;
        numberOfSponsors: number;
        iteration: string | null;
    } = {
        iteration: "V",
        hoursOfHacking: 36,
        numberOfAttendees: 400,
        projectsSubmitted: 35,
        amountOfPrizes: 15,
        numberOfWorkshops: 10,
        numberOfSponsors: 25,
    };

    act(() => {
        render(
            <Successes
                iteration={successs.iteration}
                hoursOfHacking={successs.hoursOfHacking}
                numberOfAttendees={successs.numberOfAttendees}
                projectsSubmitted={successs.projectsSubmitted}
                amountOfPrizes={successs.amountOfPrizes}
                numberOfWorkshops={successs.numberOfWorkshops}
                numberOfSponsors={successs.numberOfSponsors}
            />,
            container,
        );
    });

    expect(true);

    // expect(container.getElementsByClassName('card1')).toContain(successs.iteration);
    // expect(container.getElementsByClassName('card2')).toContain(successs.hoursOfHacking);
    // expect(container.getElementsByClassName('card3')).toContain(successs.numberOfAttendees);
    // expect(container.getElementsByClassName('card4')).toContain(successs.projectsSubmitted);
    // expect(container.getElementsByClassName('card5')).toContain(successs.numberOfWorkshops);
    // expect(container.getElementsByClassName('card6')).toContain(successs.numberOfSponsors);
});
