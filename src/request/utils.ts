import useSWR, {SWRResponse, RevalidatorOptions, MutatorOptions} from 'swr'
import useSWRMutation, {SWRMutationResponse} from 'swr/mutation'
import {api} from './axios'

export const get = <T>(url: string): Promise<T> =>
  api.get(url).then(res => res.data)

export const post = (url: string, {arg}: any) =>
  api.post(url, {body: arg}).then(res => res.data)

export const patch = (url: string, {arg}: any) =>
  api.patch(url, {body: arg}).then(res => res.data)

export const put = (url: string, {arg}: any) =>
  api.put(url, {body: arg}).then(res => res.data)

export const del = (url: string) => api.delete(url).then(res => res.data)
