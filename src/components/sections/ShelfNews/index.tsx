import React from 'react'
import type { FC } from 'react'
import { Carousel as UIShelf } from '@vtex/store-ui'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { withArtDirection, GatsbyImage } from 'gatsby-plugin-image'
import ProductSummary from 'src/components/product/ProductSummary'
import type { ProductSummary_ProductFragment } from 'src/components/product/ProductSummary/__generated__/ProductSummary_product.graphql'
import imagesConf from 'src/images/config'

import './ShelfNews.css'

interface Props {
  products?: ProductSummary_ProductFragment[] | any
  productsPerPage: number[]
  title?: string
}

const ShelfNews: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  products,
  productsPerPage,
  title,
}) => {
  const mediaItemsPerPage = window.matchMedia('(min-width: 640px)')
    ? productsPerPage[1]
    : productsPerPage[0]

  const pagesNumber = Math.ceil(products.length / mediaItemsPerPage)

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
    <section className="w-screen sm:pl-28 text-5xl pt-24 flex">
      <div className="w-1/2">
        <h1 className="mb-4">{title}</h1>
        <UIShelf>
          {[...Array(pagesNumber)].map((x, page) => {
            const firstItem = page * mediaItemsPerPage

            return (
              <section className="flex flex-col wrap" key={page}>
                {products
                  .slice(firstItem, firstItem + mediaItemsPerPage)
                  .map(
                    (product: ProductSummary_ProductFragment, idx: number) => (
                      <ProductSummary
                        key={idx}
                        product={product}
                        variant="advanced"
                      />
                    )
                  )}
              </section>
            )
          })}
        </UIShelf>
      </div>
      <div className="w-1/2">
        <GatsbyImage
          objectFit="contain"
          className=""
          image={sectionGif}
          alt=""
        />
      </div>
    </section>
  )
}

export default ShelfNews
