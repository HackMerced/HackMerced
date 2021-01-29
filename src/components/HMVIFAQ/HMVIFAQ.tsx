import React, { FC } from 'react';

import { FAQData } from '../Accordian/data';
import Accordian from '../Accordian/Accordian';
import './HMVIFAQ.scss';

const HMVIFAQ: FC = () => {
    return (
        <section className="hackmercedvi-faq">
            <h2 className="hackmerced-faq__title">Frequently Asked Questions</h2>
            <Accordian data={FAQData} />
        </section>
    );
};

export default HMVIFAQ;