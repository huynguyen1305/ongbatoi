'use client';

import React, { useEffect } from 'react';
import { Divider } from '@mantine/core';
import Link from 'next/link';
import DiseaseItem from '@/src/components/DiseaseItem/DiseaseItem';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionDisease() {
  const [postsBLTT, setPostsBLTT] = React.useState<any>([]);
  const [postsThuoc, setPostsThuoc] = React.useState<any>([]);
  const [postsVaccine, setPostsVaccine] = React.useState<any>([]);
  const [postsOther, setPostsOther] = React.useState<any>([]);
  useEffect(() => {
    async function fetchBLTT() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:benh-ly-theo-tuoi',
        },
      });
      const { posts: resPost } = res;
      setPostsBLTT(resPost);
    }
    async function fetchThuoc() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:thuoc',
        },
      });
      const { posts: resPost } = res;
      setPostsThuoc(resPost);
    }
    async function fetchVaccine() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:vaccine',
        },
      });
      const { posts: resPost } = res;
      setPostsVaccine(resPost);
    }
    async function fetchOther() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:van-de-khac',
        },
      });
      const { posts: resPost } = res;
      setPostsOther(resPost);
    }
    fetchBLTT();
    fetchThuoc();
    fetchVaccine();
    fetchOther();
  }, []);

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
      <div className="flex justify-between items-center">
        <Link href="/suc-khoe-a-z">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            sức khỏe a - z
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
            posts={postsBLTT}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[1].image}
            name={diseaseList[1].name}
            description={diseaseList[1].description}
            slug={diseaseList[1].slug}
            posts={postsThuoc}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[2].image}
            name={diseaseList[2].name}
            description={diseaseList[2].description}
            slug={diseaseList[2].slug}
            posts={postsVaccine}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <DiseaseItem
            image={diseaseList[3].image}
            name={diseaseList[3].name}
            description={diseaseList[3].description}
            slug={diseaseList[3].slug}
            posts={postsOther}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionDisease;
