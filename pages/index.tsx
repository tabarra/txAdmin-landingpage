import dynamic from 'next/dynamic';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const Header = dynamic(() => import('../components/layout/Header'));
const ZAPCTA = dynamic(() => import('../components/home/ZAPCTA'));
const About = dynamic(() => import('../components/home/About'));
const Features = dynamic(() => import('../components/home/Features'));

export default function Home() {
  return (
    <>
      <header className='bg-hero bg-cover h-screen'>
        <Header />
      </header>
      <div className='space-y-32 bg-gray-900'>
        <ZAPCTA />
        <div className='space-y-32 bg-gray-900'>
          <main className='flex-grow space-y-12'>
            <div className='space-y-32'>
              <About />
              <Features />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
