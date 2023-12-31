/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function CardVertical({ data }: any) {
  // const date = new Date(data.created_at);
  if (!data) return null;
  return (
    <Link href={`/tin-moi/${data.slug}`}>
      <div
        style={{
          display: 'flex',
          borderRadius: '1rem',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ width: '35%', height: '123px', position: 'relative' }}>
          <Image src={data.feature_image} alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div
          style={{
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            width: '65%',
          }}
        >
          <h3
            style={{ fontWeight: '700', lineHeight: '1.25', fontSize: '1.5rem' }}
            className="text-lg lg:text-xl"
          >
            {data.title}
          </h3>

          <p
            className="line-clamp-2 lg:line-clamp-2 mt-2"
            style={{ textAlign: 'justify', fontSize: '0.9rem', color: 'grey' }}
          >
            {data.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardVertical;
