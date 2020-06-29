import React from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  LinkProps
} from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Link } from '../link/link';

interface BreadcrumbProps {
  links: object[];
}

export const Breadcrumb = ({ links, ...props }: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb
      fontWeight="medium"
      spacing="2"
      separator={<ChevronRightIcon color="gray.400" mt="-2px" />}
      {...props}
    >
      {links.map(({ href, title, ...link }: LinkProps, index) => {
        const isCurrentPage = index === links.length - 1;

        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={title}>
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
              <Link
                {...link}
                color="black"
                _hover={{ color: 'black' }}
                cursor="default"
              >
                {title}
              </Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};
