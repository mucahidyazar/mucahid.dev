import useSWRMutation from 'swr/mutation'

import { del } from "../utils";

export const useClearService = () => useSWRMutation(
  '/stock/my-clear',
  del,
)