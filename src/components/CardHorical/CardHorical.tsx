/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function CardHorical({ data }: any) {
  // const date = new Date(data.created_at);
  return (
    <Link href={`/tin-moi/${data.slug}`}>
      <div>
        <img
          src={data.feature_image}
          alt=""
          style={{ objectFit: 'cover' }}
          className="w-[100%] h-[100%]"
        />

        <div
          style={{
            // padding: '1rem',
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Link href={`/tin-moi/${data.slug}`}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.25' }}>
              {data.title}
            </h3>
          </Link>

          <p className="line-clamp-4 mt-2">{data.excerpt}</p>

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
