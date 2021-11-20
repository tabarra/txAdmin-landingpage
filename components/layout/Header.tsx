import { ArrowRightIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import CountUp, { CountUpProps } from 'react-countup';
import { MobileNavBar, DesktopNavBar } from './NavBar';
import { GettingStartedDialog } from '../misc/GettingStartedDialog';
interface StatCounterProps extends CountUpProps {
  labelSuffix?: string;
  valueSuffix: string;
  valueUnit: string;
  start?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
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

export default function Home() {
  const [zapDialogOpen, setZapDialogOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <GettingStartedDialog
        handleDialogClose={() => setZapDialogOpen(false)}
        isDialogOpen={zapDialogOpen}
      />
      <MobileNavBar isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <DesktopNavBar handleOpenMobile={() => setMobileNavOpen(true)} />
      <div className='flex h-screen items-center justify-center'>
        <div className='m-auto max-w-3xl p-4'>
          <div className='flex flex-col space-y-4 align-middle text-center'>
            <h1 className='text-white font-bold text-2xl lg:text-4xl min-w-0'>
              Remotely Manage & Monitor your GTA5 FiveM Server
            </h1>
            <p className='text-white text-md lg:text-lg'>
              txAdmin is a <span className='font-bold'>completely free to use</span>,
              full-featured <span className='font-bold'>web panel</span> to Manage &
              Monitor your FiveM Server remotely, in use by over{' '}
              <span className='font-bold'>TEN thousand servers</span> worldwide at any
              given time.
            </p>
            <div className='space-y-10'>
              <div className='flex justify-center mt-3 space-x-2 flex-wrap'>
                <StatCounter
                  labelSuffix='online'
                  valueSuffix='servers'
                  valueUnit='k+'
                  start={1}
                  end={10}
                />
                <StatCounter valueSuffix='admins' valueUnit='k+' end={34} />
                <StatCounter valueSuffix='bans' valueUnit='k+' end={793} />
              </div>
              <div className='flex flex-col space-y-2 justify-center md:flex-row md:space-y-0 md:space-x-2'>
                <div>
                  <button className='hidden group flex mx-auto justify-center w-60 md:w-44 bg-txgreen hover:bg-green-400 text-white font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out'>
                    Statistics
                    <ArrowRightIcon className='group-hover:animate-bounce-x h-6 h-6 ml-2' />
                  </button>
                </div>

                <div>
                  <button className='hidden group flex mx-auto justify-center w-60 md:w-44 bg-txgreen hover:bg-green-400 text-white font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out'>
                    How to Login
                    <ArrowRightIcon className='group-hover:animate-bounce-x h-6 h-6 ml-2' />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setZapDialogOpen(true)}
                    className='group flex mx-auto justify-center w-60 bg-txgreen hover:bg-green-400 text-black font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out'
                  >
                    Get Started
                    <ArrowRightIcon className='group-hover:animate-bounce-x h-6 h-6 ml-2' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
