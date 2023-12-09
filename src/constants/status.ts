const SAVING_STATUS = {
  initial: 'initial',
  saved: 'saved',
  saving: 'saving',
} as const

const SAVING_STATUS_LABEL = {
  [SAVING_STATUS.initial]: '',
  [SAVING_STATUS.saving]: 'Saving...',
  [SAVING_STATUS.saved]: 'Saved',
}

export {
  SAVING_STATUS,
  SAVING_STATUS_LABEL,
}

export type SavingStatus = (typeof SAVING_STATUS)[keyof typeof SAVING_STATUS]
