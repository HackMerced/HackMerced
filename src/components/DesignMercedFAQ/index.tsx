import React, { FC } from "react";

import { FAQData } from "../../stories/data";
import Accordian from "../Accordian";
import "./styles.scss";

const DesignMercedFAQ: FC = () => {
    return (
        <section className="designmerced-faq">
            <h2 className="designmerced-faq__title">Frequently Asked Questions</h2>
            <Accordian data={FAQData} />
        </section>
    );
};

export default DesignMercedFAQ;
