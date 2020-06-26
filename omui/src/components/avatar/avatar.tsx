import React from 'react';
import { Avatar as ChakraAvatar, AvatarBadge } from '@chakra-ui/core';

interface AvatarProps {
  badge?: string;
}

export const Avatar = ({ badge, ...props }: AvatarProps) => (
  <ChakraAvatar {...props}>
    {badge && <AvatarBadge bg={`${badge}.500`} />}
  </ChakraAvatar>
);

Avatar.defaultProps = {
  size: 'md'
};

export { AvatarGroup } from '@chakra-ui/core';
