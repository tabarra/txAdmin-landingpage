import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import Script from 'next/script';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const configOptions: Partial<ThemeConfig> = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const colors = {
  primary: {
    dark: '#3BC480',
    main: '#45E696',
    light: '#4EFCBB',
  },
  bg: {
    dark: '#171717',
    light: '#192338',
    lightest: '#1F2D4A',
    darkest: '#111827',
  },
  text: {
    primary: '#FFFFFF',
    lightSecondary: '#E6E6E6',
    secondary: '#9CA3AF',
  },
};

const theme = extendTheme({
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: '"Montserrat", sans-serif',
    mono: '"Fira Code", monospace',
  },
  colors,
  config: configOptions,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        </>
  );
}
export default MyApp;
