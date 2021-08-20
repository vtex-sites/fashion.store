import type { PropsWithChildren } from 'react'
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import * as styles from './Drawer.module.css'

interface Props {
  placement?: 'left' | 'right'
  variant?: string
  isOpen: boolean
  onClose: () => void
}

function Drawer({
  placement = 'left',
  isOpen,
  onClose,
  variant,
  children,
}: PropsWithChildren<Props>) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={styles.container} data-store-drawer data-variant={variant}>
      <div
        className={styles.main}
        data-placement={placement}
        data-main
        data-state="open"
      >
        {children}
      </div>
      <div
        className={styles.backdrop}
        onClick={onClose}
        onKeyDown={onClose}
        role="none"
        data-backdrop
      />
    </div>,
    document.body
  )
}

export default Drawer
