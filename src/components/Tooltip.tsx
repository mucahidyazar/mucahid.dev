'use client'
import {Tooltip as FlowbiteTooltip} from 'flowbite-react'

export default function Tooltip({
  children,
  content,
  ...rest
}: {
  children: React.ReactNode
  content: React.ReactNode
}) {
  return (
    <FlowbiteTooltip content={content} trigger="hover" {...rest}>
      {children}
    </FlowbiteTooltip>
  )
}
