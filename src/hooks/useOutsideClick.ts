import {useEffect} from 'react'

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
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
