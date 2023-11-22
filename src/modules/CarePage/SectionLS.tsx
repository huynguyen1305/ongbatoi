'use client';

import React, { useEffect } from 'react';
// import CardVertical from '@/src/components/CardVertical/CardVertical';
import CardHorical from '@/src/components/CardHorical/CardHorical';
import { axiosClient } from '@/src/configs/axiosClient';

function SectionLS() {
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
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-8">
        {posts && posts.length > 0
          ? posts?.splice(0, 6).map((post: any) => (
              <div className="h-[400px]">
                <CardHorical data={post} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default SectionLS;
