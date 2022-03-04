import { NextPage } from 'next';
import { Box, Center, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { MainNavBar } from '../components/NavBar/MainNavBar';
import Reveal from 'react-awesome-reveal';
import { slideLeft, slideRight } from '../styles/keyframes';
import { SnailySvg } from '../components/misc/SnailySvg';
import { StatisticsPageHeader } from '../components/txTracker/StatisticsPageHeader';
import React from 'react';
import { TabControls } from '../components/txTracker/TabControls';
import { StatsGrid } from '../components/txTracker/StatsGrid';

const StatisticsPage: NextPage = () => {
  return (
    <Flex bg='bg.dark' justifyContent='center' minHeight={'fit-content'}>
      <MainNavBar />
      <Box p={5}>
        <StatisticsPageHeader />
        <TabControls />
        <StatsGrid />
      </Box>
    </Flex>
  );
};

export default StatisticsPage;
