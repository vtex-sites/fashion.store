import { useCart, useGlobalUIState } from '@vtex/store-sdk'
import { useCallback } from 'react'
import type { MinicartItem } from 'src/components/cart/CartItem/CartItem'

export const useBuyButton = (item: MinicartItem | null | undefined) => {
  const { addItem } = useCart()
  const { openMinicart } = useGlobalUIState()

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()

      if (!item) {
        return
      }

      addItem(item)
      openMinicart()
    },
    [item, addItem, openMinicart]
  )

  return { onClick }
}
