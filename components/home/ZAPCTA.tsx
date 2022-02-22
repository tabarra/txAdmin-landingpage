import { ArrowRightIcon } from '@heroicons/react/outline'

export default function ZapCallToAction() {
  return (
    <div className="bg-cta shadow-md">
      <hr className="border-2 border-txgreen animate-pulse w-full" />
      <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row p-10 justify-evenly items-center">
        <div className="space-y-5 text-center lg:text-left lg:space-y-0">
          <h2 className="text-white font-bold text-2xl">Get your own FiveM <span className="text-txgreen">txAdmin</span> server</h2>
          <p className="text-gray-300 text-base xl:text-lg whitespace-normal">DDoS protected, pre-licensed & pre-configured FiveM servers with <span className="text-green-400"><a href="https://zap-hosting.com/txadmin2" rel="noopener">ZAP-Hosting</a></span>.</p>
        </div>
        <div>
          <a href="https://zap-hosting.com/txadmin2" target="_blank" rel="noopener">
            <button className="group flex bg-txgreen hover:bg-green-500 rounded-lg text-black font-bold text-base py-3 px-4 transition duration-200 ease-in-out">
              Get Your Server
              <ArrowRightIcon className="group-hover:animate-bounce-x h-6 w-6 ml-2" />
            </button>
          </a>
        </div>
      </div>
      <hr className="border-2 border-txgreen animate-pulse w-full" />
    </div>
  )
};
