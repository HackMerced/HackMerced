import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Form from './Form';

storiesOf('Form', module)
    .add('contact us', () => <Form formTitle="Contact Us" askCompany={false} formRequest="contact" />)
    .add('sponsor us', () => <Form formTitle="Sponsor Us" askCompany={true} formRequest="sponsor" />);
