import dynamic from 'next/dynamic';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { StatCounter } from '../components/misc/StatCounter';
import { useZapDialog } from '../context/ZapDialogProvider';
import { TxAdminStats } from '../config/config';
import Image from 'next/image';
import AnimatedSnaily from '../public/txsnaily2_animated.png';

const Header = dynamic(() => import('../components/layout/Header'));
const ZAPCTA = dynamic(() => import('../components/home/ZAPCTA'));
const About = dynamic(() => import('../components/home/About'));
const Features = dynamic(() => import('../components/home/Features'));

export default function Home() {
  const { setDialogOpen } = useZapDialog();

  return (
    <>
      <header className='bg-hero bg-cover h-screen'>
        <Header>
          <div className='m-auto max-w-3xl p-4'>
            <div className='absolute bottom-8 right-16 w-64 h-64 opacity-0 lg:opacity-100 transition-opacity'>
              <Image src={AnimatedSnaily} alt='animated-snaily' layout='fill' priority />
            </div>
            <div className='flex flex-col space-y-4 align-middle text-center'>
              <h1 className='text-white font-bold text-2xl lg:text-4xl min-w-0'>
                Remotely Manage & Monitor your GTA5 FiveM Server
              </h1>
              <p className='text-white text-md lg:text-lg'>
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
                    valueUnit='k+'
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
                      onClick={() => setDialogOpen(true)}
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
        </Header>
      </header>
      <div className='space-y-32 bg-gray-900'>
        <ZAPCTA />
        <div className='space-y-32 bg-gray-900'>
          <main className='flex-grow space-y-12'>
            <div className='space-y-32'>
              <About />
              <Features />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
