import React from 'react';
import Image from 'next/image';

function DiseaseItem(props: any) {
  console.log(props);
  return (
    <div>
      <div className="flex flex-col m-4">
        <Image
          src={props.image}
          alt={props.name}
          width={200}
          height={200}
          style={{ borderRadius: '50%', border: '1px solid black', objectFit: 'cover' }}
        />

        <div
          style={{
            textAlign: 'left',
            marginLeft: '70px',
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
