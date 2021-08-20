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
  return (
    <>
      <div className={clsx(styles.container, styles.onlyDesktop)}>
        {props.images.map((image, idx) => (
          <GatsbyImage
            key={`${idx}-${image.images.fallback?.src}`}
            image={image}
            alt={props.alt}
          />
        ))}
      </div>
      <div className={clsx(styles.container, styles.onlyMobile)}>
        <Carousel>
          {props.images.map((image, idx) => (
            <GatsbyImage
              key={`${idx}-${image.images.fallback?.src}`}
              image={image}
              alt={props.alt}
            />
          ))}
        </Carousel>
      </div>
    </>
  )
}
