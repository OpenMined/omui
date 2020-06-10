import React from 'react';
import { AspectRatioBox } from '@chakra-ui/core';
import { Box } from './Box';
import { convertRatios } from '../helpers/ratios';

export const VideoEmbed = ({ ratio, title, src, ...props }) => (
  <AspectRatioBox ratio={convertRatios(ratio)} {...props}>
    <Box as="iframe" title={title} src={src} allowFullScreen />
  </AspectRatioBox>
);

VideoEmbed.defaultProps = {
  ratio: 'normal',
};

export const MapEmbed = ({ ratio, title, src, ...props }) => (
  <AspectRatioBox ratio={convertRatios(ratio)} {...props}>
    <Box as="iframe" alt={title} src={src} />
  </AspectRatioBox>
);

MapEmbed.defaultProps = {
  ratio: 'normal',
};
