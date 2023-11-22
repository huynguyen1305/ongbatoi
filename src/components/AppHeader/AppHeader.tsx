'use client';

import Image from 'next/image';
import Link from 'next/link';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { IconChevronRight, IconSearch, IconCircleChevronDown } from '@tabler/icons-react';
import logo from '@/src/assets/images/logo-ngang.png';
import styles from './AppHeader.module.scss';

export default function AppHeader() {
  const pathname = usePathname();

  const navbar = [
    {
      name: 'Sức khỏe a-z',
      href: '/suc-khoe-a-z',
      children: [
        {
          name: 'Bệnh lý theo tuổi',
          href: '/suc-khoe-a-z/benh-ly-theo-tuoi',
        },
        {
          name: 'Thuốc',
          href: '/suc-khoe-a-z/thuoc',
        },
        {
          name: 'Vaccine',
          href: '/suc-khoe-a-z/vaccine',
        },
        {
          name: 'Vấn Đề Khác',
          href: '/suc-khoe-a-z/van-de-khac',
        },
      ],
    },
    {
      name: 'chăm sóc cuộc sống',
      href: '/cham-soc-cuoc-song',
      children: [
        {
          name: 'Chăm sóc thể chất',
          href: '/cham-soc-cuoc-song/cham-soc-the-chat',
        },
        {
          name: 'Chăm sóc tâm thần',
          href: '/cham-soc-cuoc-song/cham-soc-tam-than',
        },
        {
          name: 'Chăm sóc tinh thần',
          href: '/cham-soc-cuoc-song/cham-soc-tinh-than',
        },
        {
          name: 'Lối sống',
          href: '/cham-soc-cuoc-song/loi-song',
        },
      ],
    },
    {
      name: 'tin mới',
      href: '/tin-moi',
      children: [],
    },
    {
      name: 'Pháp luật',
      href: '/phap-luat',
      children: [],
    },
  ];
  const [selectNav, setSelectNav] = useState<any>(null);

  return (
    <>
      <div
        className="w-full fixed top-0 z-10 bg-white"
        style={{
          backgroundColor: '#FFF',
          boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="container mx-auto px-4 bg-white">
          <div className="flex justify-between items-center my-2 bg-white">
            <Link href="/">
              <Image src={logo} alt="logo" width={234} height={120} />
            </Link>
            <div className="mx-2" style={{ border: '1px solid #006752', borderRadius: '2rem' }}>
              <div className="flex rounded-full px-2 w-full max-w-[600px]">
                <input
                  type="text"
                  className="w-full flex bg-transparent pl-1 pr-2 text-black outline-0"
                  placeholder="Tìm kiếm ..."
                />

                <div style={{ cursor: 'pointer' }}>
                  <IconSearch color="#006752" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#006752]">
          <div
            className="container mx-auto"
            style={{ background: 'transparent', overflowX: 'auto' }}
          >
            <div
              className="flex w-full"
              style={{
                overflowX: 'auto',
                borderLeft: '1px solid white',
                borderRight: '1px solid white',
              }}
            >
              {navbar.map((item) => (
                <div key={item.name} className="flex-shrink-0">
                  <div
                    className={clsx(
                      styles.navItem,
                      'py-4 px-8 text-white flex items-center',
                      pathname === item.href &&
                        'font-bold bg-white border-t-solid border-t-4 border-t-[#006752] text-[#006752]'
                    )}
                    onMouseEnter={() => setSelectNav(item)}
                    onMouseLeave={() => setSelectNav(null)}
                  >
                    <Link
                      href={item.href}
                      style={{
                        color: pathname === item.href ? '#006752' : 'white',
                      }}
                    >
                      {item.name}
                    </Link>
                    <IconCircleChevronDown
                      className={clsx('ml-4 mt-1', {
                        hidden: !item.children.length,
                      })}
                      style={{
                        color: pathname === item.href ? '#006752' : 'white',
                      }}
                      size={26}
                      onClick={() => {
                        setSelectNav((prev: any) => (prev !== null ? null : item));
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center w-full">
              {navbar.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className={clsx(
                      styles.navItem,
                      'py-4 px-8 text-white',
                      pathname === item.href &&
                        'text-[#006752] font-bold bg-white border-t-solid border-t-4 border-t-[#006752]'
                    )}
                    onMouseEnter={() => setSelectNav(item)}
                    onMouseLeave={() => setSelectNav(null)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div> */}
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '0',
              background: 'white',
              color: 'black',
              padding: selectNav && selectNav?.children.length > 0 ? '1rem' : '0',
              transform:
                selectNav && selectNav?.children.length > 0
                  ? 'translateY(100%) translateX(-50%)'
                  : 'translateY(0) translateX(-50%)',
              zIndex: -2,
              opacity: selectNav && selectNav?.children.length > 0 ? 1 : 0,
              boxShadow:
                selectNav && selectNav?.children.length > 0
                  ? '0 4px 4px 0 rgba(0, 0, 0, 0.3)'
                  : 'none',
              transition: 'all 0.3s ease-in-out',
            }}
            className="container"
            onMouseEnter={() => setSelectNav(selectNav)}
            onMouseLeave={() => setSelectNav(null)}
          >
            <div className="w-full h-full px-8 py-4">
              <div className="flex flex-col text-xl font-medium">
                {selectNav?.children.map((item: any) => (
                  <div className="flex my-4 space-x-2 items-center capitalize" key={item.name}>
                    <IconChevronRight color="#006752" stroke={3} />
                    <Link href={item.href}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
