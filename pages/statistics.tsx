import { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import NavBar from '../components/layout/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";

import { StatisticsPageHeader } from '../components/txTracker/StatisticsPageHeader';
import React from 'react';
import { TabControls } from '../components/txTracker/TabControls';
import { StatsGrid } from '../components/txTracker/StatsGrid';

const StatisticsPage: NextPage = () => {
  return (
    <>
    <ChakraProvider theme={theme}>
    <NavBar />
    <Flex bg='bg.dark' justifyContent='center' minHeight={'fit-content'}>
      <Box p={5} maxW={{ sm: 'container.md', lg: 'container.xl' }}>
        <StatisticsPageHeader />
        <RecoilRoot>
        <TabControls />
        </RecoilRoot>
        <StatsGrid />
      </Box>
    </Flex>
    </ChakraProvider>
    </>
  );
};

export default StatisticsPage;