import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../components/layout/MainLayout';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
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
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
