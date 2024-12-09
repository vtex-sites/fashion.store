import { useState, useEffect } from 'react'

export default (media: string) => {
  const [query, setQuery] = useState<boolean>(() => {
    if (typeof window !== 'object' || !window.matchMedia) {
      return false
    }

    return window.matchMedia(media).matches
  })

  useEffect(() => {
    const listener = (ev) => {
      setQuery(ev.matches)
    }

    window.matchMedia(media).addEventListener('change', listener)

    return () =>
      window.matchMedia(media).removeEventListener('change', listener)
  }, [media])

  return query
}
