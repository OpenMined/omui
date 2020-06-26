import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

import { VideoEmbed, MapEmbed } from '../..';

export default { title: 'Components/Embed', decorators: [withKnobs] };

export const Video = () => {
  const standardRatio = select(
    'Aspect ratio',
    ['square', 'display', 'widescreen', 'custom'],
    'square'
  );
  const customRatio =
    standardRatio === 'custom'
      ? number('Custom (width / height)', 4 / 3)
      : null;

  return (
    <VideoEmbed
      title={text('Title', 'Tom Misch - Disco Yes')}
      src={text('Source', 'https://www.youtube.com/embed/IMmJFD5S4NY')}
      ratio={customRatio || standardRatio}
      maxWidth={600}
    />
  );
};

export const Map = () => {
  const standardRatio = select(
    'Aspect ratio',
    ['square', 'display', 'widescreen', 'custom'],
    'square'
  );
  const customRatio =
    standardRatio === 'custom'
      ? number('Custom (width / height)', 4 / 3)
      : null;

  return (
    <MapEmbed
      title={text('Title', 'Nashville')}
      src={text(
        'Source',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206091.37549150846!2d-86.9253260999478!3d36.18655890014384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2spt!4v1591813291154!5m2!1sen!2spt'
      )}
      ratio={customRatio || standardRatio}
      maxWidth={600}
    />
  );
};
