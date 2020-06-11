import React from 'react';
import { AspectRatioBox } from '@chakra-ui/core';
import { Box } from './Box';
import { convertRatios } from '../helpers/ratios';

interface EmbedProps {
  ratio?: number | string;
  title: string;
  src: string;
}

export const VideoEmbed = ({ ratio, title, src, ...props }: EmbedProps) => {
  const videoEmbedProps: object = {
    as: 'iframe',
    title,
    src,
    allowFullScreen: true
  };

  if (ratio) props['ratio'] = convertRatios(ratio);

  return (
    <AspectRatioBox {...props}>
      <Box {...videoEmbedProps} />
    </AspectRatioBox>
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
    <AspectRatioBox {...props}>
      <Box {...mapEmbedProps} />
    </AspectRatioBox>
  );
};

MapEmbed.defaultProps = {
  ratio: null
};
