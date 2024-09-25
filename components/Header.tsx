'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul className="w-full flex justify-between items-center">
          <li>
            <Link
              href="/"
              className="text-3xl font-extrabold text-black sm:text-5xl font-heading uppercase"
            >
              zonixx
            </Link>
          </li>
          <div className=" md:w-[500px] flex justify-end items-center gap-2 md:gap-6">
            <li className={`${pathname === '/about' ? 'active-nav-link' : 'nav-link'} px-2`}>
              <Link href="/about" className="flex justify-center items-center gap-2">
                <span className="hidden md:inline-block capitalize">About</span>
              </Link>
            </li>
            <li className={`${pathname === '/exercises' ? 'active-nav-link' : 'nav-link'} px-2`}>
              <Link href="/exercises" className="flex justify-center items-center gap-2">
                <span className=" capitalize">exercises</span>
              </Link>
            </li>
            <li className={`${pathname === '/profile' ? 'active-nav-link' : 'nav-link'} px-2`}>
              <Link href="/profile" className="flex justify-center items-center gap-2">
                <span className="capitalize">profile</span>
              </Link>
            </li>
            <li className={`${pathname === '/contacts' ? 'active-nav-link' : 'nav-link'} px-2`}>
              <Link href="/contacts" className="flex justify-center items-center gap-2">
                <span className="hidden md:inline-block capitalize">Contacts</span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
