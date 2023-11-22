'use client';

import { Skeleton } from '@mantine/core';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionCSTinhT() {
  const [posts, setPosts] = React.useState<any>([]);
  useEffect(() => {
    async function fetchPost() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:cham-soc-tinh-than',
        },
      });
      const { posts: resPost } = res;
      setPosts(resPost);
    }
    fetchPost();
  }, []);
  return (
    <div className=" py-4">
      {posts && posts.length > 0 ? (
        posts.splice(0, 4).map((post: any) => (
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
                <Image src={post.feature_image} alt="" fill style={{ objectFit: 'cover' }} />
              </div>

              <div
                style={{
                  padding: '0 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '65%',
                }}
              >
                <h3 style={{ lineHeight: '1.25' }} className="text-lg lg:text-xl title-card">
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
            <br />
          </Link>
        ))
      ) : (
        <>
          <Skeleton height={120} />
          <br />
          <Skeleton height={120} />
          <br />
          <Skeleton height={120} />
          <br />
          <Skeleton height={120} />
        </>
      )}
    </div>
  );
}

export default SectionCSTinhT;
