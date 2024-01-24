'use client'
import React, {useEffect} from 'react'

import {cn} from '@/utils'

type EditableTextProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value'
> & {
  value?: React.ReactElement | React.ReactNode | string
  className?: string
}
export const EditableText = ({className, ...rest}: EditableTextProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const hasValue = !!rest.value
  const isString = typeof rest.value === 'string'
  const isReactElement = React.isValidElement(rest.value)

  let inputProps: any = {}
  if (hasValue) {
    if (isString) {
      inputProps.value = rest.value as string
    } else if (isReactElement) {
      inputProps.value = (rest.value as any).props.children
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <input
      ref={inputRef}
      style={{width: (inputRef.current as any)?.value?.length * 0.85 + 'ch'}}
      className={cn(
        className,
        'border-none bg-transparent text-background outline-none',
      )}
      type="text"
      {...rest}
      {...inputProps}
    />
  )
}
