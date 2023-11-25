/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import Script from 'next/script'
import {signIn} from 'next-auth/react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {OneTapComponent} from '@/components/molecules/OneTapComponent'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
type FormValues = z.infer<typeof validationSchema>
export default function Component() {
  const {
    handleSubmit,
    formState: {errors},
    register,
  } = useForm({
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
    <div>
      <form
        className="mx-auto mt-[20%] flex w-96 flex-col gap-2 rounded bg-foreground p-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h3 className="text-background">Sign up</h3>
        <Input
          type="email"
          placeholder="email"
          className="text-background !placeholder-background"
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="password"
          className="text-background !placeholder-background"
          {...register('password')}
        />
        <Button variant="destructive" type="submit">
          Register
        </Button>
        {Object.keys(errors).length > 0 && (
          <div className="text-xs text-red-500">
            {Object.values(errors).map(error => (
              <div key={error.message}>{error.message}</div>
            ))}
          </div>
        )}
      </form>
      <section className="mx-auto mt-[30%] flex w-full flex-col gap-2 sm:w-80">
        <Button onClick={() => signIn('github')}>Sign in by Github</Button>
        <Button onClick={() => signIn('google')}>Sign in by Google</Button>
      </section>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
      <OneTapComponent />
    </div>
  )
}
