import { useEffect, useState } from 'react'

const checkAtTopOfWindow = () => window.pageYOffset === 0

export const useTransparentMode = () => {
  const [isTransparentMode, setTransparentMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeTransparentMode = checkAtTopOfWindow()

      if (shouldBeTransparentMode !== isTransparentMode) {
        setTransparentMode(shouldBeTransparentMode)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isTransparentMode])

  return isTransparentMode
}
