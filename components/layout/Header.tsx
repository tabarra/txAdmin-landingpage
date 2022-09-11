import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { StatCounter } from '../../components/misc/StatCounter';
import { TxAdminStats } from '../../config/config';
import NavBar from './NavBar';
import GettingStartedDialog from '../misc/GettingStartedDialog';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <GettingStartedDialog open={open} onClose={() => setOpen(false)} />
    <div className='bg-hero bg-cover'>
    <NavBar />
    <header className='flex mx-auto justify-center h-screen'>
          <div className='m-auto max-w-5xl p-4'>
            <div className='flex flex-col space-y-4 align-middle text-center'>
              <h1 className='text-white font-bold text-2xl lg:text-5xl min-w-0'>
                Manage & Monitor your <span className="text-fivem-red">FiveM</span> Server
              </h1>
              <p className='text-gray-300 text-md font-medium lg:text-lg px-16'>
                txAdmin is a <span className='font-bold'>completely free to use</span>,
                full-featured <span className='font-bold'>web panel</span> to Manage &
                Monitor your FiveM Server remotely, in use by over{' '}
                <span className='font-bold'>{TxAdminStats.servers} thousand servers</span> worldwide at any
                given time.
              </p>
              <div className='space-y-10'>
                <div className='flex justify-center mt-3 space-x-2 flex-wrap'>
                  <StatCounter
                    labelSuffix='online'
                    valueSuffix='servers'
                    valueUnit='k+'
                    start={1}
                    end={TxAdminStats.servers}
                  />
                  <StatCounter
                    valueSuffix='admins'
                    valueUnit='k+'
                    end={TxAdminStats.admins}
                  />
                  <StatCounter
                    valueSuffix='bans'
                    decimals={1}
                    valueUnit='m+'
                    end={TxAdminStats.bans}
                  />
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
                      onClick={() => setOpen(true)}
                      className='group flex mx-auto justify-center w-60 bg-txgreen hover:bg-emerald-400 text-black font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out'
                    >
                      Get Started
                      <ArrowRightIcon className='group-hover:animate-bounce-x h-6 h-6 ml-2' />
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
