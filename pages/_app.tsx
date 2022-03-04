import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../components/layout/MainLayout';
import Script from 'next/script';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import { ZapDialogProvider } from '../context/ZapDialogProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../styles/theme';
import { NavbarDrawerProvider } from '../components/NavBar/NavbarDrawerProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <NavbarDrawerProvider>
        <ZapDialogProvider>
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
        </ZapDialogProvider>
      </NavbarDrawerProvider>
    </ChakraProvider>
  );
}
export default MyApp;
