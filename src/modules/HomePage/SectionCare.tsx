'use client';

import React, { useEffect } from 'react';
import { Divider } from '@mantine/core';
import Link from 'next/link';
import DiseaseItem from '@/src/components/DiseaseItem/DiseaseItem';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionCare() {
  const [postsCSTC, setPostsCSTC] = React.useState<any>([]);
  const [postsTinhT, setPostsTinhT] = React.useState<any>([]);
  const [postsTamT, setPostsTamT] = React.useState<any>([]);
  const [postsLoiS, setPostsLoiS] = React.useState<any>([]);
  useEffect(() => {
    async function fetchCSTC() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:cham-soc-the-chat',
        },
      });
      const { posts: resPost } = res;
      setPostsCSTC(resPost);
    }
    async function fetchTinhT() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:cham-soc-tinh-than',
        },
      });
      const { posts: resPost } = res;
      setPostsTinhT(resPost);
    }
    async function fetchTamT() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:cham-soc-tam-than',
        },
      });
      const { posts: resPost } = res;
      setPostsTamT(resPost);
    }
    async function fetchLoiS() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:loi-song',
        },
      });
      const { posts: resPost } = res;
      setPostsLoiS(resPost);
    }
    fetchCSTC();
    fetchTinhT();
    fetchTamT();
    fetchLoiS();
  }, []);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <Link href="/cham-soc-cuoc-song">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            chăm sóc cuộc sống
          </h3>
        </Link>
      </div>
      <Divider my="xs" />
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[0].image}
            name={diseaseList[0].name}
            description={diseaseList[0].description}
            slug={diseaseList[0].slug}
            posts={postsCSTC}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[1].image}
            name={diseaseList[1].name}
            description={diseaseList[1].description}
            slug={diseaseList[1].slug}
            posts={postsTamT}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[2].image}
            name={diseaseList[2].name}
            description={diseaseList[2].description}
            slug={diseaseList[2].slug}
            posts={postsTinhT}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[3].image}
            name={diseaseList[3].name}
            description={diseaseList[3].description}
            slug={diseaseList[3].slug}
            posts={postsLoiS}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionCare;
