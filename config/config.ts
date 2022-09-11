import React from 'react';
import { IconBaseProps } from 'react-icons';
import { AiFillLock } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { FaServer } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi';
import { MdPeople } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';

export interface NavbarItemData {
  url: string;
  name: string;
}

export const NavbarItems: NavbarItemData[] = [
  {
    name: 'Discord',
    url: 'https://discord.gg/yWxjt9zPWR',
  },
  {
    name: 'Documentation',
    url: 'https://github.com/tabarra/txAdmin/blob/master/README.md',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tabarra/txAdmin/blob/master/README.md',
  },
];


export const TxAdminStats = {
  servers: 18,
  admins: 69,
  bans: 1.3,
}

export const TxMetaDescription = `txAdmin is a full featured web panel to Manage & Monitor your FiveM/RedM Server remotely, in use by over ${TxAdminStats.servers} thousand servers worldwide at any given time.`;

export interface FeatureItemData {
  title: string;
  description: string;
  FeatureIcon: React.ComponentType<IconBaseProps>;
}

export const FeaturesData: FeatureItemData[] = [
  {
    FeatureIcon: FaServer,
    title: 'Server Management',
    description:
      "Start, stop, or restart your server instance or resources and edit your server's configuration with ease.",
  },
  {
    FeatureIcon: GoSettings,
    title: 'Server Recipes',
    description:
      'Get a server up and running in under 60 seconds with ease using the txAdmin recipe deployer.',
  },
  {
    FeatureIcon: HiChartBar,
    title: 'Performance Analytics',
    description:
      "Gain an insight on your server's performance on all 3 threads via the in-depth performance chart.",
  },
  {
    FeatureIcon: MdPeople,
    title: 'Player Management',
    description:
      'Manage players with simplicity using the txAdmin player manager. Featuring bans, warns, whitelisting and more.',
  },
  {
    FeatureIcon: AiFillLock,
    title: 'Security',
    description:
      'txAdmin features authentication via Cfx.re, admin permissions, action logging, and brute-force protection.',
  },
  {
    FeatureIcon: FiSearch,
    title: 'Monitoring',
    description:
      'Monitoring your server is easy with txAdmin. Featuring auto restarts on crash, live console, RAM/CPU monitoring, and more.',
  },
];

export const ThirdPartyURLs = {
  zapLink: 'https://zap-hosting.com/txadmin2',
  serverGetStarted: 'https://docs.fivem.net/docs/server-manual/setting-up-a-server/',
};
