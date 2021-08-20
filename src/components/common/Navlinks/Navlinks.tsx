import React from 'react'
import { Heart, User, ShoppingCart } from 'react-feather'
import { useGlobalUIState } from '@vtex/store-sdk'

import * as styles from './Navlinks.module.css'

function Navlinks() {
  const { openMinicart } = useGlobalUIState()

  return (
    <nav className={styles.root}>
      <span className={styles.languageSelector}>UK</span>
      <Heart className={`${styles.navlink} ${styles.wishListNav}`} />
      <User className={`${styles.navlink} ${styles.userNav}`} />
      <button className={styles.cart} onClick={openMinicart}>
        <ShoppingCart className={styles.navlink} />
      </button>
    </nav>
  )
}

export default Navlinks
