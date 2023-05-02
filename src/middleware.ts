// middleware.ts
import { NextResponse } from 'next/server'

import { API_VERSION } from './request/axios'

import type { NextRequest } from 'next/server'

export const config = {
  matcher: '/s/:path*',
}

export async function middleware(request: NextRequest) {
  const short = request.url.split('/')[4]
  // add params to this fetch
  const response = await fetch(
    `${API_VERSION}/url-shortener/get/${short}?` +
    new URLSearchParams({
      increment: 'true',
    }),
  )
  const data = await response.json()
  const urlData = data.data
  return NextResponse.redirect(urlData.full)
}
