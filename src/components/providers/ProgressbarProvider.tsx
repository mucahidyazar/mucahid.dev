'use client'

import {Next13ProgressBar} from 'next13-progressbar'

export function ProgressbarProvider() {
  return (
    <Next13ProgressBar
      height="4px"
      color="hsl(var(--primary))"
      options={{showSpinner: true}}
      showOnShallow
    />
  )
}
