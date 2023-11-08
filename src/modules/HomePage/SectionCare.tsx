'use client';

import React, { useEffect } from 'react';
import { Divider } from '@mantine/core';
import DiseaseItem from '@/src/components/DiseaseItem/DiseaseItem';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionCare() {
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
      <div className="flex justify-between items-center">
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            textTransform: 'uppercase',
          }}
        >
          chăm sóc cuộc sống
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

export default SectionCare;
