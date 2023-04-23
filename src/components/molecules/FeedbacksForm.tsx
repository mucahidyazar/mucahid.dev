'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {trpc} from '@/trpc/trpc'

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
  const createFeedback = trpc.feedback.createFeedback.useMutation({
    onSuccess: () => {
      window.location.reload()
    },
  })
  const {register, handleSubmit, formState} = useForm<TValidationSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submit = async (data: TValidationSchema) => {
    createFeedback.mutate(data)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <div className="flex items-center gap-2">
        <input
          className="w-full p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none"
          type="text"
          placeholder="Your name"
          {...register('name')}
        />
        <input
          className="w-full p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none"
          type="text"
          placeholder="Email (Optional)"
          {...register('email')}
        />
      </div>
      <textarea
        className="w-full min-h-[120px] p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none"
        placeholder="Your message"
        {...register('message')}
      />
      {Object.keys(formState.errors).length > 0 && (
        <div className="bg-red-500 p-2 rounded text-xs">
          {Object.values(formState.errors).map(error => (
            <p key={error.message}>{error.message}</p>
          ))}
        </div>
      )}
      <button
        className="w-full p-2 rounded bg-purple-500 text-white ml-auto"
        type="submit"
        disabled={createFeedback.isLoading}
      >
        Send
      </button>
    </form>
  )
}
