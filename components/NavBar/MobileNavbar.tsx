import React, { useState } from 'react';
import { Flex, Stack, Icon, Collapse, Text, useDisclosure } from '@chakra-ui/react';
import { noop } from '@chakra-ui/utils';
import { FiChevronDown } from 'react-icons/fi';
import { NavbarItemData, NavbarItems } from '../../config/config';
import { useRouter } from 'next/router';
import { ChakraNextLink } from '../misc/NextLink';

export const MobileNavbarItem: React.FC<NavbarItemData> = ({
  subLabel,
  href,
  subMenuChildren,
  label,
  icon,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { pathname } = useRouter();

  const currentPageIsPath = pathname === href;

  const linkColor = currentPageIsPath ? 'text.primary' : 'text.secondary';

  return (
    <Stack spacing={4} onClick={subMenuChildren ? onToggle : noop}>
      <Flex
        py={2}
        as='a'
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text color={linkColor} fontWeight={currentPageIsPath ? 'bold' : 'unset'}>
          {label}
        </Text>
        {subMenuChildren && (
          <Icon
            as={FiChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}
        >
          {subMenuChildren &&
            subMenuChildren.map((child) => (
              <ChakraNextLink
                key={child.label}
                py={2}
                href={child.href}
                color={'text.secondary'}
              >
                {child.label}
              </ChakraNextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export const MobileNavbar: React.FC = ({}) => (
  <Stack>
    <MobileNavbarItem label={'Home'} href={'/'} key={'home'} />
    {NavbarItems.map(({ label, href, subMenuChildren, subLabel }) => (
      <MobileNavbarItem
        href={href}
        label={label}
        key={label}
        subLabel={subLabel}
        subMenuChildren={subMenuChildren}
      />
    ))}
  </Stack>
);
