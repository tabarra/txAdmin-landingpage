import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowRightIcon, HeartIcon, XIcon } from '@heroicons/react/outline';
import { ThirdPartyURLs } from '../../config/config';
import { useZapDialog } from '../../context/ZapDialogProvider';

export const GettingStartedDialog: React.FC = ({}) => {
  const { isDialogOpen, setDialogOpen } = useZapDialog();
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Transition.Root show={isDialogOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={() => setDialogOpen(false)}
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
                      onClick={() => setDialogOpen(false)}
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
                          ZAP-Hosting
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
                <a href={ThirdPartyURLs.zapLink} target='_blank' rel='noopener'>
                  <button
                    type='button'
                    className='w-full group inline-flex justify-center rounded-lg text-black shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-txgreen text-base font-medium hover:bg-green-400 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Get started with ZAP-Hosting
                    <ArrowRightIcon className='group-hover:animate-bounce-x text-black h-6 h-6 sm:h-5 sm:h-5 ml-2' />
                  </button>
                </a>
                <a href={ThirdPartyURLs.serverGetStarted} target='_blank' rel='noopener'>
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
                  onClick={() => setDialogOpen(false)}
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
