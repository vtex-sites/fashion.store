import React from 'react'
import type { FC } from 'react'
import { Carousel as UIShelf } from '@vtex/store-ui'
import useMediaQuery from 'src/utils/useMediaQuery'
import ProductSummary from 'src/components/product/ProductSummary'
import type { ProductSummary_ProductFragment } from 'src/components/product/ProductSummary/__generated__/ProductSummary_product.graphql'

import * as styles from './Shelf.module.css'

interface Props {
  products?: ProductSummary_ProductFragment[] | any
  productsPerPage: number[]
  title?: string
}

const Shelf: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  className,
  products,
  productsPerPage,
  title,
}) => {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const mediaItemsPerPage = isDesktop ? productsPerPage[1] : productsPerPage[0]

  const pagesNumber = Math.ceil(products.length / mediaItemsPerPage)

  return (
    <section className={`${styles.container}`}>
      {title && <h1 className={`mb-4 ${className}`}>{title}</h1>}
      <UIShelf>
        {[...Array(pagesNumber)].map((x, page) => {
          const firstItem = page * mediaItemsPerPage

          return (
            <section className="flex wrap justify-around" key={page}>
              {products
                .slice(firstItem, firstItem + mediaItemsPerPage)
                .map((product: ProductSummary_ProductFragment, idx: number) => (
                  <ProductSummary
                    key={idx}
                    product={product}
                    variant="advanced"
                  />
                ))}
            </section>
          )
        })}
      </UIShelf>
    </section>
  )
}

export default Shelf
