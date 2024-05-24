import { headers } from 'next/headers';
import Script from 'next/script';

import { PWA_HOST } from '@/constant/routes';

export default function TagManager() {
  const headersList = headers();
  const host = headersList.get('host');

  return (
    host === PWA_HOST && (
      <div className='container'>
        <Script async defer id='google-analytics'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push( {'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M5C8TKG4');
          `}
        </Script>
      </div>
    )
  );
}
