import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ThirdPartyURLs } from '../../config/config';

export default function GettingStartedDialog(props: { open: any; onClose: any; }) {
  const {open, onClose} = props;
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={() => onClose(false)}
      >
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-200'
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
              <div className='bg-neutral-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='space-y-4'>
                  <div className='flex justify-between'>
                    <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10'>
                      <HeartIcon className='w-6 h-6 text-green-400' />
                    </div>
                    <div>
                      <button
                      type='button'
                      className='p-2.5 hidden inline-block sm:block bg-neutral-800 hover:bg-dialog-btn-hvr transition duration-200 ease-in-out block rounded-full mx-auto flex-shrink-0 flex items-center justify-center'
                      onClick={() => onClose(false)}
                      ref={cancelButtonRef}
                    >
                      <XMarkIcon className='h-5 w-5 text-neutral-300' />
                    </button>
                    </div>
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-medium text-green-200'
                    >
                      Let&apos;s get you up and running.
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-neutral-400'>
                        Launching your server with{' '}
                        <a
                          href='https://zap-hosting.com/txadmin2'
                          target='_blank'
                          className='text-green-300 font-bold'
                          rel='noopener'
                        >
                          ZAP-Hosting
                        </a>{' '}
                        is the fastest and easiest way to get started with txAdmin. No
                        skill required to get your pre-configured, txAdmin-enabled server
                        up and running in moments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-cta px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <a href={ThirdPartyURLs.zapLink} target='_blank' rel='noopener'>
                  <button
                    type='button'
                    className='w-full group inline-flex justify-center rounded-lg text-black shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-txgreen text-base font-semibold hover:bg-emerald-400 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Get started with ZAP-Hosting
                    <ArrowRightIcon className='group-hover:animate-bounce-x text-black h-6 sm:h-5 sm:h-5 ml-2' />
                  </button>
                </a>
                <a href={ThirdPartyURLs.serverGetStarted} target='_blank' rel='noopener'>
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-dialog-btn-2 text-base font-medium text-neutral-200 hover:bg-dialog-btn-hvr focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Manual Setup
                  </button>
                </a>
                <button
                  type='button'
                  className='sm:hidden mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-neutral-800 text-base font-bold text-neutral-200 hover:bg-dialog-btn-hvr focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => onClose(false)}
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
  );
};
