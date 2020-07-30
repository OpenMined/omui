import React from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarBadge,
  AvatarProps as IAvatarProps
} from '@chakra-ui/core';

import { colors } from '../../theme/foundations/colors';

type AvatarProps = IAvatarProps & {
  badge?: keyof typeof colors;
};

export const Avatar = ({ badge, ...props }: AvatarProps) => (
  <ChakraAvatar {...props}>
    {badge && <AvatarBadge boxSize="1em" bg={`${badge}.500`} />}
  </ChakraAvatar>
);

export { AvatarGroup } from '@chakra-ui/core';
