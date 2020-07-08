import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Successes from './Successes';

storiesOf('Successes', module)
    .add('HackMerced I', () => (
        <Successes
            iteration={null}
            hoursOfHacking={36}
            numberOfAttendees={200}
            projectsSubmitted={20}
            amountOfPrizes={2}
            numberOfWorkshops={8}
            numberOfSponsors={10}
        />
    ))
    .add('HackMerced II', () => (
        <Successes
            iteration={'II'}
            hoursOfHacking={36}
            numberOfAttendees={400}
            projectsSubmitted={33}
            amountOfPrizes={5}
            numberOfWorkshops={8}
            numberOfSponsors={15}
        />
    ))
    .add('HackMerced III', () => (
        <Successes
            iteration={'III'}
            hoursOfHacking={36}
            numberOfAttendees={500}
            projectsSubmitted={32}
            amountOfPrizes={5}
            numberOfWorkshops={8}
            numberOfSponsors={15}
        />
    ))
    .add('HackMerced IV', () => (
        <Successes
            iteration={'IV'}
            hoursOfHacking={36}
            numberOfAttendees={500}
            projectsSubmitted={34}
            amountOfPrizes={5}
            numberOfWorkshops={8}
            numberOfSponsors={20}
        />
    ))
    .add('HackMerced V', () => (
        <Successes
            iteration={'V'}
            hoursOfHacking={36}
            numberOfAttendees={400}
            projectsSubmitted={35}
            amountOfPrizes={15}
            numberOfWorkshops={10}
            numberOfSponsors={25}
        />
    ));
