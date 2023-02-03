import useSWRMutation from 'swr/mutation'

import { post } from "../utils";

export const useCreateUrlShortenerService = () => useSWRMutation(
  '/url-shortener/create',
  post
)