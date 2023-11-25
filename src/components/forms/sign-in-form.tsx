'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {signIn} from 'next-auth/react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
type FormValues = z.infer<typeof validationSchema>
export function SignInForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submitHandler = async ({email, password}: FormValues) => {
    await signIn('credentials', {email, password})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-2">
        <FormField
          name="email"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="sm">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
