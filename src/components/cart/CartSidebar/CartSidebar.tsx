import { useCart, useGlobalUIState } from '@vtex/store-sdk'
import React from 'react'
import Drawer from 'src/components/ui/Drawer'

import * as styles from './CartSidebar.module.css'
import CartItem from '../CartItem'

function CartSidebar() {
  const { closeMinicart } = useGlobalUIState()
  const { items, total, subTotal, totalUniqueItems, totalItems } = useCart()

  return (
    <Drawer isOpen onClose={closeMinicart} variant="cart" placement="right">
      <div className={styles.container}>
        <div>Cart Item Detais</div>

        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div>Cart Summary</div>

        <div>uniqueItems: {totalUniqueItems}</div>
        <div>items: {totalItems}</div>
        <div>subTotal: {subTotal}</div>
        <div>total: {total}</div>
      </div>
    </Drawer>
  )
}

export default CartSidebar
