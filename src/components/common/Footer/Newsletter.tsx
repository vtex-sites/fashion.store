import type { FormHTMLAttributes } from 'react'
import React from 'react'
import { Button, Input } from '@vtex/store-ui'

import * as styles from './Footer.module.css'

export const Newsletter = (props: FormHTMLAttributes<HTMLFormElement>) => (
  <form {...props}>
    <div className={styles.form}>
      <label htmlFor="newsletter-input">Join our newsletter</label>
      <div className={styles.subtitle}>
        Sign up for email updates on the last collections, campaings and videos
      </div>
      <div className={styles.input}>
        <Input placeholder="ENTER YOUR EMAIL" id="newsletter-input" />
        <Button>Sign up</Button>
      </div>
    </div>
  </form>
)
