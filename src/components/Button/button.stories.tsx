import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from '.';

storiesOf('Button', module)
    .addDecorator(checkA11y)
    .add('with text', () => <Button>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button styles={{ backgroundColor: 'red', color: 'darkRed' }}>
            <span role="img">😀 😎 👍 💯</span>
        </Button>
    ));
