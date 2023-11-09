import Image from 'next/image';
import React from 'react';

import PostListCSTC from '@/src/modules/CarePage/PostListCSTC';
import PostListTamT from '@/src/modules/CarePage/PostListCSTamT';
import PostListTinhT from '@/src/modules/CarePage/PostListCSTinhT';
import PostListLS from '@/src/modules/CarePage/PostListLoiSong';

function SectionPage({ params }: any) {
  const diseaseList = [
    {
      id: 1,
      name: 'Chăm sóc thể chất',
      description: 'Chăm sóc thể chất',
      slug: '/cham-soc-cuoc-song/cham-soc-the-chat',
      image: 'https://picsum.photos/id/810/200',
    },
    {
      id: 2,
      name: 'Chăm sóc tâm thần',
      description: 'Chăm sóc tâm thần',
      slug: '/cham-soc-cuoc-song/cham-soc-tam-than',
      image: 'https://picsum.photos/id/857/200',
    },
    {
      id: 3,
      name: 'Chăm sóc tinh thần',
      description: 'Chăm sóc tinh thần',
      slug: '/cham-soc-cuoc-song/cham-soc-tinh-than',
      image: 'https://picsum.photos/id/75/200',
    },
    {
      id: 4,
      name: 'Lối sống',
      description: 'Lối sống',
      slug: '/cham-soc-cuoc-song/loi-song',
      image: 'https://picsum.photos/id/537/200',
    },
  ];
  const { slug } = params;
  const currentDisease = diseaseList.find((disease) => disease.slug.includes(slug));
  if (!currentDisease) return <div>Not found</div>;
  return (
    <>
      <section>
        <div className="w-full h-[30vh]" style={{ position: 'relative' }}>
          <Image
            src={currentDisease?.image}
            alt="home-welcome"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h3 style={{ fontSize: '5vw', fontWeight: '600' }} className="text-teal-300">
              {currentDisease?.name}
            </h3>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-8">
          {currentDisease?.slug === '/cham-soc-cuoc-song/cham-soc-the-chat' && <PostListCSTC />}
          {currentDisease?.slug === '/cham-soc-cuoc-song/cham-soc-tam-than' && <PostListTamT />}
          {currentDisease?.slug === '/cham-soc-cuoc-song/cham-soc-tinh-than' && <PostListTinhT />}
          {currentDisease?.slug === '/cham-soc-cuoc-song/loi-song' && <PostListLS />}
        </div>
      </section>
    </>
  );
}

export default SectionPage;
