import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { StatsCard } from './StatsCard';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  Legend,
} from 'recharts';

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getFakeData = (num: number) => {
  const data = [];

  for (let i = 0; i <= num; i++) {
    data.push({
      amnt: Math.floor(Math.random() * 100),
      time: randomDate(new Date(2018, 0, 1), new Date()).getDate(),
    });
  }

  return data;
};

const fakeTxData = [
  {
    time: '30/01/2020',
    amnt: 32000,
  },
];

export const StatsGrid: React.FC = () => {
  const { colors } = useTheme();

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
      <GridItem
        gridColumnStart={1}
        gridColumnEnd={{ base: 2, md: 4 }}
        maxH={{ base: 300, md: 400 }}
      >
        <Box rounded='xl' boxShadow='xl' bg={'bg.light'} p={5} height='100%' w='100%'>
          <HStack spacing={3} mb={3}>
            <Icon as={FaChartLine} w={25} h={25} color={'primary.main'} />
            <Text fontSize='lg' color='text.secondary' fontWeight='300'>
              Overview Graph
            </Text>
          </HStack>
          <ResponsiveContainer height='95%'>
            <LineChart
              data={getFakeData(30)}
              margin={{
                top: 10,
                right: 20,
                left: 5,
                bottom: 5,
              }}
            >
              <XAxis dataKey='time' name='Time' />
              <Tooltip />
              {/*<CartesianGrid stroke='#f5f5f5' />*/}
              <YAxis dataKey='amnt' />
              <Legend />
              <Line
                type='monotone'
                dataKey='amnt'
                stroke={colors.primary.main}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </GridItem>
      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Transactions'
        value={32000}
      />
      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Bans'
        value={50000}
      />
      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Bans'
        value={90000}
      />
      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Bans'
        value={80000}
      />

      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Bans'
        value={90000}
      />
      <StatsCard
        lastRefreshed={'22m ago'}
        cardIcon={<FaChartLine />}
        cardTitle='Total Bans'
        value={90000}
      />
    </SimpleGrid>
  );
};
