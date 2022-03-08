import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export const ChakraNextLink: React.FC<LinkProps> = ({ children, href, ...props }) => (
  // @ts-ignore
  <NextLink href={href} passHref prefetch>
    <Link {...props}>{children}</Link>
  </NextLink>
);
