import {env} from '@/configs/env.mjs'
import {RoomTemplate} from '@/templates'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Room'
  const description =
    'I will be sharing my room, my desk, my setup, my workspace and my environments with you. If you have a spesific question or a suggestion I will be happy to hear it.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

async function getData() {
  const COFFEE_SETUP_SHEET_ID = '1bQlAwuqJiooigzSbdB3PMk8upqi2QlYYtGtVem3zPdI'
  const WORKSPACE_SHEET_ID = '1z3dhtIIrQ7TyAgMvhBYra0TylK1IuzQY9tMP97quyU8'

  const coffeeSetupRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${COFFEE_SETUP_SHEET_ID}/values/Sheet1!A1:K14?key=${env.GOOGLE_API_KEY}`,
  )
  const workspaceRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${WORKSPACE_SHEET_ID}/values/Sheet1!A1:K14?key=${env.GOOGLE_API_KEY}`,
  )

  return {
    coffeeSetupData: await coffeeSetupRes.json(),
    workspaceData: await workspaceRes.json(),
  }
}

export default async function Page() {
  const sheetData = await getData()

  return (
    <div id="room">
      <RoomTemplate sheetData={sheetData} />
    </div>
  )
}
