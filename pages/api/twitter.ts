import type {NextApiRequest, NextApiResponse} from 'next'
import Twitter from 'twitter'

var client = new Twitter({
  consumer_key: 'fyoLAfjFsTjaLFYkucwzP5szb',
  consumer_secret: 'j6XD7K9PAchgsgLlyaqrDLGXhlBYbNYE0VdZYojBYS2f9Gakdg',
  access_token_key: '1184931917449383937-4kiNvXSv9A20QMvWiMfyU6A2pW8qti',
  access_token_secret: 'dLAvfKQqoAV7Q4ZsLoFIY0dfE9sU8PigyFu0CUanK7Mzu',
})

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  var params = {screen_name: 'mucahidyazar'}
  client.get(
    'statuses/user_timeline',
    params,
    function (error, tweets, response) {
      if (!error) {
        res.status(200).json({tweets})
      }
    },
  )
}
