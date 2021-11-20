import Head from 'next/head';
import Link from 'next/link';
import { ArrowRightIcon, HeartIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CountUp, { CountUpProps } from 'react-countup';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import { NavbarItemData, NavbarItems } from '../../static/config';

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

const MobileNavItem: React.FC<NavbarItemData> = ({ name, url }) => (
  <a
    className='text-gray-300 font-bold bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    href={url}
    target='_blank'
    rel='noopener'
  >
    {name}
  </a>
);

const NavItem: React.FC<NavbarItemData> = ({ name, url }) => (
  <a
    className='duration-200 ease-in-out hover:bg-indigo-900 p-2 rounded-lg'
    href={url}
    target='_blank'
    rel='noopener'
  >
    {name}
  </a>
);

export default function Home() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-60 transition-opacity' />
            </Transition.Child>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='space-y-4'>
                    <div className='flex justify-between'>
                      <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
                        <HeartIcon className='w-6 h-6 text-green-500' />
                      </div>
                      <button
                        type='button'
                        className='hidden sm:block bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out rounded-lg p-2'
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        <XIcon className='h-5 w-5 text-gray-300' />
                      </button>
                    </div>
                    <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 font-medium text-green-200'
                      >
                        Let&apos;s get you up and running.
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-400'>
                          Launching your server with{' '}
                          <a
                            href='https://zap-hosting.com/txadmin2'
                            target='_blank'
                            className='text-green-300 font-bold'
                            rel='noopener'
                          >
                            Zap Hosting
                          </a>{' '}
                          is the fastest and easiest route to get started with txAdmin, no
                          skill required to get your pre-configured txAdmin-enabled server
                          up and running in moments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <a
                    href='https://zap-hosting.com/txadmin2'
                    target='_blank'
                    rel='noopener'
                  >
                    <button
                      type='button'
                      className='w-full group inline-flex justify-center rounded-lg text-black shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-txgreen text-base font-medium hover:bg-green-400 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Get started with Zap Hosting
                      <ArrowRightIcon className='group-hover:animate-bounce-x text-black h-6 h-6 sm:h-5 sm:h-5 ml-2' />
                    </button>
                  </a>
                  <a
                    href='https://docs.fivem.net/docs/server-manual/setting-up-a-server/'
                    target='_blank'
                    rel='noopener'
                  >
                    <button
                      type='button'
                      className='mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-gray-700 text-base font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Manual Setup
                    </button>
                  </a>
                  <button
                    type='button'
                    className='sm:hidden mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-gray-700 text-base font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={menuOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 overflow-hidden' onClose={setmenuOpen}>
          <div className='absolute inset-0 overflow-hidden'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-500'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-500'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
            </Transition.Child>
            <div className='fixed inset-y-0 right-0 pl-10 max-w-xs sm:max-w-sm flex'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <div className='relative w-screen max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 duration-200 ease-in-out hover:text-white focus:outline-none focus:ring-0'
                        onClick={() => setmenuOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='h-full flex flex-col py-6 bg-gray-900 shadow-xl overflow-y-scroll'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-lg font-medium text-gray-200'>
                        Navigation
                      </Dialog.Title>
                    </div>
                    <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                      <nav className='flex flex-col space-y-2'>
                        {NavbarItems.map((item) => (
                          <MobileNavItem
                            url={item.url}
                            name={item.name}
                            key={item.name}
                          />
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Head>
        <title>txAdmin - The best FiveM server management solution</title>
        <link rel='icon' href='./favicon.png' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='theme-color' content='#0EB880' />
        <meta
          name='description'
          content='txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time.'
        />
        <meta
          name='keywords'
          content='txadmin, fivem, fivem server, login, discord, manage fivem, fivem monitoring, fivem server panel, fivem web panel, fivem recipes'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='txAdmin' />
        <meta
          property='og:title'
          content='txAdmin - The best FiveM server management solution'
        />
        <meta
          property='og:description'
          content='txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time.'
        />
        <meta property='og:url' content='https://txadm.in' />
        <meta property='og:image' content='https://i.file.glass/yuFh9dmlBS.png' />
        <link rel='canonical' href='https://txadm.in' />
      </Head>
      <div className='flex justify-between mx-5 md:mx-0 md:justify-around mt-5'>
        <div>
          <Link href='/' passHref>
            <a className='font-bold text-lg select-none text-white'>txAdmin</a>
          </Link>
        </div>
        <button
          aria-label='Mobile Navigation Button'
          className='flex md:hidden bg-gray-300 hover:bg-gray-200 duration-200 ease-in-out p-2 rounded-xl'
          onClick={() => setmenuOpen(true)}
        >
          <MenuAlt4Icon className='h-6 w-6 text-gray-900' />
        </button>
        <nav className='hidden md:block space-x-1 text-base text-white font-medium'>
          {NavbarItems.map((item) => (
            <NavItem url={item.url} name={item.name} key={item.name} />
          ))}
        </nav>
      </div>
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
                    onClick={() => setOpen(true)}
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
