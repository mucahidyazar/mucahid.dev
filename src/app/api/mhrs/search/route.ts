// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import schedule from 'node-schedule';

// import { mhrsApi } from '@/configs/api';

export async function GET() {
  // const cookieStore = cookies();
  // const mhrsToken = cookieStore.get('mhrsToken');

  // const { data: meResponse } = await mhrsApi.get('/vatandas/vatandas/hasta-bilgisi', {
  //   headers: {
  //     Authorization: `Bearer ${mhrsToken?.value}`,
  //     Accept: 'application/json',
  //   }
  // })

  // if (meResponse?.data) {
  //   return NextResponse.json({
  //     message: 'You have successfully logged in.',
  //     data: meResponse?.data,
  //   })
  // }

  // test schedule jobs
  const CRON_JOB_NAME = "MHRS_SEARCH"

  const isJobExist = schedule.scheduledJobs[CRON_JOB_NAME]
  if (!isJobExist) {

    schedule.scheduleJob(CRON_JOB_NAME, '*/5 * * * * *', function () {
      console.log('This will run every 5 seconds!')
    })
  }

  return NextResponse.json({
    message: 'Search is started.',
  })
}
