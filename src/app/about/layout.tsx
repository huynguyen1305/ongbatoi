import React from 'react';

export const metadata = {
  title: 'About Page | Ông Bà Tôi website',
  description: 'Nursing home for elderly people',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <div>This is Layout About</div>
      <>{children}</>
    </>
  );
}
