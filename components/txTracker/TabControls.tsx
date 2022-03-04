import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import {
  StatsPageEnum,
  useCurStatPageVal,
  useSetCurStatPage,
} from '../../state/StatsPage.state';

interface TabControlItemProps {
  label: string;
  value: number;
  isActive: boolean;
}

const TabControlItem: React.FC<TabControlItemProps> = ({ label, isActive, value }) => {
  const setStatPage = useSetCurStatPage();

  return (
    <Button
      boxShadow={isActive ? 'xl' : 'none'}
      rounded={isActive ? 'xl' : 'none'}
      _hover={{ bg: 'bg.lightest' }}
      _active={{ bg: 'bg.lightest' }}
      onClick={() => setStatPage(value)}
      color={isActive ? 'white' : 'text.secondary'}
      variant='solid'
      fontWeight={300}
      bg={isActive ? 'bg.light' : 'transparent'}
    >
      {label.toUpperCase()}
    </Button>
  );
};

export const TabControls: React.FC = () => {
  const curPage = useCurStatPageVal();

  return (
    <Flex justifyContent='center' my={16} flexWrap='wrap'>
      <TabControlItem
        label='Overview'
        value={StatsPageEnum.Overview}
        isActive={curPage === StatsPageEnum.Overview}
      />
      <TabControlItem
        label='Players'
        value={StatsPageEnum.Players}
        isActive={curPage === StatsPageEnum.Players}
      />
      <TabControlItem
        label='Resources'
        value={StatsPageEnum.Resources}
        isActive={curPage === StatsPageEnum.Resources}
      />
      <TabControlItem
        label='Others'
        value={StatsPageEnum.Others}
        isActive={curPage === StatsPageEnum.Others}
      />
    </Flex>
  );
};
