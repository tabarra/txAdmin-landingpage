import { NextPage } from 'next';
import {
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AnimatedSnaily from '../public/txsnaily2_animated.png';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/solid';

const NotFoundPage: NextPage = () => {
  const { push } = useRouter();

  return (
    <Center
      height='100vh'
      width='100vw'
      color={'white'}
      backgroundImage={'./hero.webp'}
      px={5}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        templateColumns={{ md: '2fr 1fr', base: 'repeat(1, 1fr)' }}
        width='75%'
        m={{ sm: 5, md: 20 }}
        gap={10}
      >
        <GridItem>
          <Stack spacing={5}>
            <Text fontSize={'3xl'} fontWeight='bold'>
              404 Page not found!
            </Text>
            <Text fontSize={'lg'} maxWidth={{ lg: '50vw' }}>
              Uh oh! Looks like this page does not exist anymore or may have been moved.
              Click the button below to safely return back to the homepage.
            </Text>
            <Button
              onClick={() => push('/')}
              variant='solid'
              bg={'primary.main'}
              color={'black'}
              isFullWidth={false}
            >
              Back to safety!
              <ArrowRightIcon className='group-hover:animate-bounce-x h-6 h-6 ml-2' />
            </Button>
          </Stack>
        </GridItem>
        <GridItem>
          <Image src={AnimatedSnaily} alt='Snaily' width={300} height={300} />
        </GridItem>
      </SimpleGrid>
    </Center>
  );
};

export default NotFoundPage;
