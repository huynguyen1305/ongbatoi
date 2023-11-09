import React from 'react';
import Image from 'next/image';
import { IconCircleArrowRight } from '@tabler/icons-react';
import { Divider } from '@mantine/core';

// import SectionSKAZ from '@/src/modules/SucKhoeAZ/SectionSKAZ';
import SectionCSTT from '@/src/modules/CarePage/SectionCSTT';

function ChamSocPage() {
  const diseaseList = [
    {
      id: 1,
      name: 'Chăm sóc thể chất',
      description: 'Chăm sóc thể chất',
      image: 'https://picsum.photos/id/810/200',
    },
    {
      id: 2,
      name: 'Chăm sóc tâm thần',
      description: 'Chăm sóc tâm thần',
      image: 'https://picsum.photos/id/857/200',
    },
    {
      id: 3,
      name: 'Chăm sóc tinh thần',
      description: 'Chăm sóc tinh thần',
      image: 'https://picsum.photos/id/75/200',
    },
    {
      id: 4,
      name: 'Lối sống',
      description: 'Lối sống',
      image: 'https://picsum.photos/id/537/200',
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
        Chăm Sóc cuộc sống
      </h2>
      <br />
      <br />
      <div>
        <div className="flex-wrap justify-between pb-8 hidden lg:flex">
          {diseaseList.map((item: any) => (
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
          ))}
        </div>
        <br />
        <div>
          {diseaseList.map((item: any) => (
            <div key={item.id}>
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
              <Divider my="xs" />
              <SectionCSTT />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChamSocPage;
