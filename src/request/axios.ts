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
const SERVICE_URL = 'http://localhost:8001/api/v1'
const VERSION = ''
const API = `${API_URL}/api/${VERSION}`

const rootApi = createAxios({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = createAxios({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
})

const service = createAxios({
  baseURL: SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { API, api, createAxios, rootApi, service }
