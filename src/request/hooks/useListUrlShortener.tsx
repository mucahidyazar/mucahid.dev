import useSWR from 'swr'

import { get } from "../utils";

export const useListUrlShortener = () => useSWR(
  '/url-shortener/get',
  get,
)