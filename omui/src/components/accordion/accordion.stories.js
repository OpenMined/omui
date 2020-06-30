import React from 'react';
import { Text } from '@chakra-ui/core';

import { Accordion, AccordionItem } from './';

export default { title: 'Components/Accordion' };

export const Default = () => (
  <Accordion>
    <AccordionItem title="First section">
      There once was a man named Sue
    </AccordionItem>
    <AccordionItem title="Second section">
      <Text>
        Who knew just what{' '}
        <Text as="span" fontWeight="bold">
          not
        </Text>{' '}
        to do
      </Text>
    </AccordionItem>
  </Accordion>
);

export const Multiple = () => (
  <Accordion allowMultiple>
    <AccordionItem title="First section">
      We can both be opened...
    </AccordionItem>
    <AccordionItem title="Second section">Simultaneously!</AccordionItem>
  </Accordion>
);

export const Toggle = () => (
  <Accordion allowToggle>
    <AccordionItem title="First section">I can be collapsed</AccordionItem>
    <AccordionItem title="Second section">
      So can I... but only one of us can be open.
    </AccordionItem>
  </Accordion>
);

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
