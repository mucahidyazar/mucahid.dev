export const THEME = {
  default: 'default',
  transparent: 'transparent',
  filled: 'filled',
} as const
export type Theme = (typeof THEME)[keyof typeof THEME]

export const themes = {
  default: 'theme-1',
  transparent: 'theme-2',
  filled: 'theme-3',
}