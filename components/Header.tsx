'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/exercises', label: 'exercises' },
  { href: '/profile', label: 'profile' },
  // Hidden on small screens to save space.
  { href: '/contacts', label: 'Contacts', className: 'hidden md:block' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="w-full flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-extrabold text-black sm:text-5xl font-heading uppercase"
        >
          zonixx
        </Link>
        <ul className=" md:w-[500px] flex justify-end items-center gap-2 md:gap-6">
          {navLinks.map(({ href, label, className = '' }) => (
            <li
              key={href}
              className={`${pathname === href ? 'active-nav-link' : 'nav-link'} px-2 ${className}`}
            >
              <Link
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className="flex justify-center items-center gap-2"
              >
                <span className="capitalize">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
