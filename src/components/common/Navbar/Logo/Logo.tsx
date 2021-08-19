import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { GatsbyImage } from 'gatsby-plugin-image'
import imagesConf from 'src/images/config'

import * as styles from './Logo.module.css'

function Logo() {
  const getThumborImageData = useGetThumborImageData()
  const logoImage = useMemo(
    () =>
      getThumborImageData({
        baseUrl:
          'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/logo-desktop___3eb7875aea248843ff1a96afa1e77f5c.png',
        ...imagesConf['home.logo'],
      }),
    [getThumborImageData]
  )

  return (
    <div className={styles.root}>
      <Link to="/" aria-label="Home">
        <GatsbyImage className={styles.image} image={logoImage} alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo
