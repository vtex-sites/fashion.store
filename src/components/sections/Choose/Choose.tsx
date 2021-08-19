import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'
import imagesConf from 'src/images/config'

import * as styles from './Choose.module.css'

function ChooseSection() {
  const getThumborImageData = useGetThumborImageData()

  const chooseRightImage = useMemo(
    () =>
      getThumborImageData({
        baseUrl:
          'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-the-best-2___4eb53ca5387f4d077dccdeb9fae211e3.png',
        ...imagesConf['home.chooseRight'],
      }),
    [getThumborImageData]
  )

  const chooseLeftImage = useMemo(
    () =>
      getThumborImageData({
        baseUrl:
          'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-the-best-1___b4f82c4492198a3d5e97b4e2fb2ac13b.png',
        ...imagesConf['home.chooseLeft'],
      }),
    [getThumborImageData]
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Choose only the best.</h3>
        <p className={styles.description}>
          <span className={styles.descriptionText}>You only live once. </span>
          <a href="/#" className={styles.descriptionLink}>
            Enjoy.
          </a>
        </p>
      </div>
      <div className={styles.images}>
        <div className={styles.imageLeft}>
          <GatsbyImage
            alt="Choose only the best."
            className={styles.image}
            image={chooseLeftImage}
          />
        </div>
        <div className={styles.imageRight}>
          <GatsbyImage
            alt="Choose only the best."
            className={styles.image}
            image={chooseRightImage}
          />
        </div>
      </div>
    </div>
  )
}

export default ChooseSection
