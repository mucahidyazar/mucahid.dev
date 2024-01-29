'use client'
import {zodResolver} from '@hookform/resolvers/zod'
import {SearchIcon, Settings} from 'lucide-react'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {Badge} from '../ui/badge'
import {Button} from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {Input} from '../ui/input'

type SearchProps = {
  filters?: string[]
  onSubmit?: (searchText: string) => void
  placeholder: string
  settingsContent?: React.ReactNode
}
export default function Search({
  filters,
  onSubmit,
  placeholder,
  settingsContent,
}: SearchProps) {
  const [isPending, setIsPending] = useState(false)

  const validationSchema = z.object({
    searchText: z.string().url(),
  })
  type FormValues = z.infer<typeof validationSchema>
  const form = useForm({
    defaultValues: {
      searchText: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const submitHandler = async ({searchText}: FormValues) => {
    setIsPending(true)
    await onSubmit?.(searchText)
    setIsPending(false)
  }

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={form.handleSubmit(submitHandler)}
    >
      <div className="relative">
        <Input
          placeholder={placeholder}
          {...form.register('searchText')}
          className="h-12"
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center gap-2">
          {settingsContent && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  size="sm"
                  type="submit"
                  variant="ghost"
                  className="translate-x-4"
                >
                  <Settings size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>{settingsContent}</DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button
            size="sm"
            type="submit"
            variant="ghost"
            disabled={isPending}
            isLoading={isPending}
          >
            <SearchIcon size={16} />
          </Button>
        </div>
      </div>
      {filters?.map(filter => (
        <Badge key={filter} className="flex w-fit items-center gap-2">
          <span>{filter}</span>
        </Badge>
      ))}
    </form>
  )
}
