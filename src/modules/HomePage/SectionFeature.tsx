'use client';

import { Divider, Skeleton } from '@mantine/core';
import { IconCircleArrowRight } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import CardVertical from '@/src/components/CardVertical/CardVertical';
import CardHorical from '@/src/components/CardHorical/CardHorical';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionFeature() {
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

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-4 gap-5">
          <div className=" lg:row-span-4" style={{ width: '100%', height: '100%' }}>
            <CardHorical data={posts[0]} />
          </div>
          <div className="">
            <CardVertical data={posts[1]} />
          </div>
          <div className="lg:col-start-2">
            <CardVertical data={posts[2]} />
          </div>
          <div className="lg:col-start-2 lg:row-start-3">
            <CardVertical data={posts[3]} />
          </div>
          <div className="lg:col-start-2 lg:row-start-4">
            <CardVertical data={posts[4]} />
          </div>
        </div>
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

export default SectionFeature;
