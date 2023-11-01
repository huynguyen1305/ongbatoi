import React, { Suspense } from 'react';

import clsx from 'clsx';
import { axiosClient } from '@/src/configs/axiosClient';
import styles from './PostDetail.module.scss';

async function PostPageDetail({ params }: any) {
  const { slug } = params;
  const res: any = await axiosClient.get(`/posts/slug/${slug}`);
  const currentPost = res.posts[0];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          style={{
            backgroundImage: `url(${currentPost.feature_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '50vh',
          }}
        />
        <div className="container mx-auto my-8 px-4">
          <h2
            style={{
              textAlign: 'center',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
            className="text-4xl md:text-6xl"
          >
            {currentPost.title}
          </h2>
          <br />
          <br />
          <div
            className={clsx({
              [styles['full-content']]: true,
              'prose lg:prose-xl': true,
            })}
            dangerouslySetInnerHTML={{ __html: currentPost.html }}
          />
        </div>
      </Suspense>
    </>
  );
}

export default PostPageDetail;
