import React from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  LinkProps,
  BoxProps as IBreadcrumb
} from '@chakra-ui/core';
import { Icon } from './Icon';
import { Link } from './Link';
import { Text } from './Text';

interface BreadcrumbProps extends IBreadcrumb {
  links: object[];
}

export const Breadcrumb = ({ links, ...props }: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb
      fontWeight="medium"
      spacing="2"
      separator={<Icon color="gray.400" name="chevron-right" mt="-2px" />}
      {...props}
    >
      {links.map(({ href, title, ...link }: LinkProps, index) => {
        const isCurrentPage = index === links.length - 1;

        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage}>
            {!isCurrentPage && (
              <Link
                {...link}
                href={href}
                color="gray.500"
                _hover={{ color: 'gray.700' }}
              >
                {title}
              </Link>
            )}
            {isCurrentPage && (
              <Text {...link} as="span" cursor="default">
                {title}
              </Text>
            )}
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};
