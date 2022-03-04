import React from 'react';
import { Box, Grid, GridItem, HStack, Icon, Text } from '@chakra-ui/react';
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
  return (
    <Grid
      gridTemplateRows={'repeat(3, 1fr)'}
      gridTemplateColumns={'repeat(3, 1fr)'}
      gap={5}
    >
      <GridItem gridColumn={1} gridColumnEnd={1}>
        <StatsCard
          lastRefreshed={'22m ago'}
          cardIcon={<FaChartLine />}
          cardTitle='Total Transactions'
          value={32000}
        />
      </GridItem>
      <GridItem>
        <StatsCard
          lastRefreshed={'22m ago'}
          cardIcon={<FaChartLine />}
          cardTitle='Total Bans'
          value={50000}
        />
      </GridItem>
      <GridItem>
        <StatsCard
          lastRefreshed={'22m ago'}
          cardIcon={<FaChartLine />}
          cardTitle='Total Bans'
          value={90000}
        />
      </GridItem>
      <GridItem>
        <StatsCard
          lastRefreshed={'22m ago'}
          cardIcon={<FaChartLine />}
          cardTitle='Total Bans'
          value={80000}
        />
      </GridItem>
      <GridItem
        gridColumnStart={2}
        gridColumnEnd={4}
        gridRowStart={2}
        gridRowEnd={4}
        maxH={300}
      >
        <Box rounded='xl' boxShadow='xl' bg={'bg.light'} p={5} height='100%' w='100%'>
          <HStack spacing={3} mb={3}>
            <Icon as={FaChartLine} w={25} h={25} color={'primary.main'} />
            <Text fontSize='lg' color='text.secondary' fontWeight='300'>
              Some Graph
            </Text>
          </HStack>
          <ResponsiveContainer>
            <LineChart
              data={getFakeData(30)}
              margin={{
                top: 15,
                right: 30,
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
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </GridItem>
      <GridItem>
        <StatsCard
          lastRefreshed={'22m ago'}
          cardIcon={<FaChartLine />}
          cardTitle='Total Bans'
          value={90000}
        />
      </GridItem>
    </Grid>
  );
};
