import { Suspense } from 'react';
import { Divider } from '@mantine/core';

import { IconCircleArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import CardVertical from '@/src/components/CardVertical/CardVertical';

import { axiosClient } from '@/src/configs/axiosClient';
import homeWelcomeImage from '@/src/assets/images/home-welcome.png';

export const metadata = {
  title: 'Bài Viết | Ông Bà Tôi',
};

export default async function BaiVietPage() {
  const res: any = await axiosClient.get('/posts', {
    params: {
      limit: 100,
    },
  });
  const { posts } = res;

  return (
    <>
      <section>
        <div className="w-full h-[30vh]" style={{ position: 'relative' }}>
          <Image
            src={homeWelcomeImage}
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
              Bài Viết
            </h3>
          </div>
        </div>
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
              bài viết nổi bật
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
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              {posts && posts.map((post: any) => <CardVertical key={post.id} data={post} />)}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
