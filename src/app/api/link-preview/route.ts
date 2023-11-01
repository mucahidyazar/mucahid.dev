import { CheerioAPI, load } from 'cheerio'

function metaTagContent(doc: CheerioAPI, type: string, attr: string) {
  return doc(`meta[${attr}='${type}']`).attr(`content`);
}

function getTitle(doc: CheerioAPI) {
  let title =
    metaTagContent(doc, `og:title`, `property`) ||
    metaTagContent(doc, `og:title`, `name`);
  if (!title) {
    title = doc(`title`).text();
  }
  return title;
}

export async function POST(request: Request) {
  try {
    const res = await request.json()

    const links: string[] = res.links

    const promises = links.map(async (link) => {
      const response = await fetch(link)
      const data = await response.text()
      const $ = load(data as any)

      const title = getTitle($)
      const description = $('meta[name="description"]').attr('content')
      const image =
        $('meta[property="og:image"]').attr('content') ||
        $('meta[name="twitter:image"]').attr('content') ||
        $('meta[itemprop="image"]').attr('content') ||
        '/img/empty-press-image.png'
      const url = $('meta[property="og:url"]').attr('content')

      return { title, description, image, url }
    })

    const results = await Promise.all(promises)
    return (Response as any).json({ data: results })
  } catch (error) {
    console.error(`Error while fetching link preview data: ${error}`)
    return {}
  }
}