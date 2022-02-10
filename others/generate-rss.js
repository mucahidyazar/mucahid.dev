const fs = require('fs')

const axios = require('axios')
const {Feed} = require('feed')

const getArticles = async () => {
  try {
    const {data} = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mucahidyazar`,
    )

    const feed = new Feed({
      id: '0',
      title: 'Articles of Mucahid Yazar on mucahid.dev',
      description: 'This is my personal feed on my own blog!',
      link: 'http://mucahid.dev/rss.xml',
      // language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
      image: 'http://mucahid.dev/logo.png',
      favicon: 'http://mucahid.dev/favicon.ico',
      copyright: 'All rights reserved 2022, Mucahid YAZAR',
      updated: new Date(), // optional, default = today
      generator: 'feed', // optional, default = 'Feed for Node.js'
      // feedLinks: {
      //   json: "https://mucahid.dev/json",
      //   atom: "https://example.com/atom"
      // },
      author: {
        name: 'Mucahid Yazar',
        email: 'mucahidyazar@gmail.com',
        link: 'https://mucahid.dev/links',
      },
    })

    data.items.forEach(item => {
      feed.addItem({
        title: item.title,
        id: item.guid,
        link: `https://mucahid.dev/blog/${item.guid.split('/')[4]}`,
        description: item.description,
        content: item.content,
        date: new Date(item.pubDate),
        image: item.thumbnail,
      })
    })

    const rss = feed.rss2()
    fs.writeFileSync(`${__dirname}/../public/rss.xml`, rss)
  } catch (error) {
    throw error
  }
}

getArticles()
