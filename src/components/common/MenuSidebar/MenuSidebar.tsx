import { useGlobalUIState } from '@vtex/store-sdk'
import React from 'react'
import { X as CloseIcon } from 'react-feather'
import { Accordion } from '@reach/accordion'
import MenuSidebarItem from 'src/components/common/MenuSidebarItem'
import Drawer from 'src/components/ui/Drawer'

import * as styles from './MenuSidebar.module.css'

const WOMEN_SUB_ITEMS = [
  'new arrivals',
  'gifts',
  'clothing',
  'bags',
  'scarves',
  'accessories',
  'shoes',
  'makeup',
  'fragrance',
  'spring / summer 2020',
]

function MenuSidebar() {
  const { closeMenuSidebar } = useGlobalUIState()

  return (
    <Drawer isOpen onClose={closeMenuSidebar} variant="menu" placement="left">
      <div className={styles.root}>
        <header className={styles.header}>
          <CloseIcon className={styles.closeIcon} onClick={closeMenuSidebar} />
        </header>

        <main className={styles.main}>
          <Accordion collapsible>
            <MenuSidebarItem name="Women" subItems={WOMEN_SUB_ITEMS} />
            <MenuSidebarItem name="Men" href="/men" />
            <MenuSidebarItem name="Children" href="/women" />
            <MenuSidebarItem name="Bags" href="/women" />
            <MenuSidebarItem name="Sales" href="/women" />
          </Accordion>
        </main>

        <footer className={styles.footer}>
          <li>Wishlist</li>
          <li>My Account</li>
          <li>About</li>
        </footer>
      </div>
    </Drawer>
  )
}

export default MenuSidebar
