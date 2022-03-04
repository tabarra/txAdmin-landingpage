import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { slideLeft, slideRight } from '../../styles/keyframes';
import { SnailySvg } from '../misc/SnailySvg';

export const StatisticsPageHeader: React.FC = () => (
  <Grid
    pt='10vh'
    w={{ sm: '90vw', md: '80vw', lg: '70vw' }}
    gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
    gridGap='20px'
  >
    <GridItem gridColumn={{ sm: '1/1', md: '1/3' }} px={4}>
      <Reveal keyframes={slideRight} triggerOnce fraction={0.3}>
        <Text fontSize={'5xl'} color='white' fontStyle={'italic'}>
          txStatistics Thing™
        </Text>
        <Text color='text.secondary' fontSize={'lg'} mt={5}>
          Lorem ipsum dolor sit amet,{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-yellow-600'>
            gold thing
          </span>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-300 to-green-500'>
            better
          </span>
          , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </Reveal>
    </GridItem>
    <GridItem display='flex' justifyContent='center'>
      <Reveal keyframes={slideLeft} triggerOnce fraction={0.3}>
        <div className='bg-snaily flex items-center w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover'>
          <SnailySvg />
        </div>
      </Reveal>
    </GridItem>
  </Grid>
);
