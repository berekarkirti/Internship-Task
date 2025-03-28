import { NextResponse } from 'next/server';

export function middleware(request)
{
 
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/about/')) 
  {
    const id = pathname.split('/about/')[1];

    if (!id || isNaN(id)) 
    {
      return NextResponse.redirect(new URL('/error', request.url));
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/about/:id'], 
};
