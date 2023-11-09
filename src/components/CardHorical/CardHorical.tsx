/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function CardHorical({ data }: any) {
  return (
    <Link href={`/tin-moi/${data.slug}`}>
      <div className="w-full h-full flex flex-col">
        <div style={{ width: '100%', position: 'relative' }} className="h-[75vw] lg:h-[100%]">
          <Image src={data.feature_image} alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.25' }}>
            {data.title}
          </h3>

          <p className="line-clamp-3 mt-2">{data.excerpt}</p>

          {/* <br />
        <div>
          <small style={{ fontStyle: 'italic' }}>{date.toLocaleDateString('vi')}</small>
          <div className="line-clamp-1">
            {data.tags.map((tag: any) => (
              <span
                style={{
                  marginRight: '0.5rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '1rem',

                  fontSize: '0.8rem',
                }}
                className="bg-teal-100 text-teal-800 "
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </Link>
  );
}

export default CardHorical;
