import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light'>
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          <header className='pr-20 pl-5 py-10'>
            <nav className='flex'>
              <img
                src='/icons/gym.svg'
                alt='logo'
                width={50}
                className='pr-5'
              />
              <ul className='w-full flex justify-between'>
                <li>
                  <Link href='/'>home</Link>
                </li>
                <li>
                  <Link href='/my-page'>My Page</Link>
                </li>
                <li>
                  <Link href='/exercises'>Exercises</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className='w-full'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
