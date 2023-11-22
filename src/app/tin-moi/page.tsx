import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

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
            <h3 style={{ fontSize: '5vw', fontWeight: '600' }} className="text-white">
              Tin Mới
            </h3>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 px-20">
            <Suspense fallback={<div>Loading...</div>}>
              {posts &&
                posts.map((post: any) => (
                  <Link href={`/tin-moi/${post.slug}`} key={post.id}>
                    <div
                      style={{
                        display: 'flex',
                        borderRadius: '1rem',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <div style={{ width: '35%', height: '200px', position: 'relative' }}>
                        <Image
                          src={post.feature_image}
                          alt=""
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      <div
                        style={{
                          padding: '0 1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          width: '65%',
                        }}
                      >
                        <h3
                          style={{ lineHeight: '1.25' }}
                          className="text-lg lg:text-xl title-card"
                        >
                          {post.title}
                        </h3>

                        <p
                          className="line-clamp-2 lg:line-clamp-2 mt-2 text-card"
                          style={{ textAlign: 'justify' }}
                        >
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
