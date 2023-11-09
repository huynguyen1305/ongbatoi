import React from 'react';
import Image from 'next/image';
import { IconCircleArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

function DiseaseItem(props: any) {
  return (
    <div className="mx-auto">
      <div className="flex flex-col m-2">
        <Link href={`${props.slug}`}>
          <div className="flex justify-between items-center">
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                borderLeft: '8px solid green',

                paddingLeft: '0.5rem',
              }}
            >
              {props.name}
            </div>
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
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 mt-2">
          {props.posts
            ? props.posts.slice(0, 3).map((post: any, idx: number) => {
                if (idx === 0) {
                  return (
                    <Link key={post.id} href={`/tin-moi/${post.slug}`}>
                      <div
                        key={post.id}
                        style={{
                          padding: '1rem 0',
                          borderBottom: '1px solid #ced4da',
                        }}
                      >
                        <div style={{ width: '100%', position: 'relative' }} className="h-[200px]">
                          <Image
                            src={post.feature_image}
                            alt=""
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <h3
                          style={{ fontWeight: '500', lineHeight: '1.25', marginTop: '0.5rem' }}
                          className="text-lg "
                        >
                          {post.title}
                        </h3>
                        <p className="line-clamp-2 mt-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  );
                }
                return (
                  <Link key={post.id} href={`/tin-moi/${post.slug}`}>
                    <div
                      key={post.id}
                      style={{
                        borderBottom: '1px solid #ced4da',
                      }}
                    >
                      <h3
                        style={{ fontWeight: '500', lineHeight: '1.55', margin: '0.5rem 0' }}
                        className="text-lg "
                      >
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default DiseaseItem;
