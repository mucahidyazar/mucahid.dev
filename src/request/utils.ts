import {AxiosRequestConfig} from 'axios'
import useSWR, {SWRResponse, RevalidatorOptions, MutatorOptions} from 'swr'
import useSWRMutation, {SWRMutationResponse} from 'swr/mutation'
import {api} from './axios'

export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
  api.get(url, config).then(res => res.data)

export const post = (url: string, {arg}: any) =>
  api.post(url, arg).then(res => res.data)

export const patch = (url: string, {arg}: any) =>
  api.patch(url, arg).then(res => res.data)

export const put = (url: string, {arg}: any) =>
  api.put(url, arg).then(res => res.data)

export const del = (url: string) => api.delete(url).then(res => res.data)
