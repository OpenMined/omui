import React from 'react';
import _ from 'lodash';

import { withKnobs, number } from '@storybook/addon-knobs';
import { Accordion, AccordionItem } from './';
import { withOrdinal } from '../../docs/_helpers';

export default { title: 'Components/Accordion', decorators: [withKnobs] };

export const Default = () => {
  let numberOfItems = number('# of Items', 2, { min: 1 });

  return (
    <Accordion>
      {_.times(numberOfItems, (index) => (
        <AccordionItem title={withOrdinal(index + 1) + ' section'}>
          {index + 1 + ' Little duck(s) went out one day...'}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Multiple = () => {
  let numberOfItems = number('# of Items', 2);

  return (
    <Accordion allowMultiple>
      {_.times(numberOfItems, (index) => (
        <AccordionItem title={withOrdinal(index + 1) + ' section'}>
          Open as many as you can
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Toggle = () => {
  let numberOfItems = number('# of Items', 2);

  return (
    <Accordion allowToggle>
      {_.times(numberOfItems, (index) => (
        <AccordionItem title={withOrdinal(index + 1) + ' section'}>
          Only one of us can be open
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const WithDisabledItem = () => (
  <Accordion>
    <AccordionItem title="First section">
      I bet this item is visible
    </AccordionItem>
    <AccordionItem title="You can't click me!" isDisabled>
      Can't see me!
    </AccordionItem>
  </Accordion>
);
