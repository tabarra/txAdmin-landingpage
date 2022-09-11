import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import { NavbarItemData, NavbarItems } from '../../config/config';
import { Popover } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link';


const NavItem: React.FC<NavbarItemData> = ({ name, url }) => (
  <a
    className='duration-200 ease-in-out text-white hover:text-gray-400 text-md font-medium'
    href={url}
    target='_blank'
    rel='noopener'
  >
    {name}
  </a>
);

export default function NavBar() {
  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-36">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0 md:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">txAdmin Logo</span>
                <span className="text-green-400 font-semibold text-lg">txAdmin</span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-neutral-800 rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-neutral-900 duration-100 ease-in-out focus:outline-none focus:ring-0">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {NavbarItems.map((item) => (
              <NavItem url={item.url} name={item.name} key={item.name} />
            ))}
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-neutral-800 divide-y-2 divide-neutral-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a>
                      <span className="sr-only">txAdmin Logo</span>
                      <span className="text-green-400 font-semibold text-lg">txAdmin</span>
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-neutral-800 rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-neutral-800 duration-100 ease-in-out focus:outline-none focus:ring-0">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {NavbarItems.map((item) => (
                  <NavItem url={item.url} name={item.name} key={item.name} />
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
