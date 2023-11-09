import axios, { RawAxiosRequestHeaders } from 'axios'


interface ICreateAxios {
  baseURL: string
  headers: Partial<RawAxiosRequestHeaders> | undefined
}
function createAxios({ baseURL, headers }: ICreateAxios) {
  return axios.create({
    baseURL,
    headers,
  })
}

const API_URL = ''
const VERSION = ''
const API_VERSION = `${API_URL}/api/${VERSION}`

const rootApi = createAxios({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = createAxios({
  baseURL: API_VERSION,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { API_VERSION, api, createAxios, rootApi }
