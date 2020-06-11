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

  return (
    <AspectRatioBox ratio={convertRatios(ratio)} {...props}>
      <Box {...videoEmbedProps} />
    </AspectRatioBox>
  );
};

VideoEmbed.defaultProps = {
  ratio: 'normal'
};

export const MapEmbed = ({ ratio, title, src, ...props }: EmbedProps) => {
  const mapEmbedProps: object = {
    as: 'iframe',
    alt: title,
    src
  };

  return (
    <AspectRatioBox ratio={convertRatios(ratio)} {...props}>
      <Box {...mapEmbedProps} />
    </AspectRatioBox>
  );
};

MapEmbed.defaultProps = {
  ratio: 'normal'
};
