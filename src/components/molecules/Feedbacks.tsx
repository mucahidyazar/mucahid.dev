'use client'

import {trpc} from '@/trpc/trpc'
import {cn} from '@/utils'

const FEEDBACK = {
  active: 'active',
  in_progress: 'in_progress',
}

interface IFeedback {
  id: string
  name: string
  message: string
  status: 'active' | 'in_progress'
  createdAt: Date
}
interface IFeedbacksProps {
  feedbacks: IFeedback[]
  isAdmin?: boolean
}
export function Feedbacks({feedbacks, isAdmin}: IFeedbacksProps) {
  const updateFeedback = trpc.feedback.updateFeedback.useMutation({
    onSuccess: () => {
      window.location.reload()
    },
  })
  const deleteFeedback = trpc.feedback.deleteFeedback.useMutation({
    onSuccess: () => {
      window.location.reload()
    },
  })

  const updateVisibility = (input: {
    id: string
    status: 'in_progress' | 'active'
  }) => {
    updateFeedback.mutate(input)
  }

  const deleteFeedbackHandler = ({id}: {id: string}) => {
    deleteFeedback.mutate({id})
  }

  return (
    <ul className="flex flex-col gap-2 -translate-y-14">
      {feedbacks.map(feedback => (
        <li
          key={feedback.id}
          className="p-4 bg-gray-400 bg-opacity-20 rounded-md hover:bg-opacity-30"
        >
          <div
            className={cn(
              'flex flex-col gap-3',
              feedback.status === FEEDBACK.in_progress && 'opacity-50',
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 min-w-[32px] min-h-[32px] bg-gray-300 rounded font-bold text-purple-500 grid place-content-center uppercase">
                  {/* {feedback.name[0]}{feedback.name[1]} */}
                  {feedback.name.slice(0, 2)}
                </div>
                <p className="font-semibold">{feedback.name}</p>
              </div>
              <p className="text-gray-400 text-sm">
                {feedback.createdAt.toLocaleString('en-us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2"></div>
              <p className="text-gray-400 text-sm">{feedback.message}</p>
            </div>
          </div>
          {isAdmin && (
            <div className="text-xs flex justify-end items-center gap-4">
              <button
                onClick={() => {
                  updateVisibility({
                    id: feedback.id,
                    status: (feedback.status === FEEDBACK.in_progress
                      ? FEEDBACK.active
                      : FEEDBACK.in_progress) as keyof typeof FEEDBACK,
                  })
                }}
              >
                {feedback.status === FEEDBACK.in_progress ? 'Show' : 'Hide'}
              </button>
              <button
                onClick={() => {
                  deleteFeedbackHandler({
                    id: feedback.id,
                  })
                }}
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
