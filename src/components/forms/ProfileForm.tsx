'use client'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import z from 'zod'

import {updateUser} from '@/actions/user'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {useServerAction} from '@/hooks'

type ProfileFormProps = {
  defaultValues: {
    name: string
    email: string
    mhrsId: string
    mhrsPassword: string
  }
}
const validationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mhrsId: z.string(),
  mhrsPassword: z.string(),
})

type TValidationSchema = z.infer<typeof validationSchema>
export default function ProfileForm({defaultValues}: ProfileFormProps) {
  const [action, isPending] = useServerAction(updateUser)
  const form = useForm<TValidationSchema>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  })

  return (
    <form
      className="mt-4 flex flex-col gap-6 bg-foreground p-4"
      onSubmit={form.handleSubmit(data => {
        action({
          user: {
            name: data.name,
            email: data.email,
          },
          mhrsAccount: {
            id: data.mhrsId,
            password: data.mhrsPassword,
          },
        })
      })}
    >
      <div className="flex flex-col gap-2">
        <h2>Account</h2>
        <Input
          placeholder="Name"
          className="rounded border-gray-700 text-gray-700"
          {...form.register('name')}
        />
        <Input
          placeholder="Email"
          className="rounded border-gray-700 text-gray-700"
          {...form.register('email')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2>MHRS Account</h2>
        <Input
          placeholder="MHRS Email/TC"
          className="rounded border-gray-700 text-gray-700"
          {...form.register('mhrsId')}
        />
        <Input
          placeholder="MHRS Password"
          className="rounded border-gray-700 text-gray-700"
          {...form.register('mhrsPassword')}
        />
      </div>
      <Button variant="destructive" isLoading={isPending} disabled={isPending}>
        Update
      </Button>
    </form>
  )
}
