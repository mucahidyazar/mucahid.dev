import axios from 'axios'
import type {NextApiRequest, NextApiResponse} from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {}
