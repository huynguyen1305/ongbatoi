'use client';

import clsx from 'clsx';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import FeatureItem from './FeatureItem';
import { axiosClient } from '@/src/configs/axiosClient';
import styles from './Swiper.module.scss';

function SectionWelcome() {
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
    <div
      className={clsx({
        'container mx-auto px-4 h-[90vw] lg:h-[50vh]': true,
      })}
    >
      <Swiper
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={styles.cusSwiper}
      >
        {posts
          ? posts.map((post: any) => (
              <SwiperSlide key={post.id} style={{ cursor: 'grab' }}>
                <FeatureItem item={post} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
}

export default SectionWelcome;
