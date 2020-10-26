import React from 'react';
import {
  Image as ChakraImage,
  AspectRatio,
  ImageProps as IChakraImageProps
} from '@chakra-ui/core';

import { convertRatios } from '../../helpers/ratios';
import { themeBaseColors } from '../../theme/helpers';

type ImageProps = IChakraImageProps & {
  ratio?: number | string;
  fallbackColor?: typeof themeBaseColors;
};

export const Image = ({ ratio, ...props }: ImageProps) => {
  if (ratio) {
    const { ...whVars } = props;
    const ratioProps = { ...whVars };

    if (ratio) ratioProps['ratio'] = convertRatios(ratio);

    return (
      <AspectRatio {...ratioProps}>
        <ChakraImage objectFit="cover" {...props} />
      </AspectRatio>
    );
  }

  return <ChakraImage {...props} />;
};

Image.defaultProps = {
  ratio: null
};
