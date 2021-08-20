import React from 'react'
import { Menu } from 'react-feather'
import { useGlobalUIState } from '@vtex/store-sdk'
import Logo from 'src/components/ui/Logo'
import Search from 'src/components/ui/Search'
import Navlinks from 'src/components/common/Navlinks'

import { useTransparentMode } from './hooks'
import * as styles from './Navbar.module.css'

function Navbar() {
  const { openMenuSidebar } = useGlobalUIState()
  const isTransparentMode = useTransparentMode()

  return (
    <header
      className={`${styles.root} ${
        isTransparentMode ? styles.transparentMode : ''
      }`}
    >
      <div className={`${styles.navbarSection} ${styles.leftSection}`}>
        <button aria-label="Open menu sidebar" onClick={openMenuSidebar}>
          <Menu className={styles.menu} color="white" />
        </button>
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
