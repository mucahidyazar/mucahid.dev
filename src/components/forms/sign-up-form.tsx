'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {signUpUser} from '@/actions/user'
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

const validationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(data => {
    return data.confirmPassword === data.password
  })
type FormValues = z.infer<typeof validationSchema>
export function SignUpForm() {
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submitHandler = async ({email, password}: FormValues) => {
    try {
      await signUpUser({email, password})
      router.push('/sign-in')
    } catch (error) {
      return error
    }
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
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input placeholder="repassword" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </Form>
  )
}
