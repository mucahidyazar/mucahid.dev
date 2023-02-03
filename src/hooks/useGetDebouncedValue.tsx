import { useEffect, useState } from "react"

export function useGetDebouncedValue<T>(
  value: T,
  dependencies: any[],
  delay: number
) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, dependencies)

  return debouncedValue
}