import { Carousel } from '@vtex/store-ui'
import clsx from 'clsx'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './ImageGallery.module.css'

type Props = {
  images: {
    desktop: IGatsbyImageData[]
    mobile: IGatsbyImageData[]
  }
  alt: string
}

export default function ImageGallery(props: Props) {
  return (
    <>
      <div className={clsx(styles.container, styles.onlyDesktop)}>
        {props.images.desktop.map((image, idx) => (
          <img
            src={image.images.fallback?.src}
            alt={props.alt}
            width={image.width}
            height={image.height}
            className={styles.image}
            style={{ aspectRatio: '720 / 848' }}
            loading={idx === 0 ? 'eager' : 'lazy'}
            key={image.images.fallback?.src}
          />
        ))}
      </div>
      <div className={clsx(styles.container, styles.onlyMobile)}>
        <Carousel>
          {props.images.mobile.map((image, idx) => (
            <img
              src={image.images.fallback?.src}
              alt={props.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
              style={{ aspectRatio: '360 / 424' }}
              loading={idx === 0 ? 'eager' : 'lazy'}
              key={image.images.fallback?.src}
            />
          ))}
        </Carousel>
      </div>
    </>
  )
}
