import { AdjustmentsIcon, ChartBarIcon, LockClosedIcon, SearchIcon, ServerIcon, UserIcon, UsersIcon } from "@heroicons/react/outline";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideup = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2px, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Features() {  
  return (
    <div>
      <Reveal keyframes={slideup} triggerOnce={true}>
      <div className="text-center space-y-2 m-8">
      <h3 className="text-3xl font-bold text-white">Everything you need to manage your server</h3>
      <p className="text-gray-400 text-base">txAdmin has everything you need to manage your server, ranging from moderation to monitoring.</p>
      </div>
      </Reveal>
      <Reveal keyframes={slideup} triggerOnce={true} delay={100}>
      <div className="mx-auto justify-center text-center w-9/12 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <ServerIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Server Management</h4> 
      <p className="text-gray-400">Start, stop, or restart your server instance or resources and edit your server&apos;s configuration with ease.</p>
      </div>
      </div>
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <AdjustmentsIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Server Recipes</h4>
      <p className="text-gray-400">Get a server up and running in under 60 seconds with ease using the txAdmin recipe deployer.</p>
      </div>
      </div>
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <ChartBarIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Performance Analytics</h4>
      <p className="text-gray-400">Gain an insight on your server&apos;s performance on all 3 threads via the in-depth performance chart.</p>
      </div>
      </div>
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <UsersIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Player Management</h4>
      <p className="text-gray-400">Manage players with simplicity using the txAdmin player manager. Featuring bans, warns, whitelisting and more.</p>
      </div>
      </div>
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <LockClosedIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Security</h4>
      <p className="text-gray-400">txAdmin features authentication via CitizenFX, admin permissions, action logging, and brute-force protection.</p>
      </div>
      </div>
      <div className="flex bg-content group transform duration-200 ease-in-out hover:scale-105 rounded-2xl">
        <div className="space-y-2 mx-auto p-7">
      <SearchIcon className="flex mx-auto justify-center h-14 w-14 bg-green-500 duration-200 ease-in-out group-hover:bg-green-700 text-gray-200 rounded-2xl p-3" />
      <h4 className="text-center text-2xl text-white">Monitoring</h4>
      <p className="text-gray-400">Monitoring your server is easy with txAdmin. Featuring auto restarts on crash, live console, RAM/CPU monitoring, and more.</p>
      </div>
      </div>
</div>
</Reveal>
</div>
      )
     };