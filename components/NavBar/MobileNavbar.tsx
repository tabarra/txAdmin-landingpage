import React from 'react';
import {
  Flex,
  Stack,
  useColorModeValue,
  useDisclosure,
  Icon,
  Collapse,
  Text,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { noop } from '@chakra-ui/utils';
import { FiChevronDown } from 'react-icons/fi';
import { NavbarItemData, NavbarItems } from '../../config/config';
import { useRouter } from 'next/router';

export const MobileNavbarItem: React.FC<NavbarItemData> = ({
  children,
  href,
  label,
  icon,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { pathname } = useRouter();

  const currentPageIsPath = pathname === href;

  const linkColor = currentPageIsPath ? 'text.primary' : 'text.secondary';

  return (
    <Stack spacing={4} onClick={children ? onToggle : noop}>
      <Flex
        py={2}
        as='a'
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text color={linkColor} fontWeight={currentPageIsPath ? 'bold' : 'unset'}>
          {label}
        </Text>
        {children && (
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
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} as={NextLink}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export const MobileNavbar: React.FC = ({}) => (
  <Stack>
    <MobileNavbarItem label={'Home'} href={'/'} key={'home'} />
    {NavbarItems.map(({ label, href }) => (
      <MobileNavbarItem href={href} label={label} key={label} />
    ))}
  </Stack>
);
