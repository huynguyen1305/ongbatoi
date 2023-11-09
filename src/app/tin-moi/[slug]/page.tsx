import React, { Suspense } from 'react';

import clsx from 'clsx';
import { axiosClient } from '@/src/configs/axiosClient';
import styles from './PostDetail.module.scss';
import TableOfContent from '@/src/modules/TinMoi/TableOfContent';

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const res: any = await axiosClient.get(`/posts/slug/${slug}`);

  const currentPost = res.posts[0];

  return {
    title: `${currentPost.title} | Ông Bà Tôi`,
  };
}

async function PostPageDetail({ params }: any) {
  const { slug } = params;
  const res: any = await axiosClient.get(`/posts/slug/${slug}`);
  const currentPost = res.posts[0];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto px-4 py-14">
          <div className="flex w-full">
            <div className="lg:ml-14 lg:mr-14 flex-auto w-[70%]">
              <h2
                style={{
                  textAlign: 'left',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  fontFamily: 'ui-sans-serif',
                }}
                className="text-2xl lg:text-4xl"
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

            <div className="w-[30%] h-[30vh] hidden lg:block lg:sticky lg:top-[96px] pr-10">
              <TableOfContent currentPost={currentPost} />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default PostPageDetail;
