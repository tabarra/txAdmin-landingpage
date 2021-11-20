import dynamic from 'next/dynamic';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import Script from 'next/script'

const Header = dynamic(() => import('../components/layout/Header'));
const ZAPCTA = dynamic(() => import('../components/ZAPCTA'));
const About = dynamic(() => import('../components/About'));
const Features = dynamic(() => import('../components/Features'));
const FooterCTA = dynamic(() => import('../components/FooterCTA'));
const Footer = dynamic(() => import('../components/layout/Footer'));

export default function Home() {
  return (
    <body className='flex flex-col min-h-screen bg-gray-800'>
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
        <footer className='bg-gray-800'>
          <FooterCTA />
          <Footer />
        </footer>
      </div>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-4DK3P3MG65'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-4DK3P3MG65');
        `}
      </Script>
    </body>
  );
}
