import {useMutation} from '@tanstack/react-query'

import {service} from '../axios'

export function useWishListCreate() {
  return useMutation({
    mutationFn: data => service.post('/wish-list/create', data),
  })
}
