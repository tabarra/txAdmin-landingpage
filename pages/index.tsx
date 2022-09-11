import dynamic from 'next/dynamic';
import Head from 'next/head';
import FooterCTA from '../components/home/FooterCTA';
import Footer from '../components/layout/Footer';
import { TxMetaDescription } from '../config/config';

const Header = dynamic(() => import('../components/layout/Header'));
const ZAPCTA = dynamic(() => import('../components/home/ZAPCTA'));
const About = dynamic(() => import('../components/home/About'));
const Features = dynamic(() => import('../components/home/Features'));

export default function Home() {
  return (
    <>
        <Head>
        <title>txAdmin - The best FiveM server management solution</title>
        <link rel='icon' href='./favicon.png' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='theme-color' content='#0EB880' />
        <meta
          name='description'
          content={TxMetaDescription}
        />
        <meta
          name='keywords'
          content='txadmin, fivem, fivem server, login, discord, manage fivem, fivem monitoring, fivem server panel, fivem web panel, fivem recipes'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='txAdmin' />
        <meta
          property='og:title'
          content='txAdmin - The best FiveM server management solution'
        />
        <meta
          property='og:description'
          content={TxMetaDescription}
        />
        <meta property='og:url' content='https://txadm.in' />
        <meta property='og:image' content='https://i.file.glass/yuFh9dmlBS.png' />
        <link rel='canonical' href='https://txadm.in' />
      </Head>
      <div className='overflow-auto z-0'>
    <Header />
    </div>
      <div className='space-y-32 bg-neutral-900 z-10'>
        <ZAPCTA />
        <div className='space-y-32 bg-neutral-900'>
          <main className='flex-grow space-y-12'>
            <div className='space-y-32'>
              <About />
              <Features />
            </div>
          </main>
        </div>
      </div>
      <footer className='bg-neutral-900 pt-16'>
        <FooterCTA />
        <Footer />
      </footer>
    </>
  );
}
