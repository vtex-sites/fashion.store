import React from 'react'

import * as styles from './Spinner.module.css'

function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  )
}

export default Spinner
