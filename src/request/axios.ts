import axios, {RawAxiosRequestHeaders} from 'axios'

interface ICreateAxios {
  baseURL: string
  headers: Partial<RawAxiosRequestHeaders> | undefined
}
export function createAxios({baseURL, headers}: ICreateAxios) {
  return axios.create({
    baseURL,
    headers,
  })
}

const DEFAULT_API_URL = 'http://localhost:8001'
const API_URL =
  process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
const VERSION = process.env.VERSION || 'v1'
const API_VERSION = `${API_URL}/api/${VERSION}`

export const rootApi = createAxios({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = createAxios({
  baseURL: API_VERSION,
  headers: {
    'Content-Type': 'application/json',
  },
})
