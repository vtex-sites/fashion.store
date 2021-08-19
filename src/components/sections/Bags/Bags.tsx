import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { Button } from '@vtex/store-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'
import imagesConf from 'src/images/config'

import * as styles from './Bags.module.css'

function BagsSection() {
  const getThumborImageData = useGetThumborImageData()

  const bagImage = useMemo(
    () =>
      getThumborImageData({
        baseUrl:
          'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-bags-to-everday-v3___1d749e240d536af22e58fadb181a7a29.png',
        ...imagesConf['home.bag'],
      }),
    [getThumborImageData]
  )

  return (
    <div className={styles.container}>
      <GatsbyImage image={bagImage} alt="Bags to everyday" />
      <div className={styles.content}>
        <h1 className={styles.title}>Bags to everyday</h1>
        <Button className={styles.button}>Shop Now</Button>
      </div>
    </div>
  )
}

export default BagsSection
