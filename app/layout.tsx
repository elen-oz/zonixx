import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZONIXX',
  description:
    'Keep your workouts in one place. Over 1,300 exercises in one place with visual instructions, animations and videos.',
  icons: {
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className="light">
    <body className={`${inter.className} relative min-h-screen p-0 md:px-4`}>
      <Providers>
        <div className="p-3 lg:w-[1200px] mx-auto mt-0 md:mt-[2rem] bg-white dark:bg-gray-700 shadow-xl md:mb-4">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
