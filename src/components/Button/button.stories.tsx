import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
    .add('with text', (): JSX.Element => {
        const name = text('Name', 'James');
        const age = number('Age', 35);
        const content = `I am ${name} and I'm ${age} years old.`;

        return <Button onClick={action('btn-click')}>{content}</Button>;
    })
    .add('disabled', ():JSX.Element => (
        <Button onClick={action('btn-click')} disabled={boolean('Disabled', true)}>
            Disabled
        </Button>
    ))
    .add('with some emoji', (): JSX.Element => (
        <Button onClick={action('btn-click')} styles={{ backgroundColor: 'red', color: 'darkRed' }}>
            <span role="img">😀 😎 👍 💯</span>
        </Button>
    ));
