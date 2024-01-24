import {useQuery} from '@tanstack/react-query'

import {service} from '../axios'

export function useGetWishList({userId}: {userId: string}) {
  return useQuery({
    queryKey: ['useGetWishListKey'],
    queryFn: () => service.get('/wish-list', {params: {userId}}),
    select: response => response.data.data,
  })
}
