'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { axiosClient } from '@/src/configs/axiosClient';

function PostListLS() {
  const [posts, setPosts] = React.useState<any>([]);
  useEffect(() => {
    async function fetchPost() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:loi-song',
        },
      });
      const { posts: resPost } = res;
      setPosts(resPost);
    }
    fetchPost();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 px-20">
      {posts && posts.length > 0
        ? posts.map((post: any) => (
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
            </Link>
          ))
        : null}
    </div>
  );
}

export default PostListLS;
