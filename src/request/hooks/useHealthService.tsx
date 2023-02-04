import useSWR from "swr"

import { rootApi } from '../axios'

function query<T>(url: string): Promise<T> {
  return rootApi.get(url).then(res => res.data)
}

export function useHealthService() {
  return useSWR('/health', query)
}
