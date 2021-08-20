import { useGlobalUIState } from '@vtex/store-sdk'
import React from 'react'
import { X as CloseIcon } from 'react-feather'
import { Accordion } from '@reach/accordion'
import MenuSidebarItem from 'src/components/common/MenuSidebarItem'
import Drawer from 'src/components/ui/Drawer'

import * as styles from './MenuSidebar.module.css'

function MenuSidebar() {
  const { closeMenuSidebar } = useGlobalUIState()

  return (
    <Drawer isOpen onClose={closeMenuSidebar} variant="menu" placement="left">
      <div className={styles.root}>
        <header className={styles.header}>
          <CloseIcon className={styles.closeIcon} onClick={closeMenuSidebar} />
        </header>

        <Accordion collapsible>
          <MenuSidebarItem name="Women">asdadsa</MenuSidebarItem>
          <MenuSidebarItem name="Men" href="/men" />
          <MenuSidebarItem name="Children" href="/women" />
          <MenuSidebarItem name="Bags" href="/women" />
          <MenuSidebarItem name="Sales" href="/women" />
        </Accordion>
      </div>
    </Drawer>
  )
}

export default MenuSidebar
