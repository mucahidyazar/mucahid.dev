import useSWR from 'swr'

import { get } from "../utils";

export const useListService = () => useSWR(
  '/stock/my-list',
  get,
  { refreshInterval: 10000 }
)