import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
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
    <html lang='en'>
      <body className={`${inter.className} min-h-screen`}>
        <header className='px-20 py-10'>
          <nav>
            <ul className='w-full flex justify-between'>
              <li>
                <Link href='/'>home</Link>
              </li>
              <li>
                <Link href='/exercises'>my page</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='w-full p-24'>{children}</main>
      </body>
    </html>
  );
}
