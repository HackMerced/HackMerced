import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Navbar from './navbar';

storiesOf('NavBar', module).add('Base Navbar', () => {
    return <Navbar />;
});
