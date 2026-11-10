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
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-anton)', 'sans-serif'],
        body: ['var(--font-oswald)', 'system-ui'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#e5e5e5',
            foreground: '#0a001d',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#2e1065',
            },
          },
        },
        dark: {
          colors: {
            background: '#0a001d',
            foreground: '#e7e7ff',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#2e1065',
            },
          },
        },
      },
    }),
  ],
};

export default config;
