// middleware.ts
import {NextResponse} from 'next/server'

import type {NextRequest} from 'next/server'

export const config = {
  matcher: '/s/:path*',
}

export async function middleware(request: NextRequest) {
  const short = request.url.split('/')[4]
  // add params to this fetch
  const response = await fetch(
    `http://localhost:8001/api/v1/url-shortener/get/${short}?` +
      new URLSearchParams({
        increment: 'true',
      }),
  )
  const data = await response.json()
  const urlData = data.data
  return NextResponse.redirect(urlData.full)
}
