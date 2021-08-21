import React from 'react'
import { useCart } from '@vtex/store-sdk'
import { Price } from '@vtex/store-ui'
import { Trash2 as TrashIcon } from 'react-feather'
import { useFormattedPrice } from 'src/sdk/price/useFormattedPrice'
import type { CartItem as ICartItem } from '@vtex/store-sdk'

import * as styles from './CartItem.module.css'

export interface MinicartItem extends ICartItem {
  brand: string
  name: string
  facets: Array<{ key: string; value: string }>
  image: {
    src: string
    alt: string
  }
}

interface Props {
  item: MinicartItem
}

const quantity = Array(10).fill(true)

function CartItem({ item }: Props) {
  const { updateItemQuantity, removeItem } = useCart()
  const {
    image,
    brand,
    name,
    facets,
    quantity: { selling },
    price,
  } = item

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
            defaultValue={selling}
          >
            {quantity.map((_, q) => (
              <option key={`${name}-quantity-${q}`} value={q + 1}>
                {q + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className={styles.trashIcon}
          onClick={(e) => {
            e.preventDefault()
            removeItem(item.id)
          }}
          aria-label="remove from cart"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

export default CartItem
