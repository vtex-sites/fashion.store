import React from 'react'
import { Plus, Minus } from 'react-feather'
import { Link } from 'gatsby'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'

import * as styles from './MenuSidebarItem.module.css'

interface Props {
  name: string
  href?: string
  children?: React.ReactNode
}

function MenuSidebarItem({ name, href, children }: Props) {
  let item = (
    <AccordionItem className={styles.root}>
      <AccordionButton>
        <span className={styles.title}>{name}</span>
        {children && (
          <>
            <Plus className={styles.plusIcon} />
            <Minus className={styles.minusIcon} />
          </>
        )}
      </AccordionButton>
      {children && <AccordionPanel>{children}</AccordionPanel>}
    </AccordionItem>
  )

  if (href) {
    item = <Link to={href}>{item}</Link>
  }

  return item
}

export default MenuSidebarItem
