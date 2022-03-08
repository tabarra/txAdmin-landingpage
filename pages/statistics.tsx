import { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { MainNavBar } from '../components/NavBar/MainNavBar';

import { StatisticsPageHeader } from '../components/txTracker/StatisticsPageHeader';
import React from 'react';
import { TabControls } from '../components/txTracker/TabControls';
import { StatsGrid } from '../components/txTracker/StatsGrid';

const StatisticsPage: NextPage = () => {
  return (
    <Flex bg='bg.dark' justifyContent='center' minHeight={'fit-content'}>
      <MainNavBar />
      <Box p={5} maxW={{ sm: 'container.md', lg: 'container.xl' }}>
        <StatisticsPageHeader />
        <TabControls />
        <StatsGrid />
      </Box>
    </Flex>
  );
};

export default StatisticsPage;
