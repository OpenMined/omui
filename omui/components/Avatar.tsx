import React from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarGroup as ChakraAvatarGroup,
  IAvatar,
  AvatarBadge
} from '@chakra-ui/core';

interface AvatarProps extends IAvatar {
  badge?: string;
}

export const Avatar = ({ badge, ...props }: AvatarProps) => (
  <ChakraAvatar {...props}>
    {badge && <AvatarBadge bg={badge} size="1em" />}
  </ChakraAvatar>
);

Avatar.defaultProps = {
  size: 'md'
};

export const AvatarGroup = ChakraAvatarGroup;
