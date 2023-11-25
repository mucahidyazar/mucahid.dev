'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

type TValidationSchema = z.infer<typeof validationSchema>

const validationSchema = z.object({
  name: z
    .string()
    .min(3, 'Your name must be at least 3 characters')
    .max(50, 'Your name must be less than 50 characters'),
  email: z.string().optional(),
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters')
    .max(500, 'Message must be less than 500 characters'),
})

export function FeedbacksForm() {
  // const createFeedback = trpc.feedback.createFeedback.useMutation({
  //   onSuccess: () => {
  //     window.location.reload()
  //   },
  // })
  const {register, handleSubmit, formState} = useForm<TValidationSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submit = async (data: TValidationSchema) => {
    // createFeedback.mutate(data)
    console.log('submit', data)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <div className="flex items-center gap-2">
        <input
          className="w-full rounded border border-solid border-white border-opacity-10 bg-transparent bg-opacity-20 p-2 text-gray-300 placeholder-white placeholder-opacity-20 focus:border-none"
          type="text"
          placeholder="Your name"
          {...register('name')}
        />
        <input
          className="w-full rounded border border-solid border-white border-opacity-10 bg-transparent bg-opacity-20 p-2 text-gray-300 placeholder-white placeholder-opacity-20 focus:border-none"
          type="text"
          placeholder="Email (Optional)"
          {...register('email')}
        />
      </div>
      <textarea
        className="min-h-[120px] w-full rounded border border-solid border-white border-opacity-10 bg-transparent bg-opacity-20 p-2 text-gray-300 placeholder-white placeholder-opacity-20 focus:border-none"
        placeholder="Your message"
        {...register('message')}
      />
      {Object.keys(formState.errors).length > 0 && (
        <div className="rounded bg-red-500 p-2 text-xs">
          {Object.values(formState.errors).map(error => (
            <p key={error.message}>{error.message}</p>
          ))}
        </div>
      )}
      <button
        className="ml-auto w-full rounded bg-purple-500 p-2 text-white"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}
