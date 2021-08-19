import React from 'react'
import type { FC } from 'react'
import { Carousel as UIShelf } from '@vtex/store-ui'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { withArtDirection, GatsbyImage } from 'gatsby-plugin-image'
import imagesConf from 'src/images/config'

import * as styles from './ShelfNews.module.css'

interface Props {
  items: string[]
  itemsPerPage: number[]
  title?: string
}

const ShelfNews: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  className,
  items,
  itemsPerPage,
  title,
}) => {
  const mediaItemsPerPage = window.matchMedia('(min-width: 640px)')
    ? itemsPerPage[1]
    : itemsPerPage[0]

  const pagesNumber = Math.ceil(items.length / mediaItemsPerPage)

  const getThumborImageData = useGetThumborImageData()

  const image = getThumborImageData({
    baseUrl:
      'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-new-in___7eda5598301c61afdce56021e9e872cc.gif',
    ...imagesConf['shelf.gif'],
  })

  const sectionGif = withArtDirection(image, [
    {
      media: `(min-width: 640px)`,
      image,
    },
  ])

  return (
    <section className={`${styles.container} ${className} flex`}>
      <div className="w-1/2">
        <h1 className="mb-4">{title}</h1>
        <UIShelf>
          {[...Array(pagesNumber)].map((x, page) => {
            const firstItem = page * mediaItemsPerPage

            return (
              <section className="flex wrap" key={page}>
                {items
                  .slice(firstItem, firstItem + mediaItemsPerPage)
                  .map((value) => (
                    <div
                      key={value}
                      className={`h-96 w-1/${mediaItemsPerPage} flex-grow text-center text-2xl`}
                    >
                      {value}
                    </div>
                  ))}
              </section>
            )
          })}
        </UIShelf>
      </div>
      <div className="w-1/2">
        <GatsbyImage image={sectionGif} alt="" />
      </div>
    </section>
  )
}

export default ShelfNews
