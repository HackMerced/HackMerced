import { storiesOf } from "@storybook/react";
import * as React from "react";

import { FAQData } from "../assets/faq";
import { mockData } from "../assets/mockData";
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
