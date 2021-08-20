import React from 'react'
import { Menu } from 'react-feather'
import Logo from 'src/components/ui/Logo'
import Search from 'src/components/ui/Search'
import Navlinks from 'src/components/common/Navlinks'

import { useTransparentMode } from './hooks'
import * as styles from './Navbar.module.css'

function Navbar() {
  const isTransparentMode = useTransparentMode()

  return (
    <header
      className={`${styles.root} ${
        isTransparentMode ? styles.transparentMode : ''
      }`}
    >
      <div className={`${styles.navbarSection} ${styles.leftSection}`}>
        <Menu className={styles.menu} color="white" />
        <Logo />
      </div>
      <div className={`${styles.navbarSection} ${styles.rightSection}`}>
        <Search />
        <Navlinks />
      </div>
    </header>
  )
}

export default Navbar
