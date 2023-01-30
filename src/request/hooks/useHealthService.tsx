import { rootApi } from '../axios'
import useSWR from "swr"

function query<T>(url: string): Promise<T> {
  return rootApi.get(url).then(res => res.data)
}

export function useHealthService() {
  return useSWR('/health', query)
}
