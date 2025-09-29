import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
      return [
            {
                  url: 'https://mucahid.dev',
                  lastModified: new Date(),
                  changeFrequency: 'weekly',
                  priority: 1,
            },
            {
                  url: 'https://mucahid.dev/blog',
                  lastModified: new Date(),
                  changeFrequency: 'weekly',
                  priority: 0.8,
            },
            {
                  url: 'https://mucahid.dev/media',
                  lastModified: new Date(),
                  changeFrequency: 'monthly',
                  priority: 0.6,
            },
            {
                  url: 'https://mucahid.dev/media/books',
                  lastModified: new Date(),
                  changeFrequency: 'monthly',
                  priority: 0.5,
            },
            {
                  url: 'https://mucahid.dev/media/movies',
                  lastModified: new Date(),
                  changeFrequency: 'monthly',
                  priority: 0.5,
            },
            {
                  url: 'https://mucahid.dev/media/room',
                  lastModified: new Date(),
                  changeFrequency: 'monthly',
                  priority: 0.4,
            },
            {
                  url: 'https://mucahid.dev/feedbacks',
                  lastModified: new Date(),
                  changeFrequency: 'monthly',
                  priority: 0.5,
            },
      ]
}