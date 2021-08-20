import type { FormHTMLAttributes } from 'react'
import React from 'react'
import { Button, Input } from '@vtex/store-ui'

import * as styles from './Footer.module.css'

export const Newsletter = (props: FormHTMLAttributes<HTMLFormElement>) => {
  const { id, ...prop } = props

  return (
    <form {...prop}>
      <div className={styles.form}>
        <label htmlFor={id}>Join our newsletter</label>
        <div className={styles.subtitle}>
          Sign up for email updates on the last collections, campaings and
          videos
        </div>
        <div className={styles.input}>
          <Input placeholder="ENTER YOUR EMAIL" id={id} />
          <Button>Sign up</Button>
        </div>
      </div>
    </form>
  )
}
