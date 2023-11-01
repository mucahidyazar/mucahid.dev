import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title =
    '🎨 Bekten Usubaliev - Master Kyrgyz Painter Unveiling Human Emotions'
  const description =
    '🎨 Discover the artistic world of Bekten Usubaliev, a renowned Kyrgyz painter known for his unique ability to unveil the hidden emotions and dreams encapsulated within the human spirit.'

  return prepareMetadata({
    title,
    description,
  })
}

export default function Page() {
  return <div id="home">HomePage</div>
}
