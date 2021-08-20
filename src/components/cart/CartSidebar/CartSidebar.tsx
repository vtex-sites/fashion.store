import { useCart, useGlobalUIState } from '@vtex/store-sdk'
import React from 'react'
import Drawer from 'src/components/ui/Drawer'
import { X } from 'react-feather'
import { Price } from '@vtex/store-ui'
import { useFormattedPrice } from 'src/sdk/price/useFormattedPrice'

import * as styles from './CartSidebar.module.css'
import CartItem from '../CartItem'

function CartSidebar() {
  const { closeMinicart } = useGlobalUIState()
  const { items, total, subTotal, isEmpty } = useCart()

  return (
    <Drawer isOpen onClose={closeMinicart} variant="cart" placement="right">
      <div className={styles.container}>
        <header>
          <X className={styles.x} onClick={closeMinicart} />
          <div className={styles.title}>Cart</div>
        </header>

        <main className={styles.main}>
          {isEmpty ? (
            <span>Your cart is empty.</span>
          ) : (
            <div>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </main>

        {!isEmpty && (
          <footer className={styles.footer}>
            <div className={styles.priceTable}>
              <div className={styles.priceRow}>
                <div className={styles.priceLabel}>subTotal: </div>
                <Price
                  className={styles.subTotal}
                  formatter={useFormattedPrice}
                  value={subTotal}
                />
              </div>
              <div className={styles.priceRow}>
                <div className={styles.priceLabel}>total:</div>
                <Price
                  className={styles.total}
                  formatter={useFormattedPrice}
                  value={total}
                />
              </div>
            </div>
            <div className={styles.disclaimer}>
              Shipping and taxes calculated at the Cart
            </div>
            <a href="/checkout" className={styles.checkout}>
              Go to checkout
            </a>
          </footer>
        )}
      </div>
    </Drawer>
  )
}

export default CartSidebar
