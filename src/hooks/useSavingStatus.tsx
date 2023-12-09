import {useCallback, useEffect, useState} from 'react'

import {SAVING_STATUS, SavingStatus} from '@/constants'

export function useSavingStatus(): {
  status: SavingStatus
  setSaving: () => void
} {
  const [status, setStatus] = useState<SavingStatus>(SAVING_STATUS.initial)

  useEffect(() => {
    if (status === SAVING_STATUS.saving) {
      const timeout = setTimeout(() => {
        setStatus(SAVING_STATUS.saved)
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [status])

  const setSaving = useCallback(() => {
    setStatus(SAVING_STATUS.saving)
  }, [])

  useEffect(() => {
    if (status === SAVING_STATUS.saved) {
      const timeout = setTimeout(() => {
        setStatus(SAVING_STATUS.initial)
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [status])

  return {status, setSaving}
}
