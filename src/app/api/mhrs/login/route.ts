import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { mhrsApi } from '@/configs/api';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  let mhrsToken = cookies().get('mhrsToken')?.value;
  if (mhrsToken) {
    return NextResponse.json(
      {
        message: 'You have already logged in.',
        token: mhrsToken,
      },
      { status: 200 }
    )
  }

  const { data: loginResponse } = await mhrsApi.post('/vatandas/login', {
    kullaniciAdi: username,
    parola: password,
    islemKanali: 'VATANDAS_WEB',
    girisTipi: 'PAROLA',
  })

  if (loginResponse.data) {
    mhrsToken = loginResponse.data.jwt as string
    return NextResponse.json(
      {
        message: 'You have successfully logged in.',
        token: mhrsToken,
      },
      { status: 200 }
    )
  }

  return NextResponse.json({
    message: 'Username or password is wrong.',
  })
}
