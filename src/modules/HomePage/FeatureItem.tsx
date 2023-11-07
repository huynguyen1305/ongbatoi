import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FeatureItem({ item }: any) {
  console.log('item', item);

  return (
    <div className="w-full h-full" style={{ position: 'relative' }}>
      <Image
        src={item.feature_image}
        fill
        alt={item.title}
        style={{ objectFit: 'cover', position: 'absolute', inset: '0', zIndex: '0' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: '1',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          zIndex: '2',
          bottom: 0,
          left: 0,
        }}
      >
        <div
          style={{
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
          }}
          className="m-6"
        >
          <Link href={`/tin-moi/${item.slug}`}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '1.25' }}>
              {item.title}
            </h3>
            <p className="line-clamp-3 mt-2" style={{ textAlign: 'justify' }}>
              {item.excerpt}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
