import '../configs/global.scss';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../configs/theme';

import AppHeader from '../components/AppHeader/AppHeader';

export const metadata = {
  title: 'Ông Bà Tôi website',
  description: 'Nursing home for elderly people',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
