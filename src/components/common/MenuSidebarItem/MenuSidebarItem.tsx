import React from 'react'
import { Link } from 'gatsby'

import * as styles from './MenuSidebarItem.module.css'

interface Props {
  name: string
  href: string
}

function MenuSidebarItem({ name, href }: Props) {
  return (
    <div>
      <Link className={styles.root} to={href}>
        {name}
      </Link>
    </div>
  )
}

export default MenuSidebarItem
