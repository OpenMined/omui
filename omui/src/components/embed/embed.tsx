import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/core';

import { Box } from '../box';
import { convertRatios } from '../../helpers/ratios';

type EmbedProps = AspectRatioProps & {
  ratio?: number | string;
  title: string;
  src: string;
  coverImage: string;
};

export const VideoEmbed = ({
  ratio,
  title,
  coverImage,
  src,
  ...props
}: EmbedProps) => {
  const videoEmbedProps: object = {
    as: 'iframe',
    title,
    src,
    allowFullScreen: true,
    style: {
      background: `url(${coverImage})`
    }
  };

  if (ratio) props['ratio'] = convertRatios(ratio);

  return (
    <AspectRatio {...props}>
      <Box {...videoEmbedProps} />
    </AspectRatio>
  );
};

VideoEmbed.defaultProps = {
  ratio: null
};

export const MapEmbed = ({ ratio, title, src, ...props }: EmbedProps) => {
  const mapEmbedProps: object = {
    as: 'iframe',
    alt: title,
    src
  };

  if (ratio) props['ratio'] = convertRatios(ratio);

  return (
    <AspectRatio {...props}>
      <Box {...mapEmbedProps} />
    </AspectRatio>
  );
};

MapEmbed.defaultProps = {
  ratio: null
};
