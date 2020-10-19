import React from 'react';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';

import { LoaderBlock, LoaderCircle, LoaderText } from './';
import { Text, Image } from '../../';
import sizes from '../../theme/foundations/sizes';

export default { title: 'Components/Loader', decorators: [withKnobs] };

export const Default = () => (
  <LoaderBlock
    speed={number('Speed (ms)', 800, { min: 1, step: 0.1 }) / 1000}
    isLoaded={boolean('Is loaded?', false)}
  >
    <Text>
      I am just a simple content block, notice how it fills the height of the
      content underneath!
    </Text>
    <Image
      src="https://www.openmined.org/images/logo.png"
      boxSize="lg"
      alt="Logo"
      mt={2}
    />
  </LoaderBlock>
);

export const AvatarAndParagraph = () => (
  <>
    <LoaderCircle size={select('Avatar Size', Object.keys(sizes), '12')} />
    <LoaderText
      mt={6}
      noOfLines={number('Number of lines', 4, { min: 1, max: 10, step: 1 })}
      spacing={select('Spacing', Object.keys(sizes), '4')}
    />
  </>
);
