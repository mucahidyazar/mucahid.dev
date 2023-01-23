import useSWRMutation from 'swr/mutation'

import { post } from "../utils";

export const useStopService = () => useSWRMutation(
  '/stock/my-stop',
  post,
)