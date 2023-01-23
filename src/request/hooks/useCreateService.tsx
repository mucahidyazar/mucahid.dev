import useSWRMutation from 'swr/mutation'

import { post } from "../utils";

export const useCreateService = () => useSWRMutation(
  '/stock/my-create',
  post
)