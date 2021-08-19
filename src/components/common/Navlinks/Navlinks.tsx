import React from 'react'
import { Heart, User, ShoppingCart } from 'react-feather'
import { Link } from 'gatsby'

import * as styles from './Navlinks.module.css'

function Navlinks() {
  return (
    <nav className={styles.root}>
      <span className={styles.languageSelector}>UK</span>
      <Link to="/wishlist" aria-label="Wishlist">
        <Heart className={`${styles.navlink} ${styles.wishListNav}`} />
      </Link>
      <User className={`${styles.navlink} ${styles.userNav}`} />
      <ShoppingCart className={styles.navlink} />
    </nav>
  )
}

export default Navlinks
