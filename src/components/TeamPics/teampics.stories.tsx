import { storiesOf } from '@storybook/react';
import * as React from 'react';

import TeamPics from './teampics';

storiesOf('TeamPics', module)
    .add('Aligned Team Pics', () => {
        return <TeamPics />
    });
