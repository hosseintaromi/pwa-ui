import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import '../styles/index.css';

import { isPWA } from '@/lib/helper';

import Layout, { danaFont } from '@/components/layout';
import { metadata as PWAMetadata } from '@/components/layout/pwa/meta';

import ReactQueryClientContext from '@/@core/contexts/react-query-client-context';
import { pageLevelLocalization } from '@/constant/localization';

const { home: homeLocalization } = pageLevelLocalization;
const mergeMeta = isPWA() ? PWAMetadata : {};
export const metadata: Metadata = {
  title: homeLocalization.title,
  description: homeLocalization.description,
  ...mergeMeta,
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='fa-IR' dir='rtl'>
      <body className={danaFont.className}>
        <ReactQueryClientContext>
          <Layout>{children}</Layout>
        </ReactQueryClientContext>
      </body>
    </html>
  );
}
