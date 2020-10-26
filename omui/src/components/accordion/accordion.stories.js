import React from 'react';
import _ from 'lodash';

import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Accordion, AccordionItem } from './';
import { withOrdinal } from '../../docs/_helpers';
import {
  themeBaseColors,
  themeFontFamilies,
  themeFontSizes
} from '../../theme/helpers';

export default { title: 'Components/Accordion', decorators: [withKnobs] };

const titleWeight = () =>
  select('Title Weight', ['normal', 'medium', 'bold'], 'normal');

const titleSize = () =>
  select('Title Size', ['md', 'lg', 'xl', '2xl', '4xl'], 'md');

const titleStyle = () => select('Title Style', themeFontFamilies, 'heading');

const textSize = () => select('Text Size', themeFontSizes, 'md');

const colorScheme = () =>
  select('Color', [...themeBaseColors, 'black'], 'black');

export const Default = () => {
  const numberOfItems = number('# of Items', 2, { min: 1 });

  return (
    <Accordion
      colorScheme={colorScheme()}
      titleWeight={titleWeight()}
      titleSize={titleSize()}
      titleStyle={titleStyle()}
      textSize={textSize()}
    >
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
    <Accordion
      colorScheme={colorScheme()}
      titleWeight={titleWeight()}
      titleSize={titleSize()}
      titleStyle={titleStyle()}
      textSize={textSize()}
      allowMultiple
    >
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
    <Accordion
      colorScheme={colorScheme()}
      titleWeight={titleWeight()}
      titleSize={titleSize()}
      titleStyle={titleStyle()}
      textSize={textSize()}
      allowToggle
    >
      {_.times(numberOfItems, (index) => (
        <AccordionItem title={withOrdinal(index + 1) + ' section'}>
          Only one of us can be open
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const WithDisabledItem = () => {
  return (
    <Accordion
      colorScheme={colorScheme()}
      titleWeight={titleWeight()}
      titleSize={titleSize()}
      titleStyle={titleStyle()}
      textSize={textSize()}
    >
      <AccordionItem title="First section">
        I bet this item is visible
      </AccordionItem>
      <AccordionItem title="You can't click me!" isDisabled>
        Can't see me!
      </AccordionItem>
    </Accordion>
  );
};
