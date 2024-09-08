import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      // addCommonColors: true,
      themes: {
        // screens: {
        //   lg: '1240px',
        // },
        light: {
          colors: {
            background: '#ef4444',
            foreground: '#0a001d',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#ef4444',
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
