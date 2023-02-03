import useSWR from 'swr'

import { get } from "../utils";

export const useLinkPreviewService = (
  url: string,
  options: { enabled: boolean } = { enabled: true }
) => {
  return useSWR(
    options?.enabled ? `/link-preview?url=${url}` : null,
    get,
  )
}