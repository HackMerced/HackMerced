import { storiesOf } from "@storybook/react";
import * as React from "react";

import Navbar from "../components/NavBar";

storiesOf("NavBar", module)
    .add("Base Navbar", () => {
        return <Navbar />;
    })
    .add("Navbar with Different Background Color", () => {
        return <Navbar backgroundColor="#EEEBF5" />;
    });
