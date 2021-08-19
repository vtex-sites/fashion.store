import React, { useMemo } from 'react'
import { Carousel } from '@vtex/store-ui'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { withArtDirection, GatsbyImage } from 'gatsby-plugin-image'
import imagesConf from 'src/images/config'
import { Link } from 'gatsby'

import * as styles from './Carousel.module.css'

interface Item {
  desktop: string
  mobile: string
  alt: string
}

interface ILink {
  name: string
  href: string
}

interface Props {
  items: Item[]
  title: string
  links: ILink[]
}

const useImages = (items: Item[]) => {
  const getThumborImageData = useGetThumborImageData()

  return useMemo(
    () =>
      items.map((item) => {
        const { mobile, desktop } = item

        const desktopImage = getThumborImageData({
          baseUrl: desktop,
          ...imagesConf['carousel.desktop'],
        })

        const mobileImage = getThumborImageData({
          baseUrl: mobile,
          ...imagesConf['carousel.mobile'],
        })

        return withArtDirection(mobileImage, [
          {
            media: `(min-width: 768px)`,
            image: desktopImage,
          },
        ])
      }),
    [getThumborImageData, items]
  )
}

function CarouselSection({ items, title, links }: Props) {
  const images = useImages(items)

  return (
    <div className={styles.container} data-carousel-container>
      <div className={styles.title}>{title}</div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link className={styles.link} key={link.href} to={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      {/* <Carousel> */}
      <div className={styles.carousel}>
        {images.map((image, idx) => (
          <GatsbyImage
            className={styles.image}
            key={items[idx].mobile}
            image={image}
            alt={items[idx].alt}
          />
        ))}
      </div>
      {/* </Carousel> */}
    </div>
  )
}

export default CarouselSection
