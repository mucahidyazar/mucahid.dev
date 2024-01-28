'use client'

import React from 'react'

import {IconProps, Size, iconSizeMap} from './common'

export function Icon({name, size, ...rest}: IconProps) {
  const IconComponent = React.lazy(() => import(`./icon-${name}`))

  const selectedSize = iconSizeMap[size as Size] || size || iconSizeMap.md

  return (
    <React.Suspense fallback={<div />}>
      <IconComponent width={selectedSize} height={selectedSize} {...rest} />
    </React.Suspense>
  )
}
