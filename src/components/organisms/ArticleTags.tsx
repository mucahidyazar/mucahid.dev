'use client'

import {PlusIcon} from 'lucide-react'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'

import {Option, initialTags} from '@/mocks/blog'
import {generateUrl} from '@/utils'

import {EditableText} from '../atoms/EditableText'
import {SectionLink} from '../molecules/SectionLink'
import {Button} from '../ui/button'

type ArticleTagsProps = {
  params: Record<string, string>
  tags?: Option[]
}
export function ArticleTags({params = {}, tags = []}: ArticleTagsProps) {
  const pathname = usePathname()

  const [isEditing, setIsEditing] = useState(false)

  const allTags = [...initialTags, ...tags]
  const uniqueInitialTags = allTags.filter(
    (tag, tagIndex) =>
      allTags.findIndex(t => t.value === tag.value) === tagIndex,
  )

  const form = useForm<{
    tags: Option[]
  }>({
    defaultValues: {
      tags: uniqueInitialTags,
    },
  })

  const formTags = form.watch('tags')
  return (
    <>
      {isEditing
        ? formTags.map((tag, tagIndex) => {
            if (tag.isNew) {
              return (
                <Controller
                  key={tag.value}
                  name="tags"
                  control={form.control}
                  render={({field}) => (
                    <EditableText
                      className="min-w-[2rem] border-b border-solid"
                      value={field.value[tagIndex].label}
                      onChange={event => {
                        field.onChange([
                          ...field.value.slice(0, tagIndex),
                          {
                            ...field.value[tagIndex],
                            label: event.target.value,
                            value: event.target.value.toLowerCase(),
                          },
                          ...field.value.slice(tagIndex + 1),
                        ])
                      }}
                      onBlur={() => {
                        console.log('x')
                        let copiedTags = [...field.value]
                        copiedTags[tagIndex].isNew = false

                        // remove all empty labels
                        // remove all same tags by compating value
                        copiedTags = copiedTags
                          .filter(tag => tag.label)
                          .filter(
                            (tag, tagIndex) =>
                              copiedTags.findIndex(
                                t => t.value === tag.value,
                              ) === tagIndex,
                          )

                        field.onChange(copiedTags)
                        setIsEditing(false)
                      }}
                    />
                  )}
                />
              )
            }

            return (
              <SectionLink
                key={tag.value}
                text={tag.label}
                active={params.tags?.includes(tag.value)}
                href={generateUrl({
                  params: params,
                  query: {tags: tag.value},
                  pathname,
                })}
              />
            )
          })
        : formTags.map(tag => (
            <SectionLink
              key={tag.value}
              text={tag.label}
              active={params.tags?.includes(tag.value)}
              href={generateUrl({
                params: params,
                query: {tags: tag.value},
                pathname,
              })}
            />
          ))}
      <Button
        size="icon"
        type="button"
        className="h-6 w-6"
        onClick={() => {
          setIsEditing(true)
          form.setValue('tags', [
            ...formTags,
            {
              label: '',
              value: '',
              isNew: true,
            },
          ])
        }}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </>
  )
}
