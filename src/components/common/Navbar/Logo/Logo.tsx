import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { GatsbyImage } from 'gatsby-plugin-image'
import imagesConf from 'src/images/config'

import * as styles from './Logo.module.css'

const IMAGE_URL =
  'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/logo-desktop___3eb7875aea248843ff1a96afa1e77f5c.png'

function Logo() {
  const getThumborImageData = useGetThumborImageData()
  const logoImage = useMemo(() => {
    return getThumborImageData({
      baseUrl: IMAGE_URL,
      ...imagesConf['home.logo'],
      width: 200,
      height: 20,
    })
  }, [getThumborImageData])

  return (
    <div className={styles.root}>
      <Link to="/" aria-label="Home">
        <GatsbyImage className={styles.image} image={logoImage} alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo
