import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Text } from './';
import { Box } from '../../';

import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights
} from '../../theme/foundations/typography';

export default { title: 'Primitives/Text', decorators: [withKnobs] };

// Constants
const themeFontFamilies = Object.keys(fonts);
const themeFontSizes = Object.keys(fontSizes);
const themeFontWeights = Object.keys(fontWeights);
const themeLetterSpacings = Object.keys(letterSpacings);
const themeLineHeights = Object.keys(lineHeights);

export const Default = () => (
  <Box width={400} p={4} bg="gray.100">
    <Text
      fontFamily={select('Family', themeFontFamilies, 'body')}
      fontSize={select('Size', themeFontSizes, 'md')}
      fontWeight={select('Weight', themeFontWeights, 'normal')}
      letterSpacing={select('Letter spacing', themeLetterSpacings, 'normal')}
      lineHeight={select('Line height', themeLineHeights, 'base')}
      color={select('Color', themeAllPossibleColors, 'black')}
      isTruncated={boolean('Truncate text?', true)}
    >
      {text('Text', 'Got me some good ole text!')}
    </Text>
  </Box>
);

export const Inline = () => (
  <Text as="span">
    I really like to eat{' '}
    <Text as="span" fontWeight="bold">
      {text('Text', 'eggs and bacon')}
    </Text>{' '}
    in the morning.
  </Text>
);

export const Paragraphs = () => {
  const content = `I'm baby shaman kogi man braid, pitchfork coloring book 3 wolf moon literally adaptogen single-origin coffee retro. Hella bespoke kombucha copper mug, vice whatever crucifix flannel franzen neutra enamel pin fashion axe af put a bird on it. Snackwave hexagon fingerstache four dollar toast cred palo santo biodiesel affogato. Fixie live-edge brooklyn gastropub, seitan kitsch pinterest godard tilde chartreuse. Subway tile quinoa palo santo copper mug vice hoodie. Biodiesel man braid hexagon drinking vinegar locavore. Fingerstache before they sold out tumeric tote bag microdosing green juice drinking vinegar photo booth bitters vexillologist chillwave lo-fi.`;
  const lineHeight = select('Line height', themeLineHeights, 'base');

  return (
    <Box>
      <Text mb={4} lineHeight={lineHeight}>
        {content}
      </Text>
      <Text mb={4} lineHeight={lineHeight}>
        {content}
      </Text>
      <Text mb={4} lineHeight={lineHeight}>
        {content}
      </Text>
    </Box>
  );
};
