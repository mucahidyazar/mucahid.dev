import { SVGProps } from "react"

export type IconProps = SVGProps<SVGSVGElement> & {
  name: string
  fillOne?: string
  fillTwo?: string
  size?: Size | number
}

export type Size = 'sm' | 'md' | 'lg'

export const iconSizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
} as Record<Size, number>
