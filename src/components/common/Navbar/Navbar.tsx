import React from 'react'
import { Menu } from 'react-feather'

import Navlinks from '../Navlinks'
import Logo from './Logo'
import Search from './Search'
import * as styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.root}>
      <div className={`${styles.navbarSection} ${styles.leftSection}`}>
        <Menu className={styles.menu} color="white" />
        <Logo />
      </div>
      <div className={styles.navbarSection}>
        <Search />
        <Navlinks />
      </div>
    </header>
  )
}

export default Navbar
