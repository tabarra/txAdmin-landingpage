import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { StatCounter } from '../misc/StatCounter';
import { TxAdminStats } from '../../config/config';
import type { HomeStats } from '../../lib/trackerStats';
import NavBar from './NavBar';
import GettingStartedDialog from '../misc/GettingStartedDialog';

export type HeroProps = {
  stats?: HomeStats | null;
};

export default function Header({ stats }: HeroProps) {
  const [open, setOpen] = useState(false);
  const displayStats = stats ?? TxAdminStats;
  const serverCount = displayStats.servers.toLocaleString('en-US');

  return (
    <>
      <GettingStartedDialog open={open} onClose={() => setOpen(false)} />
      <div className='bg-hero bg-cover'>
        <NavBar />
        <header className='flex mx-auto justify-center h-screen'>
          <div className='m-auto max-w-5xl p-4'>
            <div className='flex flex-col space-y-4 align-middle text-center'>
              <h1 className='text-white font-bold text-2xl lg:text-5xl min-w-0'>
                Manage & Monitor your FiveM Server
              </h1>
              <p className='text-neutral-300 text-md font-medium lg:text-lg px-16'>
                txAdmin is the <span className='font-bold'>official</span>,
                full-featured, web panel and in-game menu to Manage & Monitor your{' '}
                FiveM Server remotely, trusted by tens of thousands of servers worldwide.
              </p>
              <div className='space-y-10'>
                <div className='flex justify-center mt-3 space-x-2 flex-wrap'>
                  <StatCounter
                    decimals={1}
                    labelSuffix='online'
                    valueSuffix='servers'
                    valueUnit='k'
                    start={1}
                    end={displayStats.servers / 1000}
                  />
                  <StatCounter
                    decimals={1}
                    valueSuffix='admins'
                    valueUnit='k'
                    end={displayStats.admins / 1000}
                  />
                  <StatCounter
                    decimals={2}
                    valueSuffix='bans'
                    valueUnit='m'
                    end={displayStats.bans / 1000000}
                  />
                </div>
                <div className='flex flex-col space-y-2 justify-center md:flex-row md:space-y-0 md:space-x-2'>
                  <div>
                    <button
                      onClick={() => setOpen(true)}
                      className='group flex mx-auto justify-center w-60 bg-txgreen hover:bg-emerald-400 text-black font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out'
                    >
                      Get Started
                      <ArrowRightIcon className='group-hover:animate-bounce-x h-6 ml-2' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
