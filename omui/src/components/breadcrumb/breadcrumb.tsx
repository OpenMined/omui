import React from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  LinkProps as ILinkProps,
  BreadcrumbProps as IBreadcrumbProps
} from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Link } from '../link';

type LinkProps = ILinkProps & {
  title: string;
  href: string;
};

type BreadcrumbProps = IBreadcrumbProps & {
  links: LinkProps[];
};

const Breadcrumb = ({ links, children, ...props }: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb
      fontWeight="medium"
      spacing="2"
      separator={<ChevronRightIcon color="gray.400" mt="-2px" />}
      {...props}
    >
      {links
        ? links.map(({ href, title, ...link }: LinkProps, index) => {
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
                    color="gray.900"
                    _hover={{ color: 'inherit' }}
                    cursor="default"
                  >
                    {title}
                  </Link>
                )}
              </BreadcrumbItem>
            );
          })
        : children}
    </ChakraBreadcrumb>
  );
};

export { Breadcrumb, BreadcrumbItem };
