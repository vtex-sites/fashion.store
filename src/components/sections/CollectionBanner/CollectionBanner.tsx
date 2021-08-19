import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import React, { useMemo } from 'react'
import imagesConfig from 'src/images/config'
import { withArtDirection, GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './CollectionBanner.module.css'

interface Props {
  image: {
    desktop: string
    mobile: string
    alt: string
  }
  title: string
  description: string
}

const useImage = ({ desktop, mobile }: Props['image']) => {
  const getImageData = useGetThumborImageData()

  return useMemo(() => {
    const desktopImage = getImageData({
      baseUrl: desktop,
      ...imagesConfig['collectionBanner.desktop'],
    })

    const mobileImage = getImageData({
      baseUrl: mobile,
      ...imagesConfig['collectionBanner.mobile'],
    })

    return withArtDirection(mobileImage, [
      {
        media: '(min-width: 40em)',
        image: desktopImage,
      },
    ])
  }, [desktop, getImageData, mobile])
}

function CollectionBanner({ image, title, description }: Props) {
  const gatsbyImage = useImage(image)

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
      </div>

      <GatsbyImage
        className={styles.image}
        image={gatsbyImage}
        alt={image.alt}
      />
    </div>
  )
}

export default CollectionBanner
