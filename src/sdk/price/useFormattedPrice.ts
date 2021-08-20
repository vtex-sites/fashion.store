import { useSession } from '@vtex/store-sdk'
import { useMemo } from 'react'

export const useFormattedPrice = (price: number) => {
  const { currency, locale } = useSession()

  return useMemo(() => {
    const formattedPrice = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency.code,
    }).format(price)

    return formattedPrice
  }, [currency.code, locale, price])
}
