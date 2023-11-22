'use client';

import { Divider } from '@mantine/core';
import React, { useEffect, useState } from 'react';

function TableOfContent({ currentPost }: any) {
  //   console.log(currentPost.html);
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const dom = new DOMParser().parseFromString(currentPost.html, 'text/html');

    const headingElements = Array.from(dom.querySelectorAll('h3'));

    const getNestedHeadings = (headingElementsTmp: any[]) => {
      const nestedHeadingsTmp: any[] = [];

      headingElementsTmp.forEach((heading: { nodeName?: any; innerText?: any; id?: any }) => {
        const { innerText: title, id } = heading;
        nestedHeadingsTmp.push({ element: heading, title, id });
      });

      return nestedHeadingsTmp;
    };
    const newNestedHeadings: any = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return (
    <div>
      <strong>{currentPost.title}</strong>
      <Divider className="my-3" color="transparent" />
      {nestedHeadings
        ? nestedHeadings.map((nestedHeading: any) => (
            <small key={nestedHeading.id} style={{ display: 'block', marginBottom: '8px' }}>
              <a href={`#${nestedHeading.id}`} title={nestedHeading.id}>
                {nestedHeading.title}
              </a>
              <Divider className="w-1/5" my={8} />
            </small>
          ))
        : null}
    </div>
  );
}

export default TableOfContent;
