import dynamic from 'next/dynamic';
import FooterCTA from '../components/home/FooterCTA';
import Footer from '../components/layout/Footer';
import HtmlHead from '../components/misc/HtmlHead';

const Hero = dynamic(() => import('../components/layout/Hero'));
const ZAPCTA = dynamic(() => import('../components/home/ZAPCTA'));
const About = dynamic(() => import('../components/home/About'));
const Features = dynamic(() => import('../components/home/Features'));

export default function Home() {
  return (
    <>
      <HtmlHead />
      <div className='overflow-auto z-0'>
        <Hero />
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
