'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import logo from '@/src/assets/images/logo.png';
import styles from './AppHeader.module.scss';

export default function AppHeader() {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  const navbar = [
    {
      name: 'Sức khỏe a-z',
      href: 'suc-khoe-a-z',
    },
    {
      name: 'chăm sóc cuộc sống',
      href: 'cham-soc-cuoc-song',
    },
    {
      name: 'tin mới',
      href: 'tin-moi',
    },
    {
      name: 'Về chúng tôi',
      href: 've-chung-toi',
    },
    {
      name: 'liên hệ',
      href: 'lien-he',
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowNav(window.scrollY > 200);
      window.addEventListener('scroll', () => setShowNav(window.scrollY > 200));
    }
  }, []);
  return (
    <>
      <div
        className="w-full h-20 fixed top-0 z-10"
        style={{
          backgroundColor: showNav ? '#FFF' : 'transparent',
          boxShadow: showNav ? '0 4px 8px 0 rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <div
                style={{
                  width: 'auto',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Image src={logo} alt="logo" width={60} height={60} />
                </div>

                <h1
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    textTransform: 'uppercase',
                    marginLeft: '0.5rem',
                  }}
                >
                  ông bà tôi
                </h1>
              </div>
            </Link>

            <ul className="hidden md:flex">
              {navbar.map((item) => (
                <li
                  key={item.name}
                  className={clsx({
                    [styles.active]: pathname.includes(item.href),
                    [styles.navItem]: true,
                  })}
                >
                  <Link href={item.href}>
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
