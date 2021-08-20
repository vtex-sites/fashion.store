import React, { useCallback } from 'react'
import type { CartItem as ICartItem } from '@vtex/store-sdk'
import { useCart } from '@vtex/store-sdk'
import { Price } from '@vtex/store-ui'
import { Trash2 as TrashIcon } from 'react-feather'
import { useFormattedPrice } from 'src/sdk/price/useFormattedPrice'

import * as styles from './CartItem.module.css'

interface Item extends ICartItem {
  brand: string
  name: string
  facets: Array<{ key: string; value: string }>
  image: {
    src: string
    alt: string
  }
}

interface Props {
  item: Item
}

const quantity = Array(10).fill(true)

const useRemoveButton = (item: ICartItem | null | undefined) => {
  const { removeItem } = useCart()

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()

      if (!item) {
        return
      }

      removeItem(item.id)
    },
    [item, removeItem]
  )

  return { onClick }
}

function CartItem({ item }: Props) {
  const { updateItemQuantity } = useCart()
  const {
    image,
    brand,
    name,
    facets,
    quantity: { selling },
    price,
  } = item

  const removeBtn = useRemoveButton(item)

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          width="96px"
          height="127px"
          src={image.src}
          alt={image.alt}
          className={styles.image}
        />
      </div>
      <div className={styles.offer}>
        <div className={styles.offerBlock}>
          <div className={styles.brand}>{brand}</div>
          <div className={styles.name}>{name}</div>
          {facets.map(({ key, value }, idx) => (
            <div key={`${key}${value}${idx}`} className={styles.facet}>
              {key}: {value}
            </div>
          ))}
          <Price
            className={styles.price}
            formatter={useFormattedPrice}
            value={price}
          />
          <select
            className={styles.quantitySelect}
            onChange={(e) => {
              updateItemQuantity(item.id, {
                selling: Number(e.target.value),
                gift: 0,
              })
            }}
          >
            {quantity.map((_, q) => (
              <option
                key={`${name}-quantity-${q}`}
                value={q + 1}
                selected={q + 1 === selling}
              >
                {q + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className={styles.trashIcon}
          {...removeBtn}
          aria-label="remove from cart"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

export default CartItem
