import { GatsbyImage } from 'gatsby-plugin-image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './ImageGallery.module.css'

type Props = {
  images: IGatsbyImageData[]
  alt: string
}

export default function ImageGallery(props: Props) {
  return (
    <div className={styles.container}>
      {props.images.map((image, idx) => (
        <GatsbyImage
          key={`${idx}-${image.images.fallback?.src}`}
          image={image}
          alt={props.alt}
        />
      ))}
    </div>
  )
}
