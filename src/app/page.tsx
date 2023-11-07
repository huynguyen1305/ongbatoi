import { Divider } from '@mantine/core';

import { IconCircleArrowRight } from '@tabler/icons-react';
import DiseaseItem from '@/src/components/DiseaseItem/DiseaseItem';

import { axiosClient } from '../configs/axiosClient';
import SectionWelcome from '../modules/HomePage/SectionWelcome';
import SectionFeature from '../modules/HomePage/SectionFeature';
import SectionNewPost from '../modules/HomePage/SectionNewPost';

export const metadata = {
  title: 'Trang Chủ | Ông Bà Tôi',
};

const diseaseList = [
  {
    id: 1,
    name: 'Benh 1',
    description: 'aaaa',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Benh 2',
    description: 'Benh 2',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'Benh 3',
    description: 'Benh 3',
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    name: 'Benh 4',
    description: 'Benh 4',
    image: 'https://picsum.photos/200',
  },
];

export default async function HomePage() {
  const res: any = await axiosClient.get('/posts', {
    params: {
      limit: 10,
    },
  });
  const { posts } = res;
  // console.log(posts);
  return (
    <>
      <section>
        <SectionWelcome />
      </section>

      <section>
        <SectionFeature posts={posts} />
      </section>
      <section>
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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {diseaseList.map((disease) => (
              <DiseaseItem
                key={disease.id}
                name={disease.name}
                description={disease.description}
                image={disease.image}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <SectionNewPost posts={posts} />
      </section>
    </>
  );
}
