import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

import { mhrsApi } from '@/configs/api';

export async function GET() {
  const cookieStore = cookies();
  const mhrsToken = cookieStore.get('mhrsToken');

  const { data: meResponse } = await mhrsApi.get('/vatandas/vatandas/hasta-bilgisi', {
    headers: {
      Authorization: `Bearer ${mhrsToken?.value}`,
      Accept: 'application/json',
    }
  })

  if (meResponse?.data) {
    return NextResponse.json({
      message: 'You have successfully logged in.',
      data: meResponse?.data,
    })
  }

  return NextResponse.json({
    message: 'Username or password is wrong.',
  })
}
