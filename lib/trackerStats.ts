import type { GetStaticPropsResult } from 'next';

export const TRACKER_STATS_REVALIDATE_SECONDS = 300;
export const TRACKER_STATS_ERROR = 'Failed to retrieve txTracker data.';

export type TrackerStats = {
  version: number;
  ts: string;
  players: [number, number];
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
};

export type TrackerStatsPageData = TrackerStats & {
  pageGeneratedAt: number;
};

export type TrackerStatsPageProps = TrackerStatsPageData | { error: string };

export type HomeStats = {
  servers: number;
  admins: number;
  bans: number;
};

const isTrackerStats = (value: unknown): value is TrackerStats => {
  return typeof value === 'object' && value !== null && 'version' in value;
};

const getTrackerStatsUrl = () => {
  const trackerApiUrl = process.env.TRACKER_API_URL;
  if (!trackerApiUrl) throw new Error('TRACKER_API_URL is not configured.');

  return `${trackerApiUrl}/public/stats`;
};

const getErrorMessage = (error: unknown) => {
  return error instanceof Error ? error.message : String(error);
};

export async function fetchTrackerStats(): Promise<TrackerStatsPageData> {
  const trackerResp = await fetch(getTrackerStatsUrl(), {
    headers: { 'x-api-token': process.env.TRACKER_API_TOKEN ?? 'not_set' },
  });

  if (!trackerResp.ok) throw new Error(`txTracker returned status ${trackerResp.status}.`);

  const trackerData: unknown = await trackerResp.json();
  if (!isTrackerStats(trackerData)) throw new Error('Invalid txTracker data.');

  return { ...trackerData, pageGeneratedAt: Date.now() };
}

export function getHomeStats(trackerStats: TrackerStats): HomeStats {
  return {
    servers: trackerStats.servers.txAdmin[0],
    admins: trackerStats.publicNumbers.admins,
    bans: trackerStats.publicNumbers.bans,
  };
}

export async function getTrackerStatsStaticProps(): Promise<GetStaticPropsResult<TrackerStatsPageProps>> {
  try {
    return {
      props: await fetchTrackerStats(),
      revalidate: TRACKER_STATS_REVALIDATE_SECONDS,
    };
  } catch (error) {
    console.error(`Failed to fetch txTracker stats: ${getErrorMessage(error)}`);

    return {
      props: {
        error: TRACKER_STATS_ERROR,
      },
      revalidate: TRACKER_STATS_REVALIDATE_SECONDS,
    };
  }
}
