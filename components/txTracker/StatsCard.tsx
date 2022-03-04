import React from 'react';
import { Box, HStack, Text, Icon, VStack } from '@chakra-ui/react';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import CountUp from 'react-countup';

interface StatsCardProps {
  cardTitle: string;
  cardIcon: React.ReactNode;
  lastRefreshed: string;
  value: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  cardIcon,
  cardTitle,
  lastRefreshed,
  value,
}) => {
  return (
    <Box rounded='xl' boxShadow='xl' bg={'bg.light'} p={5}>
      <VStack alignItems='flex-start'>
        <HStack spacing={3}>
          <Icon as={FaChartLine} w={25} h={25} color={'primary.main'} />
          <Text fontSize='md' color='text.secondary' fontWeight='300'>
            {cardTitle}
          </Text>
        </HStack>
        <Text fontSize='xl' fontWeight='600' color='text.primary'>
          <CountUp end={value} duration={2} separator={','} />
          <Box as='span' fontWeight={300}>
            {''} servers
          </Box>
        </Text>
        <Text fontSize='xs' color='text.secondary' fontStyle='italics' mb={-2}>
          {lastRefreshed}
        </Text>
      </VStack>
    </Box>
  );
};
