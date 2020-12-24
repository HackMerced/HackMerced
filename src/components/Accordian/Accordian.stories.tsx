import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { FAQData, mockData } from './data';
import Accordian from './Accordian';

storiesOf('Accordian', module)
    .add(
        'with mock data',
        (): JSX.Element => {
            return <Accordian data={mockData} />;
        },
    )
    .add(
        'with the actual DesignMerced FAQ',
        (): JSX.Element => {
            return <Accordian data={FAQData} />;
        },
    );
