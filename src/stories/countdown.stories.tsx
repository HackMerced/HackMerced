import { storiesOf } from "@storybook/react";
import * as React from "react";

import Countdown from "../components/Countdown";

storiesOf("Countdown", module).add(
    "example Countdown timer",
    (): JSX.Element => {
        return <Countdown destination={"2021-03-06T20:00:00.000Z"} />;
    },
);
