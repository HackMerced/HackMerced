import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withA11y);
addDecorator(centered);
addDecorator(withKnobs);
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'responsive',
    },
});

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
