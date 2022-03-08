import React, { ReactNode } from 'react';
import {
  Box,
  chakra,
  VisuallyHidden,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import txAdminLogo from '../../public/txadmin.png';

import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { ThirdPartyURLs } from '../../config/config';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader: React.FC = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color='text.primary'>
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {
  return (
    <Box bg={'bg.darkest'} color={'gray.200'} mx={5}>
      <Container as={Stack} maxW={{ base: 'container.lg', lg: 'container.xl' }} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image
                alt={'TXAdmin Logo'}
                src={txAdminLogo}
                color={'text.secondary'}
                height={30}
                width={150}
              />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Instagram'} href={ThirdPartyURLs.instagram}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Discord'} href={ThirdPartyURLs.discord}>
                <FaDiscord />
              </SocialButton>
            </Stack>
            <Stack fontSize={'xs'}>
              <Text color='text.secondary'>Copyright © 2019-2021 André Tabarra</Text>
              <Text color='text.secondary'>
                txAdmin is licensed under the MIT License
              </Text>
              <Text color='text.secondary'>Original Design by Noodles#1234</Text>
            </Stack>
          </Stack>
          <Stack align={'flex-start'} color='text.secondary'>
            <ListHeader>txAdmin</ListHeader>
            <Link href={ThirdPartyURLs.githubLink}>GitHub Repository</Link>
            <Link href={ThirdPartyURLs.documentationPage}>Documentation</Link>
            <Link href={ThirdPartyURLs.discord}>Discord</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
