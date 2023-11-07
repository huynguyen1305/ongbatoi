import { Divider } from '@mantine/core';
import { IconCircleArrowRight } from '@tabler/icons-react';
import React, { Suspense } from 'react';
import CardVertical from '@/src/components/CardVertical/CardVertical';
import CardHorical from '@/src/components/CardHorical/CardHorical';

function SectionFeature({ posts }: any) {
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

      <Suspense fallback={<div>Loading...</div>}>
        {/* {posts && posts.map((post: any) => <CardVertical key={post.id} data={post} />)} */}
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="row-span-4">
            <CardHorical data={posts[0]} />
          </div>
          <div>
            <CardVertical data={posts[1]} />
          </div>
          <div className="col-start-2">
            <CardVertical data={posts[2]} />
          </div>
          <div className="col-start-2 row-start-3">
            <CardVertical data={posts[3]} />
          </div>
          <div className="col-start-2 row-start-4">
            <CardVertical data={posts[4]} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default SectionFeature;
