import React from 'react'
import { Search as SearchIcon } from 'react-feather'
import { Input } from '@vtex/store-ui'

import * as styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.root}>
      <Input
        className={styles.input}
        autoComplete="off"
        placeholder="Search"
        type="text"
      />
      <span className={styles.iconContainer}>
        <SearchIcon className={styles.icon} />
      </span>
    </div>
  )
}

export default Search
