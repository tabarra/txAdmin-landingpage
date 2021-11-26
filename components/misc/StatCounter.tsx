import React from 'react';
import CountUp, { CountUpProps } from 'react-countup';

interface StatCounterProps extends CountUpProps {
  labelSuffix?: string;
  valueSuffix: string;
  valueUnit: string;
  start?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  valueUnit,
  valueSuffix,
  start = 0,
  labelSuffix,
  end,
  ...otherProps
}) => {
  return (
    <div className='flex flex-col bg-gray-800 rounded-2xl items-center justify-center w-36 h-20 m-2'>
      <div className='flex flex-col bg-gray-800 rounded-2xl items-center justify-center w-36 h-20 m-2'>
        <span className='text-txgreen text-3xl md:text-4xl'>
          <CountUp
            duration={2.9}
            separator=','
            useEasing={true}
            start={start}
            end={end}
            {...otherProps}
          />
          {valueUnit}
        </span>
        <span className='text-gray-300 text-sm md:text-base'>
          {valueSuffix} <span className='hidden md:inline'>{labelSuffix ?? ''}</span>
        </span>
      </div>
    </div>
  );
};
