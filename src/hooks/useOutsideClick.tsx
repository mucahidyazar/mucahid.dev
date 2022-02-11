import {ComponentPropsWithRef, useEffect} from 'react'

export const useOutsideClick = (
  ref: ComponentPropsWithRef<any>,
  callback: CallableFunction,
) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, {capture: true})

    return () => {
      document.removeEventListener('click', handleClick, {
        capture: true,
      })
    }
  })
}
