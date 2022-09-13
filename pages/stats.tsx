import type { NextApiRequest, NextApiResponse } from 'next'
import { HashtagIcon, ChartBarIcon, UserGroupIcon, UserIcon, NoSymbolIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import HtmlHead from '../components/misc/HtmlHead';

const statsTxServers = 17697;
type txVersDataType = [string, number][];
const statsTxVersions: txVersDataType = [
  ["v4.18.0", 2392],
  ["v4.18.0-rc2", 3],
  ["v4.17.1", 7047],
  ["v4.17.0", 7],
  ["v4.16.0", 1009],
  ["v4.15.1", 1056],
  ["v4.15.0", 5],
  ["v4.14.2", 426],
  ["v4.14.1", 151],
  ["v4.14.0", 4856],
  ["v4.13.4", 37],
  ["v4.13.3", 260],
  ["v4.13.1", 26],
  ["v4.13.0", 1],
  ["v4.12.1", 31],
  ["v4.12.0", 5],
  ["v4.11.0", 197],
  ["v4.10.0", 35],
  ["v4.9.0", 15],
  ["v4.8.0", 9],
  ["v4.7.0", 13],
  ["v4.6.1", 8],
  ["v4.6.0", 1],
  ["v4.5.0", 11],
  ["v4.4.2", 41],
  ["v4.4.1", 15],
  ["v4.4.0", 1],
  ["v4.3.1", 5],
  ["v4.2.0", 1],
  ["v4.1.0", 2],
  ["v3.8.0", 1],
  ["v3.7.0", 4],
  ["v3.6.4", 1],
  ["v3.3.0", 6],
  ["v3.2.3", 3],
  ["v3.1.0", 2],
  ["v2.7.2", 2],
  ["v2.7.1", 2],
  ["v2.5.1", 2],
  ["v2.4.0", 1],
  ["v2.0.1", 1],
  ["v1.15.0", 1]
];


const toPct = (num: number, total: number) => {
  return (num * 100 / total).toFixed(2) + '%';
}

type versionsTableType = [string, number, string, string][];
const versionsTable: versionsTableType = [];

const tableShowThreshold = statsTxServers * 0.005;
let excludedCnt = 0;
for (const [version, cnt] of statsTxVersions) {
  if (cnt > tableShowThreshold) {
    versionsTable.push([version, cnt, toPct(cnt, statsTxServers), '1yr, 2m, 3w, 4d']);
  } else {
    excludedCnt += cnt;
  }
}
versionsTable.push(['under 0.05%', excludedCnt, toPct(excludedCnt, statsTxServers), '--']);

/*
Tooltip attempt
<div className='relative flex bg-neutral-800 rounded-2xl h-24 p-3 items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-bg-shift bg-4x group'>
  <i className="bg-txgreen rounded-full p-1.5">
    <HeartIcon className='h-8 text-neutral-800' />
  </i>
  <div>
    <span className='text-txgreen text-xl inline'>
      18585 (xx.xx%)
    </span>
    <p className='text-gray-300'>txAdmin Servers</p>
  </div>

  <div className='absolute w-autox p-2 top-full left-0 mt-3 w-72 rounded-md shadow-md text-gray-600 bg-gray-200 text-sm font-bold transition-all duration-150 scale-0 origin-top group-hover:scale-100'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div>


*/


type StatsCardProps = {
  title: string;
  animatedBg?: boolean;
  IconComponent: React.FC<{ className: string }>;
  children: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  animatedBg,
  IconComponent,
  children,
}) => {
  const bgClasses = animatedBg
    ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-bg-shift bg-4x'
    : 'bg-neutral-800';
  return (
    <div className={`flex ${bgClasses} rounded-2xl h-18 p-3 items-center gap-3`}>
      <i className='bg-txgreen rounded-full p-1.5'>
        <IconComponent className='h-8 text-neutral-800' />
      </i>
      <div>
        <span className='text-txgreen text-xl'>
          {children}
        </span>
        <p className='text-gray-300'>{title}</p>
      </div>
    </div>
  );
};

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 h-fit tracking-wide">

      <StatsCard title='txAdmin Servers' IconComponent={HashtagIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
        <CountUp
          prefix=' ('
          end={99.99}
          decimals={2}
          suffix='%)'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='Top 100/500/1000' IconComponent={ChartBarIcon}>
        <CountUp
          end={99}
          suffix='% / '
          useEasing={true}
          duration={2}
        />
        <CountUp
          end={99}
          suffix='% / '
          useEasing={true}
          duration={2}
        />
        <CountUp
          end={99}
          suffix='%'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='txAdmin Players' IconComponent={ChartBarIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
        <CountUp
          prefix=' ('
          end={99.99}
          decimals={2}
          suffix='%)'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Admins' IconComponent={UserIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Players' IconComponent={UserGroupIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Play Time' IconComponent={ChartBarIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          suffix=' years'
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Bans' IconComponent={NoSymbolIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Warns' IconComponent={ExclamationTriangleIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Whitelists' IconComponent={ShieldCheckIcon}>
        <CountUp
          end={18585}
          useEasing={true}
          duration={2}
        />
      </StatsCard>

    </div>
  )
}

const StatsVersionsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg min-w-fit">
      <table className="w-full text-sm text-left text-neutral-400">
        <thead className="text-xs uppercase bg-neutral-700 text-neutral-400">
          <tr className='text-center'>
            <th scope="col" className="py-3 px-6">
              Version
            </th>
            <th scope="col" className="py-3 px-6">
              Servers
            </th>
            <th scope="col" className="py-3 px-6">
              %
            </th>
            <th scope="col" className="py-3 px-6">
              Release
            </th>
          </tr>
        </thead>
        <tbody>
          {versionsTable.map(([version, cnt, pct, date]) => (
            <tr className="border-b last:border-b-0 bg-neutral-800 border-neutral-700 hover:bg-neutral-600" key={version}>
              <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                {version}
              </th>
              <td className="py-4 px-6">
                {cnt}
              </td>
              <td className="py-4 px-6">
                {pct}
              </td>
              <td className="py-4 px-6">
                {date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


type gspPropsType = {
  req: NextApiRequest,
  res: NextApiResponse,
}
type statsPagePropsType = {
  rnd: number,
  secret?: string,
}
export async function getServerSideProps({ req, res }: gspPropsType) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=59'
  )
  return {
    props: {
      rnd: Math.random(),
      secret: process.env.TEST_SECRET?.substring(0, 6),
    },
  }
}

export default function Home(props: statsPagePropsType) {
  return (
    <>
      <HtmlHead />
      <NavBar />

      <div className='space-y-28 bg-neutral-900'>
        <div className='container mx-auto max-w-6xl p-8 space-y-6 bg-gray-500 bg-opacity-0'>
          <h1 className='text-gray-400 text-4xl text-center max-w-3xl mx-auto'>txAdmin Statistics</h1>
          <h1 className='text-gray-400 text-4xl text-center max-w-3xl mx-auto'>{props.rnd}</h1>
          <h1 className='text-gray-400 text-4xl text-center max-w-3xl mx-auto'>{props.secret}</h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <StatsCards />
            <StatsVersionsTable />
          </div>
          <p className="text-gray-400 text-md italic text-center max-w-3xl mx-auto">
            <strong>Note:</strong> The FiveM public serverlist contains all servers (public and private), and txTracker collects, processes and enriches this data to deliver the stats above.
            This is not a cumulative measurement, just a snapshot of the online servers at the time of the hourly scan.
          </p>
        </div>
      </div>

      <footer className='bg-neutral-900 pt-16 '>
        <Footer />
      </footer>
    </>
  );
}
