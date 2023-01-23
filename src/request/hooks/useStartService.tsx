import useSWRMutation from 'swr/mutation'

import { post } from "../utils";

export const useStartService = () => useSWRMutation(
  '/stock/my-start',
  post,
)