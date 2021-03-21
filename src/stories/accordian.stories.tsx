import { storiesOf } from "@storybook/react";
import * as React from "react";

import { FAQData, mockData } from "../assets/data";
import Accordian from "../components/Accordian";

storiesOf("Accordian", module)
    .add(
        "with mock data",
        (): JSX.Element => {
            return <Accordian data={mockData} />;
        },
    )
    .add(
        "with the actual DesignMerced FAQ",
        (): JSX.Element => {
            return <Accordian data={FAQData} />;
        },
    );
