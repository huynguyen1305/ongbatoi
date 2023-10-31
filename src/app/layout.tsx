import '../configs/global.scss';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../configs/theme';

import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '@/src/components/AppFooter/AppFooter';

export const metadata = {
  title: 'Ông Bà Tôi',
  description: 'Nursing home for elderly people',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className="appLayoutWrapper">
            <AppHeader />
            <div className="flex-auto">{children}</div>
            <AppFooter />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
