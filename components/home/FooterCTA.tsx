import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import GettingStartedDialog from '../misc/GettingStartedDialog'

export default function FooterCallToAction() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <GettingStartedDialog open={open} onClose={() => setOpen(false)} />
      <div className="bg-cta shadow-md">
        <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row p-12 justify-evenly items-center">
          <div className="space-y-5 text-center lg:text-left lg:space-y-0">
            <h3 className="text-white font-bold text-2xl">Like what you see?</h3>
            <p className="text-neutral-400 text-base xl:text-lg whitespace-normal">Adding txAdmin to your server is completely free and super easy.</p>
          </div>
          <div>
            <button onClick={() => setOpen(true)} className="group flex bg-txgreen hover:bg-emerald-500 rounded-lg text-black font-bold text-base py-3 px-4 transition duration-200 ease-in-out">
              Get Started
              <ArrowRightIcon className="group-hover:animate-bounce-x h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
};
