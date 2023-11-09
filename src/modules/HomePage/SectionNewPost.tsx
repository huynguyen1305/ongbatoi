'use client';

import { Divider } from '@mantine/core';
import { IconCircleArrowRight } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import CardVertical from '@/src/components/CardVertical/CardVertical';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionNewPost() {
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
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/tin-moi">
        <div className="flex justify-between items-center">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            Tin mới
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
      </Link>
      <Divider my="xs" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {posts ? posts.map((post: any) => <CardVertical key={post.id} data={post} />) : null}
      </div>
      <br />
      <br />
    </div>
  );
}

export default SectionNewPost;
