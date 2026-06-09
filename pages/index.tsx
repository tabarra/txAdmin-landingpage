import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import FooterCTA from '../components/home/FooterCTA';
import Footer from '../components/layout/Footer';
import HtmlHead from '../components/misc/HtmlHead';
import type { HomeStats } from '../lib/trackerStats';
import { fetchTrackerStats, getHomeStats, TRACKER_STATS_REVALIDATE_SECONDS } from '../lib/trackerStats';

const Hero = dynamic<{ stats?: HomeStats | null }>(() => import('../components/layout/Hero'));
const ServerHostingCTA = dynamic(() => import('../components/home/ServerHostingCTA'));
const About = dynamic(() => import('../components/home/About'));
const Features = dynamic(() => import('../components/home/Features'));

type HomeProps = {
  stats: HomeStats | null;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let stats: HomeStats | null = null;

  try {
    stats = getHomeStats(await fetchTrackerStats());
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to fetch home stats: ${message}`);
  }

  return {
    props: { stats },
    revalidate: TRACKER_STATS_REVALIDATE_SECONDS,
  };
};

export default function Home({ stats }: HomeProps) {
  return (
    <>
      <HtmlHead />
      <div className='overflow-auto z-0'>
        <Hero stats={stats} />
      </div>
      <div className='space-y-32 bg-txneutralbg z-10'>
        <ServerHostingCTA />
        <div className='space-y-32 bg-txneutralbg'>
          <main className='flex-grow space-y-12'>
            <div className='space-y-32'>
              <About />
              <Features />
            </div>
          </main>
        </div>
      </div>
      <footer className='bg-txneutralbg pt-16'>
        <FooterCTA />
        <Footer />
      </footer>
    </>
  );
}
