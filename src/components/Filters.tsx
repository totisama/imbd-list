'use client'

import { useCallback, useEffect, useState, type ChangeEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'

interface FilterProps {
  searchParams: { sort?: string, name?: string }
}

export const Filters = ({ searchParams }: FilterProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [name, setName] = useState(searchParams.name)
  const debouncedValue = useDebounce(name, 500)

  const getSearchParams = useCallback((valueChanged: string) => {
    const params = new URLSearchParams()

    for (const [key, value] of Object.entries(searchParams)) {
      if (key === valueChanged) {
        continue
      }

      params.set(key, value)
    }

    return params
  }, [searchParams])

  const toggleSort = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const name = e.target.name
    const value = e.target.checked
    const localSearchParams = getSearchParams(e.target.name)

    if (value) {
      localSearchParams.set(name, String(value))
    }

    const newPath =
      localSearchParams.size > 0
        ? '?' + localSearchParams.toString()
        : pathname

    router.push(newPath)
  }

  const addNameFilter = useCallback((name: string, value: string | undefined) => {
    const localSearchParams = getSearchParams(name)

    if (value !== '' && value !== undefined) {
      localSearchParams.set(name, value)
    }

    const newPath =
      localSearchParams.size > 0
        ? '?' + localSearchParams.toString()
        : pathname

    router.push(newPath)
  }, [pathname, router, getSearchParams])

  useEffect(() => {
    addNameFilter('name', debouncedValue)
  }, [debouncedValue, addNameFilter])

  return (
    <div className="mb-10 flex flex-col justify-center items-center gap-5 lg:flex-row">
      <div className='flex items-center space-x-3'>
        <label htmlFor="rating">Sort by Name</label>
        <input
          defaultValue={name}
          name="name"
          onChange={(e) => { setName(e.target.value) }}
          type="text"
          className="px-4 py-2 text-black rounded-md"
          />
      </div>
      <div className='flex items-center space-x-3'>
        <label htmlFor="rating">Sort by Rating</label>
        <input
          defaultChecked={searchParams.sort === 'true' ? true : undefined}
          name="sort"
          onChange={toggleSort}
          type="checkbox"
          />
      </div>
    </div>
  )
}
