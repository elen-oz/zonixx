"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul className="w-full flex justify-between items-center">
          <li className='text-3xl font-extrabold text-black sm:text-5xl font-heading uppercase'>zonixx</li>
          <li
            className={`${
              pathname === "/exercises"
                ? "font-semibold bg-white rounded-t-xl"
                : ""
            } pt-0 pb-6 sm:pt-3 sm:pr-8 sm:pl-4`}
          >
            <Link
              href="/exercises"
              className="flex justify-center items-center gap-2"
            >
              <span className="hidden sm:inline-block capitalize">
                exercises
              </span>
            </Link>
          </li>
          <li
            className={`${
              pathname === "/profile"
                ? "font-semibold bg-white rounded-t-xl"
                : ""
            } pt-0 pb-6 sm:pt-3 sm:pr-8 sm:pl-4`}
          >
            <Link
              href="/profile"
              className="flex justify-center items-center gap-2"
            >
              <span className="hidden sm:inline-block capitalize">profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
