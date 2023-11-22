import React from 'react';
import Image from 'next/image';
import { IconCircleArrowRight } from '@tabler/icons-react';
import { Divider } from '@mantine/core';

import Link from 'next/link';

import SectionBLTT from '@/src/modules/SucKhoeAZ/SectionBLTT';
import SectionThuoc from '@/src/modules/SucKhoeAZ/SectionThuoc';
import SectionVaccine from '@/src/modules/SucKhoeAZ/SectionVaccine';
import SectionOther from '@/src/modules/SucKhoeAZ/SectionOther';

function SucKhoePage() {
  const diseaseList = [
    {
      id: 1,
      name: 'Bệnh lý theo tuổi',
      description: 'Bệnh lý theo tuổi',
      slug: '/suc-khoe-a-z/benh-ly-theo-tuoi',
      image: 'https://picsum.photos/id/870/200',
    },
    {
      id: 2,
      name: 'Thuốc',
      description: 'Thuốc',
      slug: '/suc-khoe-a-z/thuoc',
      image: 'https://picsum.photos/id/827/200',
    },
    {
      id: 3,
      name: 'Vaccine',
      description: 'Vaccine',
      slug: '/suc-khoe-a-z/vaccine',
      image: 'https://picsum.photos/id/7/200',
    },
    {
      id: 4,
      name: 'Vấn Đề Khác',
      description: 'Vấn Đề Khác',
      slug: '/suc-khoe-a-z/van-de-khac',
      image: 'https://picsum.photos/id/37/200',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        style={{
          textAlign: 'center',
          fontWeight: '600',
          textTransform: 'uppercase',
        }}
        className="text-2xl lg:text-4xl"
      >
        Sức Khỏe A - Z
      </h2>
      <br />
      <br />
      <div>
        <div className="flex-wrap justify-between pb-8 hidden lg:flex">
          {diseaseList.map((item: any) => (
            <Link key={item.id} href={item.slug}>
              <div key={item.id} className="flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />

                <div
                  style={{
                    textAlign: 'center',

                    fontSize: '1.25rem',
                    fontWeight: '500',
                    marginTop: '1rem',
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <div>
          {diseaseList.map((item: any) => (
            <div key={item.id}>
              <Link href={item.slug}>
                <div className="flex justify-between items-center">
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconCircleArrowRight style={{ marginRight: '0.5rem' }} />
                    đọc thêm
                  </div>
                </div>
              </Link>
              <Divider my="xs" />
              {item.slug === '/suc-khoe-a-z/benh-ly-theo-tuoi' ? <SectionBLTT /> : null}
              {item.slug === '/suc-khoe-a-z/thuoc' ? <SectionThuoc /> : null}
              {item.slug === '/suc-khoe-a-z/vaccine' ? <SectionVaccine /> : null}
              {item.slug === '/suc-khoe-a-z/van-de-khac' ? <SectionOther /> : null}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SucKhoePage;
