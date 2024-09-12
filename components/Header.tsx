'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='absolute top-[-4rem] left-1/2 transform -translate-x-1/2 xl:w-[1200px]'>
      <nav className='flex'>
        <ul className='w-full flex justify-between items-center'>
          <li
            className={`${
              pathname === '/exercises'
                ? 'font-semibold bg-white rounded-t-xl'
                : 'text-white'
            } sm:pr-8 sm:pl-4 pb-4`}
          >
            <Link
              href='/exercises'
              className='flex justify-center items-center gap-2'
            >
              <img
                src='/icons/dumbbell.png'
                alt='logo'
                width={50}
                className='p-2'
              />
              <span className='hidden sm:inline-block capitalize'>
                exercises
              </span>
            </Link>
          </li>
          <li
            className={`${
              pathname === '/profile'
                ? 'font-semibold bg-white rounded-t-xl'
                : 'text-white'
            } sm:pr-8 sm:pl-4 pb-3`}
          >
            <Link
              href='/profile'
              className='flex justify-center items-center gap-2'
            >
              <img
                src='/icons/profile.png'
                alt='profile'
                width={50}
                className='p-2'
              />
              <span className='hidden sm:inline-block capitalize'>profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
