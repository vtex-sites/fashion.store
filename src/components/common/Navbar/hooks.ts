import { useEffect, useState, useTransition } from 'react'

const checkAtTopOfWindow = () => window.pageYOffset === 0

export const useTransparentMode = () => {
  const [isTransparentMode, setTransparentMode] = useState(checkAtTopOfWindow())
  const [, startTransition] = useTransition()

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeTransparentMode = checkAtTopOfWindow()

      if (shouldBeTransparentMode !== isTransparentMode) {
        startTransition(() => {
          setTransparentMode(shouldBeTransparentMode)
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isTransparentMode, startTransition])

  return isTransparentMode
}
