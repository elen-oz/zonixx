import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // extend: {
    //   colors: {
    //     primary: {
    //       50: '#e7e7ff',
    //       100: '#b8bafd',
    //       200: '#8a8cf5',
    //       300: '#5b5ef0',
    //       400: '#2e30eb',
    //       500: '#1618d2',
    //       600: '#0f12a4',
    //       700: '#230976',
    //       800: '#030749',
    //       900: '#0a001d',
    //     },
    //   },
    // },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#0a001d',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#6366f1',
            },
            // second: {
            //   foreground: '#FFFFFF',
            //   DEFAULT: '#8a8cf5',
            // },
          },
        },
        dark: {
          colors: {
            background: '#0a001d',
            foreground: '#e7e7ff',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#6366f1',
            },
          },
        },
      },
    }),
  ],
};

export default config;
