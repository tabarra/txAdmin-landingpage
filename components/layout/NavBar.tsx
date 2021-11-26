import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import { NavbarItemData, NavbarItems } from '../../config/config';
import Link from 'next/link';

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

interface MobileNavBarProps {
  onClose: () => void;
  isOpen: boolean;
}

export const MobileNavBar: React.FC<MobileNavBarProps> = ({ onClose, isOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 overflow-hidden' onClose={onClose}>
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
                      onClick={onClose}
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
                        <MobileNavItem url={item.url} name={item.name} key={item.name} />
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface RegularNavBarProps {
  handleOpenMobile: () => void;
}

export const DesktopNavBar: React.FC<RegularNavBarProps> = ({ handleOpenMobile }) => (
  <div className='flex justify-between mx-5 md:mx-0 md:justify-around mt-5'>
    <div>
      <Link href='/' passHref>
        <a className='font-bold text-lg select-none text-white'>txAdmin</a>
      </Link>
    </div>
    <button
      aria-label='Mobile Navigation Button'
      className='flex md:hidden bg-gray-300 hover:bg-gray-200 duration-200 ease-in-out p-2 rounded-xl'
      onClick={handleOpenMobile}
    >
      <MenuAlt4Icon className='h-6 w-6 text-gray-900' />
    </button>
    <nav className='hidden md:block space-x-1 text-base text-white font-medium'>
      {NavbarItems.map((item) => (
        <NavItem url={item.url} name={item.name} key={item.name} />
      ))}
    </nav>
  </div>
);
