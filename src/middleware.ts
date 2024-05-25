import { type NextRequest, NextResponse } from 'next/server';

import { HOME_PAGE } from '@/constant/routes';

export async function middleware(request: NextRequest) {
  // const { url } = request;
  // const hasToken = request.cookies.get('token')?.value;
  // if (request.url.indexOf(SPLASH) > -1) {
  //   if (hasToken) {
  //     return NextResponse.redirect(new URL(HOME_PAGE, url));
  //   }
  //   return NextResponse.next();
  // }
  // if (!hasToken) {
  //   return NextResponse.redirect(new URL('/', url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/all-services/:path*',
    `/gas-station/:path*`,
    `/query/car-history/:path*`,
    `/notification/`,
    `/splash/`,
    `/profile`,
    `/car/:path*`,
  ],
};
