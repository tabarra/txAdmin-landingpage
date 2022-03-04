import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';

const FooterCTA = dynamic(() => import('../home/FooterCTA'), { ssr: false });
const Footer = dynamic(() => import('./Footer'));

export const MainLayout: React.FC<{ className?: string }> = ({ children, className }) => {
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
          content='txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time.'
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
          content='txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time.'
        />
        <meta property='og:url' content='https://txadm.in' />
        <meta property='og:image' content='https://i.file.glass/yuFh9dmlBS.png' />
        <link rel='canonical' href='https://txadm.in' />
      </Head>
      {children}
      <footer className='bg-gray-900 pt-16'>
        <FooterCTA />
        <Footer />
      </footer>
    </>
  );
};
