'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Button} from '../ui/button'
import {Input} from '../ui/input'

const validationSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters'),
  password: z
    .string()
    .min(3, 'Password must be at least 3 characters')
    .max(500, 'Password must be less than 500 characters'),
})

type TValidationSchema = z.infer<typeof validationSchema>

export function MhrsLoginForm() {
  const mutateLogin = useMutation(
    async (data: TValidationSchema) => {
      const response = await axios.post('/api/mhrs/login', data)
      return response.data
    },
    {
      onSuccess: (/*data*/) => {
        // Cookies.set('mhrsToken', data.token)
        window.location.reload()
      },
    },
  )
  const {register, handleSubmit, formState} = useForm<TValidationSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submit = async (data: TValidationSchema) => {
    mutateLogin.mutate(data)
  }

  return (
    <form
      className="mx-auto flex flex-col gap-2 sm:w-full md:w-1/2"
      onSubmit={handleSubmit(submit)}
    >
      <Input
        type="text"
        placeholder="Username"
        className="w-full"
        autoComplete="false"
        {...register('username')}
      />
      <Input
        type="password"
        placeholder="Password"
        className="w-full"
        autoComplete="false"
        {...register('password')}
      />
      {Object.keys(formState.errors).length > 0 && (
        <div className="rounded bg-red-500 p-2 text-xs">
          {Object.values(formState.errors).map(error => (
            <p key={error.message}>{error.message}</p>
          ))}
        </div>
      )}
      <Button className="bg-green-500">Login</Button>
    </form>
  )
}
