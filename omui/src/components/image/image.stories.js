import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

import { Image } from './';

import { largeSizes } from '../../theme/foundations/sizes';
import radii from '../../theme/foundations/radius';

export default { title: 'Primitives/Image', decorators: [withKnobs] };

export const Default = () => {
  return (
    <Image
      src={text('Source', 'https://www.openmined.org/images/logo.png')}
      boxSize={select('Size', Object.keys(largeSizes), 'xs')}
      borderRadius={select('Border radius', Object.keys(radii), 'none')}
      alt={text('Title', 'My Image')}
    />
  );
};

export const WithFallback = () => {
  return (
    <Image
      src={text('Source', 'https://www.openmined.org/images/logo.xxx')}
      fallbackSrc={text('Fallback source', 'https://via.placeholder.com/400')}
      boxSize={select('Size', Object.keys(largeSizes), 'xs')}
      borderRadius={select('Border radius', Object.keys(radii), 'none')}
      alt={text('Title', 'My Image')}
    />
  );
};

export const WithRatio = () => {
  const standardRatio = select(
    'Aspect ratio',
    ['square', 'display', 'widescreen', 'custom'],
    'widescreen'
  );
  const customRatio =
    standardRatio === 'custom'
      ? number('Custom (width / height)', 4 / 3)
      : null;

  return (
    <Image
      src={text('Source', 'https://www.openmined.org/images/logo.png')}
      borderRadius={select('Border radius', Object.keys(radii), 'none')}
      maxWidth={400}
      ratio={customRatio || standardRatio}
      alt={text('Title', 'My Image')}
    />
  );
};
