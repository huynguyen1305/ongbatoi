import Image from 'next/image';
import React from 'react';
import PostListBLTT from '@/src/modules/SucKhoeAZ/PostListBLTT';
import PostListThuoc from '@/src/modules/SucKhoeAZ/PostListThuoc';
import PostListVaccine from '@/src/modules/SucKhoeAZ/PostListVaccine';
import PostListOther from '@/src/modules/SucKhoeAZ/PostListOther';

function SectionPage({ params }: any) {
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
          {currentDisease?.slug === '/suc-khoe-a-z/benh-ly-theo-tuoi' && <PostListBLTT />}
          {currentDisease?.slug === '/suc-khoe-a-z/thuoc' && <PostListThuoc />}
          {currentDisease?.slug === '/suc-khoe-a-z/vaccine' && <PostListVaccine />}
          {currentDisease?.slug === '/suc-khoe-a-z/van-de-khac' && <PostListOther />}
        </div>
      </section>
    </>
  );
}

export default SectionPage;
