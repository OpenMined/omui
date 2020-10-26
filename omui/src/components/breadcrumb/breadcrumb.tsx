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

export const Breadcrumb = ({
  links,
  colorScheme,
  ...props
}: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb
      fontWeight="medium"
      spacing="2"
      separator={<ChevronRightIcon color={`${colorScheme}.400`} mt="-2px" />}
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
                color={`${colorScheme}.500`}
                _hover={{ color: `{colorScheme}.700` }}
              >
                {title}
              </Link>
            )}
            {isCurrentPage && (
              <Link
                {...link}
                color={`${colorScheme}.800`}
                _hover={{ color: 'inherit' }}
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
