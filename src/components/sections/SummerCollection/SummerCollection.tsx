import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { Button } from '@vtex/store-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'
import imagesConf from 'src/images/config'

import * as styles from './SummerCollection.module.css'

function SummerCollectionSection() {
  const getThumborImageData = useGetThumborImageData()

  const collectionImage = useMemo(
    () =>
      getThumborImageData({
        baseUrl:
          'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-summer-collection___3d2dc6de19751ce047b361867c20d046.png',
        ...imagesConf['home.collection'],
      }),
    [getThumborImageData]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <GatsbyImage
          className={styles.image}
          image={collectionImage}
          alt="Summer Collection"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>Summer Collection</h2>
          <p className={styles.description}>
            Our slimmest trench coat, with narrow shoulders and a nipped-in
            waist.
          </p>
          <Button className={styles.button}>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default SummerCollectionSection
