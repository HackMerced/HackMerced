import React, { FC } from "react";

import Accordian from "../../components/Accordian";
import { FAQData } from "../../assets/faq";
import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return (
        <main className="LHDFAQ">
            <section className="LHD__faq">
                <h2 className="LHD__faq__title">Frequently Asked Questions</h2>
                <Accordian data={FAQData} />
            </section>
        </main>
    );
};

export default LearnDay;