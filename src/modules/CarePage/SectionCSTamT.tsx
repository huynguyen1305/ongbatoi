'use client';

import React, { useEffect } from 'react';

import { axiosClient } from '@/src/configs/axiosClient';
import CardVertical from '@/src/components/CardVertical/CardVertical';

function SectionCSTamT() {
  const [posts, setPosts] = React.useState<any>([]);
  useEffect(() => {
    async function fetchPost() {
      const res: any = await axiosClient.get('/posts', {
        params: {
          filter: 'tags:cham-soc-tam-than',
        },
      });
      const { posts: resPost } = res;
      setPosts(resPost);
    }
    fetchPost();
  }, []);
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {posts
          ? posts.splice(0, 4).map((post: any) => <CardVertical key={post.id} data={post} />)
          : null}
      </div>
    </div>
  );
}

export default SectionCSTamT;
