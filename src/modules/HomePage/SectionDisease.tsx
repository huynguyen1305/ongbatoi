'use client';

import React, { useEffect } from 'react';
import { Divider } from '@mantine/core';
import DiseaseItem from '@/src/components/DiseaseItem/DiseaseItem';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionDisease() {
  const [posts, setPosts] = React.useState<any>([]);
  useEffect(() => {
    async function fetchPost() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          limit: 10,
        },
      });
      const { posts: resPost } = res;
      setPosts(resPost);
    }
    fetchPost();
  }, []);
  const diseaseList = [
    {
      id: 1,
      name: 'Bệnh lý theo tuổi',
      description: 'Bệnh lý theo tuổi',
      image: 'https://picsum.photos/id/870/200',
    },
    {
      id: 2,
      name: 'Thuốc',
      description: 'Thuốc',
      image: 'https://picsum.photos/id/827/200',
    },
    {
      id: 3,
      name: 'Vaccine',
      description: 'Vaccine',
      image: 'https://picsum.photos/id/7/200',
    },
    {
      id: 4,
      name: 'Vấn Đề Khác',
      description: 'Vấn Đề Khác',
      image: 'https://picsum.photos/id/37/200',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            textTransform: 'uppercase',
          }}
        >
          sức khỏe a - z
        </h3>
      </div>
      <Divider my="xs" />
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[0].image}
            name={diseaseList[0].name}
            description={diseaseList[0].description}
            posts={posts}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[1].image}
            name={diseaseList[1].name}
            description={diseaseList[1].description}
            posts={posts}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[2].image}
            name={diseaseList[2].name}
            description={diseaseList[2].description}
            posts={posts}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[3].image}
            name={diseaseList[3].name}
            description={diseaseList[3].description}
            posts={posts}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionDisease;
