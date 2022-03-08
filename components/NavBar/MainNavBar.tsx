import React from 'react';
import { Box, Flex, useColorModeValue, IconButton } from '@chakra-ui/react';
import { DesktopNavbar } from './DesktopNavBar';
import Image from 'next/image';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import txAdminLogo from '../../public/txadmin.png';
import { useNavbarDrawerCtx } from './NavbarDrawerProvider';
import { useRouter } from 'next/router';

interface MainNavBarProps {
  hasBackground?: boolean;
}

export const MainNavBar: React.FC<MainNavBarProps> = ({ hasBackground }) => {
  const { setIsOpen } = useNavbarDrawerCtx();
  const bg = useColorModeValue('white', 'gray.800');
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Box py={3} position='absolute' width='100%'>
      <Flex
        bg={hasBackground ? bg : 'transparent'}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify='center'
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'start', md: 'center' }}
          px={2}
          maxW={{ base: 'none', md: '80%' }}
          flexGrow={1}
          align='center'
        >
          <Box flexGrow={1}>
            <Box onClick={handleGoHome}>
              <Image src={txAdminLogo} width='150px' height='30px' alt='txadmin-logo' />
            </Box>
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNavbar />
          </Flex>

          <Flex justify={'flex-end'} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              color={'text.secondary'}
              onClick={() => setIsOpen(true)}
              icon={<GiHamburgerMenu size={'1.5em'} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
