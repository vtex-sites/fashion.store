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
  subItems?: string[]
}

function MenuSidebarItem({ name, href, subItems }: Props) {
  let item = (
    <AccordionItem className={styles.root}>
      <AccordionButton>
        <span className={styles.title}>{name}</span>
        {subItems && (
          <>
            <Plus className={styles.plusIcon} />
            <Minus className={styles.minusIcon} />
          </>
        )}
      </AccordionButton>
      {subItems && (
        <AccordionPanel>
          {subItems.map((subItem) => (
            <div key={subItem} className={styles.subItem}>
              {subItem}
            </div>
          ))}
        </AccordionPanel>
      )}
    </AccordionItem>
  )

  if (href) {
    item = <Link to={href}>{item}</Link>
  }

  return item
}

export default MenuSidebarItem
