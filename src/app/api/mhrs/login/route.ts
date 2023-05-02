import { NextResponse } from 'next/server';

import { mhrsApi } from '@/configs/api';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  let response = NextResponse.next();

  const { data: loginResponse } = await mhrsApi.post('/vatandas/login', {
    kullaniciAdi: username,
    parola: password,
    islemKanali: 'VATANDAS_WEB',
    girisTipi: 'PAROLA',
  })

  if (loginResponse.data) {
    const mhrsToken = loginResponse.data.jwt
    await response.cookies.set('mhrsToken', mhrsToken);
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
