import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../components/layout/MainLayout';
import Script from 'next/script';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import ZapDialogProvider from './ZapDialogProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../styles/theme';
import { NavbarDrawerProvider } from '../components/NavBar/NavbarDrawerProvider';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

const shouldMainLayoutRender = (path: string): boolean => {
  switch (path) {
    case '/404':
      return false;
    default:
      return true;
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const renderMainLayout = shouldMainLayoutRender(pathname);

  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <NavbarDrawerProvider>
          <ZapDialogProvider>
            {renderMainLayout ? (
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
            ) : (
              <Component {...pageProps} />
            )}
          </ZapDialogProvider>
        </NavbarDrawerProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
export default MyApp;
