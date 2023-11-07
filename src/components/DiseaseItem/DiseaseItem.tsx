import React from 'react';
import Image from 'next/image';

function DiseaseItem(props: any) {
  return (
    <div className="mx-auto">
      <div className="flex flex-col m-4">
        <Image
          src={props.image}
          alt={props.name}
          width={200}
          height={200}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />

        <div
          style={{
            textAlign: 'center',

            fontSize: '1.25rem',
            fontWeight: '500',
            marginTop: '1rem',
          }}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default DiseaseItem;
