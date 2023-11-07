/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function CardVertical({ data }: any) {
  // const date = new Date(data.created_at);
  return (
    <Link href={`/bai-viet/${data.slug}`}>
      <div
        style={{
          display: 'flex',
          borderRadius: '1rem',

          // border: '1px solid rgba(0,0,0,0.1)',
        }}
        // className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
      >
        <img
          src={data.feature_image}
          alt=""
          style={{ objectFit: 'cover' }}
          className="w-[30%] h-[100%]"
        />

        <div
          style={{
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Link href={`/bai-viet/${data.slug}`}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.25' }}>
              {data.title}
            </h3>
          </Link>

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

export default CardVertical;
