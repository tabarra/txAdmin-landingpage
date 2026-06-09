import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FivemUrls } from '../../config/config';

export default function ServerHostingCallToAction() {
  return (
    <div className='bg-cta shadow-md'>
      <hr className='border-2 border-txgreen animate-pulse' />
      <div className='flex flex-col space-y-7 lg:space-y-0 lg:flex-row p-10 justify-evenly items-center'>
        <div className='space-y-5 text-center lg:text-left lg:space-y-0'>
          <h2 className='text-white font-bold text-2xl'>
            Get your own FiveM <span className='text-txgreen'>txAdmin</span> server
          </h2>
          <p className='text-neutral-300 text-base xl:text-lg whitespace-normal'>
            Find official FiveM server hosting options for getting started with txAdmin.
          </p>
        </div>
        <div>
          <a href={FivemUrls.serversLandingPage} target='_blank' rel='noopener'>
            <button className='group flex bg-txgreen hover:bg-emerald-500 rounded-lg text-black font-bold text-base py-3 px-4 transition duration-200 ease-in-out'>
              Find a Server Host
              <ArrowRightIcon className='group-hover:animate-bounce-x h-6 w-6 ml-2' />
            </button>
          </a>
        </div>
      </div>
      <hr className='border-2 border-txgreen animate-pulse' />
    </div>
  );
};