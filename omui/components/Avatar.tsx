import React from "react";
import { Avatar as ChakraAvatar, IAvatar, AvatarBadge } from "@chakra-ui/core";
import { Box } from "./Box";

interface AvatarProps extends IAvatar {
  badge?: string; // we should have a list of valid colors here... don't know where to import from
}

export const Avatar = (props: AvatarProps) => {
  return (
    <ChakraAvatar {...props}>
      {props.badge && <AvatarBadge bg={props.badge} size="1em" />}
    </ChakraAvatar>
  );
};
