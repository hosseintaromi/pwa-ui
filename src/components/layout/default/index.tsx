import { ReactNode } from 'react';

import Footer from '@/components/layout/default/footer';
import Header from '@/components/layout/default/header';

type Props = {
  children: ReactNode;
};
export default async function Default({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
