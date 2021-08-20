import { GatsbyImage } from 'gatsby-plugin-image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { Carousel } from '@vtex/store-ui'
import clsx from 'clsx'

import * as styles from './ImageGallery.module.css'

type Props = {
  images: IGatsbyImageData[]
  alt: string
}

export default function ImageGallery(props: Props) {
  const images = props.images.map((image, idx) => (
    <GatsbyImage
      key={`${idx}-${image.images.fallback?.src}`}
      image={image}
      alt={props.alt}
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
