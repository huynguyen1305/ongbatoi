'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
