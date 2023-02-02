import useSWR from 'swr'

import { get } from "../utils";

export const useLinkPreviewService = (url: string) => useSWR(
  `/link-preview?url=${url}`,
  get,
)