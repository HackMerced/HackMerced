import { storiesOf } from "@storybook/react";
import * as React from "react";

import PastWinners from "../components/PastWinners";

storiesOf("PastWinners", module).add("Hexagonal Past Winners", () => {
    return <PastWinners />;
});
