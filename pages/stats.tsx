import type { NextApiRequest, NextApiResponse } from 'next'
import { HashtagIcon, ChartBarIcon, UserGroupIcon, UserIcon, NoSymbolIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import HtmlHead from '../components/misc/HtmlHead';
import dynamic from 'next/dynamic';
import humanizeDuration, { Unit } from 'humanize-duration';

const humanizeOptions = {
  language: "shortEn",
  languages: {
    shortEn: {
      y: () => "y",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
  units: ["y", "mo", "w", "d", "h"] as Unit[],
  spacer: '',
  round: true,
  largest: 3,
};


type MetadataLogType = {
  version: number;
  ts: string;
  players: [number, number]
  usage: {
    top100: [number, number];
    top500: [number, number];
    top1000: [number, number];
  };
  servers: {
    total: number;
    public: [number, number];
    txAdmin: [number, number];
  };
  versions: [string, number][];
  publicNumbers: {
    admins: number;
    players: number;
    playTime: number;
    bans: number;
    warns: number;
    whitelists: number;
  };
  realeaseDates: Record<string, string>;
}

type gspFuncPropsType = {
  req: NextApiRequest,
  res: NextApiResponse,
}
type gspPropsType = MetadataLogType | { error: string }
type gspReturnType = {
  props: gspPropsType
};
type ReleasesApiRespType = {
  tag_name: string;
  published_at: string;
}[];

export async function getServerSideProps({ req, res }: gspFuncPropsType): Promise<gspReturnType> {
  res.setHeader('Cache-Control', 'public, s-maxage=300');

  try {
    //txTracker Data
    const trackerResp = await fetch(`${process.env.TRACKER_API_URL}/public/stats`, {
      headers: { 'x-api-token': process.env.TRACKER_API_TOKEN ?? 'not_set' },
    });
    const trackerData = await trackerResp.json() as MetadataLogType;
    if (!('version' in trackerData)) throw new Error(`Invalid txTracker data.`);

    //Github tag dates
    // const ghResp = await fetch(`https://api.github.com/repos/tabarra/txAdmin/releases`);
    // const ghData = await ghResp.json() as ReleasesApiRespType;
    // if (!Array.isArray(ghData)) throw new Error(`Invalid GitHub API data.`);
    // const versionDates = new Map();
    //FIXME: we actually need to use the API with pagination, RIP


    return { props: trackerData };
  } catch (error) {
    return {
      props: {
        error: (error as Error).message,
      }
    };
  }
}


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
    <p className='text-neutral-300'>txAdmin Servers</p>
  </div>

  <div className='absolute w-autox p-2 top-full left-0 mt-3 w-72 rounded-md shadow-md text-neutral-600 bg-gray-200 text-sm font-bold transition-all duration-150 scale-0 origin-top group-hover:scale-100'>
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
        <span className='text-txgreen text-lg'>
          {children}
        </span>
        <p className='text-neutral-400 text-md'>{title}</p>
      </div>
    </div>
  );
};
type MetadataComponentPropsType = {
  data: MetadataLogType;
}
const StatsCards = ({ data }: MetadataComponentPropsType) => {
  const toPct = ([yes, no]: [number, number]) => (yes / (yes + no)) * 100;
  const MINUTES_IN_YEAR = 525600;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 h-fit tracking-wide">

      <StatsCard title='txAdmin Servers' IconComponent={HashtagIcon}>
        <CountUp
          end={data.servers.txAdmin[0]}
          useEasing={true}
          duration={2}
        />
        <CountUp
          prefix=' ('
          end={toPct(data.servers.txAdmin)}
          decimals={2}
          suffix='%)'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='Top 100/500/1000' IconComponent={ChartBarIcon}>
        <CountUp
          end={toPct(data.usage.top100)}
          suffix='% / '
          useEasing={true}
          duration={2}
        />
        <CountUp
          end={toPct(data.usage.top500)}
          suffix='% / '
          useEasing={true}
          duration={2}
        />
        <CountUp
          end={toPct(data.usage.top1000)}
          suffix='%'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='txAdmin Players' IconComponent={ChartBarIcon}>
        <CountUp
          end={data.players[0]}
          separator=','
          useEasing={true}
          duration={2}
        />
        <CountUp
          prefix=' ('
          end={toPct(data.players)}
          decimals={2}
          suffix='%)'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Admins' IconComponent={UserIcon}>
        <CountUp
          end={data.publicNumbers.admins}
          separator=','
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Players' IconComponent={UserGroupIcon}>
        <CountUp
          end={data.publicNumbers.players}
          separator=','
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Play Time' IconComponent={ChartBarIcon}>
        <CountUp
          end={data.publicNumbers.playTime / MINUTES_IN_YEAR}
          separator=','
          suffix=' years'
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Bans' IconComponent={NoSymbolIcon}>
        <CountUp
          end={data.publicNumbers.bans}
          separator=','
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Warns' IconComponent={ExclamationTriangleIcon}>
        <CountUp
          end={data.publicNumbers.warns}
          separator=','
          useEasing={true}
          duration={2}
        />
      </StatsCard>

      <StatsCard title='DB Whitelists' IconComponent={ShieldCheckIcon}>
        <CountUp
          end={data.publicNumbers.whitelists}
          separator=','
          useEasing={true}
          duration={2}
        />
      </StatsCard>

    </div>
  )
}

const StatsVersionsTable = ({ data }: MetadataComponentPropsType) => {
  const toPct = (num: number, total: number) => {
    return (num * 100 / total).toFixed(2) + '%';
  }

  type versionsTableType = [string, number, string, string, string][];
  const versionsTable: versionsTableType = [];

  const txServerCount = data.servers.txAdmin[0];
  const tableShowThreshold = txServerCount * 0.005;
  let excludedCnt = 0;
  for (const [version, cnt] of data.versions) {
    let timeAgo, fullDate;
    if (data.realeaseDates[version]) {
      const releaseDate = new Date(data.realeaseDates[version])
      timeAgo = humanizeDuration(Date.now() - releaseDate.getTime(), humanizeOptions);
      fullDate = releaseDate.toLocaleDateString(['en'], { dateStyle: 'long' });
    }

    if (cnt > tableShowThreshold) {
      versionsTable.push([
        version,
        cnt,
        toPct(cnt, txServerCount),
        timeAgo ?? '--',
        fullDate ?? '--'
      ]);
    } else {
      excludedCnt += cnt;
    }
  }
  versionsTable.push(['under 0.05%', excludedCnt, toPct(excludedCnt, txServerCount), '--', '--']);

  return (
    <div className="overflow-scroll relative shadow-md rounded-lg w-full h-min">
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
          {versionsTable.map(([version, cnt, pct, timeAgo, fullDate]) => (
            <tr className="border-b last:border-b-0 bg-neutral-800 border-neutral-700 hover:bg-neutral-600" key={version}>
              <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                {version}
              </th>
              <td className="py-4 px-6 text-right">
                {cnt}
              </td>
              <td className="py-4 px-6 text-right">
                {pct}
              </td>
              <td className="py-4 px-6 text-right" title={fullDate}>
                {timeAgo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


const DynamicDate = dynamic(() => import('../components/misc/LastUpdated'), {
  ssr: false
})

export default function Home(props: gspPropsType) {
  let pageContent;
  if ('error' in props) {
    pageContent = <h4 className='text-red-400 text-2xl text-center max-w-3xl mx-auto'>Error: {props.error}</h4>;
  } else {
    pageContent = <>
      <div className="grid lg:grid-cols-2 gap-10">
        <StatsCards data={props} />
        <StatsVersionsTable data={props} />
      </div>
      <div className='mx-auto text-center'>
        <DynamicDate ts={props.ts} />
      </div>
    </>
  }

  return (
    <div className='space-y-10'>
      <HtmlHead />
      <div className='bg-neutral-800'>
        <NavBar />
      </div>


      <div className='space-y-28 bg-neutral-900'>
        <div className='container mx-auto max-w-6xl p-8 space-y-16'>
          <h1 className='text-neutral-200 font-medium text-4xl text-center max-w-3xl mx-auto'>txAdmin Statistics</h1>
          {pageContent}
          <p className="text-neutral-400 text-md italic text-center max-w-3xl mx-auto">
            <strong>Note:</strong> The FiveM public serverlist contains all servers (public and private), and txTracker collects, processes and enriches this data to deliver the stats above.
            This is not a cumulative measurement, just a snapshot of the online servers at the time of the hourly scan.
          </p>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
