import { useEffect, useState } from 'react'

export const useDebounce = (value: string | undefined, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (value === undefined) {
      return
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
