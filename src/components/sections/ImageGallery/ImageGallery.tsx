import { Carousel } from '@vtex/store-ui'
import clsx from 'clsx'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './ImageGallery.module.css'

type Props = {
  images: IGatsbyImageData[]
  alt: string
}

export default function ImageGallery(props: Props) {
  const images = props.images.map((image, idx) => (
    <img
      src={image.images.fallback?.src}
      alt="Test"
      className={styles.image}
      style={{ aspectRatio: '1000 / 1177' }}
      loading={idx === 0 ? 'eager' : 'lazy'}
      key={image.images.fallback?.src}
    />
  ))

  return (
    <>
      <div className={clsx(styles.container, styles.onlyDesktop)}>{images}</div>
      <div className={clsx(styles.container, styles.onlyMobile)}>
        <Carousel>{images}</Carousel>
      </div>
    </>
  )
}
