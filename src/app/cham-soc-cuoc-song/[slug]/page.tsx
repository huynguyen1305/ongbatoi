import Image from 'next/image';
import React from 'react';
import PostListBLTT from '@/src/modules/SucKhoeAZ/PostListBLTT';

function SectionPage({ params }: any) {
  const diseaseList = [
    {
      id: 1,
      name: 'Chăm sóc thể chất',
      description: 'Chăm sóc thể chất',
      slug: 'cham-soc-the-chat',
      image: 'https://picsum.photos/id/810/200',
    },
    {
      id: 2,
      name: 'Chăm sóc tâm thần',
      description: 'Chăm sóc tâm thần',
      slug: 'cham-soc-tam-than',
      image: 'https://picsum.photos/id/857/200',
    },
    {
      id: 3,
      name: 'Chăm sóc tinh thần',
      description: 'Chăm sóc tinh thần',
      slug: 'cham-soc-tinh-than',
      image: 'https://picsum.photos/id/75/200',
    },
    {
      id: 4,
      name: 'Lối sống',
      slug: 'loi-song',
      description: 'Lối sống',
      image: 'https://picsum.photos/id/537/200',
    },
  ];
  const { slug } = params;
  const currentDisease = diseaseList.find((disease) => disease.slug === slug);
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
          <PostListBLTT />
        </div>
      </section>
    </>
  );
}

export default SectionPage;
