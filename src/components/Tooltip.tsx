'use client'
import { Tooltip as FlowbiteTooltip } from 'flowbite-react'
import { useRef, useState } from 'react'

import { useOutsideClick } from '@/hooks'

export default function Tooltip({
  children,
  content,
  isActive = true,
  ...rest
}: {
  children: React.ReactNode
  content: React.ReactNode
  isActive?: boolean
}): React.ReactElement {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(isActive)

  useOutsideClick(tooltipRef, () => {
    setActive(false)
  })

  if (!active) return <>{children}</>

  return (
    <FlowbiteTooltip
      ref={tooltipRef}
      content={content}
      trigger="hover"
      {...rest}
    >
      {children}
    </FlowbiteTooltip>
  )
}
