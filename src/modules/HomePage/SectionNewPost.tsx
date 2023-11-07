import { Divider } from '@mantine/core';
import { IconCircleArrowRight } from '@tabler/icons-react';
import React, { Suspense } from 'react';
import CardVertical from '@/src/components/CardVertical/CardVertical';

function SectionNewPost({ posts }: any) {
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
      <Divider my="xs" />
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8">
        <Suspense fallback={<div>Loading...</div>}>
          {posts && posts.map((post: any) => <CardVertical key={post.id} data={post} />)}
        </Suspense>
      </div>
    </div>
  );
}

export default SectionNewPost;
