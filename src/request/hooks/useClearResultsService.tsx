import useSWRMutation from 'swr/mutation'

import { del } from "../utils";

export const useClearResultsService = () => useSWRMutation(
  '/stock/my-clear-results',
  del,
)