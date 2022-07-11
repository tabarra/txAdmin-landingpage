import { extendTheme, ThemeConfig } from '@chakra-ui/react';

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

export const theme = extendTheme({
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: '"Montserrat", sans-serif',
    mono: '"Fira Code", monospace',
  },
  colors,
  config: configOptions,
});
