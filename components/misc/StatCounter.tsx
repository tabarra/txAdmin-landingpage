import React from 'react';
import CountUp, { CountUpProps } from 'react-countup';

interface StatCounterProps extends CountUpProps {
  labelSuffix?: string;
  valueSuffix: string;
  valueUnit: string;
  decimals?: number;
  start?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  valueUnit,
  valueSuffix,
  start = 0,
  decimals = 0,
  labelSuffix,
  end,
  ...otherProps
}) => {
  return (
    <div className='flex flex-col bg-neutral-800 rounded-2xl items-center justify-center w-40 h-20 m-2'>
      <span className='text-txgreen text-3xl md:text-4xl'>
        <CountUp
          duration={2.9}
          separator=','
          useEasing={true}
          start={start}
          decimals={decimals}
          end={end}
          {...otherProps}
        />
        {valueUnit}
      </span>
      <span className='text-neutral-300 text-sm md:text-base'>
        {valueSuffix} <span className='hidden md:inline'>{labelSuffix ?? ''}</span>
      </span>
    </div>
  );
};
