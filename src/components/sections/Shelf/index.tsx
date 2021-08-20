import React from 'react'
import type { FC } from 'react'
import { Carousel as UIShelf } from '@vtex/store-ui'
import useMediaQuery from 'src/utils/useMediaQuery'
import ProductSummary from 'src/components/product/ProductSummary'
import type { ProductSummary_ProductFragment } from 'src/components/product/ProductSummary/__generated__/ProductSummary_product.graphql'

import './Shelf.css'

interface Props {
  products: ProductSummary_ProductFragment[]
  productsPerPage: number[]
  title?: string
  variant?: 'simple' | 'advanced'
}

export const ByLookShelf: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  products,
  productsPerPage,
  title,
  variant = 'simple',
}) => {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const mediaItemsPerPage = isDesktop ? productsPerPage[1] : productsPerPage[0]

  const pagesNumber = Math.ceil(products!.length / mediaItemsPerPage)

  return (
    <section className="w-screen px-4 sm:px-28 pt-24 pb-36">
      {title && <h1 className="mb-4 text-center text-5xl">{title}</h1>}
      <UIShelf>
        {[...Array(pagesNumber)].map((x, page) => {
          const firstItem = page * mediaItemsPerPage

          return (
            <section className="flex wrap justify-around" key={page}>
              {products!
                .slice(firstItem, firstItem + mediaItemsPerPage)
                .map((product: ProductSummary_ProductFragment, idx: number) => (
                  <ProductSummary
                    key={idx}
                    product={product}
                    variant={variant}
                  />
                ))}
            </section>
          )
        })}
      </UIShelf>
    </section>
  )
}

export const FindInShelf: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  products,
  productsPerPage,
  title,
  variant = 'simple',
}) => {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const mediaItemsPerPage = isDesktop ? productsPerPage[1] : productsPerPage[0]

  const pagesNumber = Math.ceil(products!.length / mediaItemsPerPage)

  return (
    <section className="w-screen px-4 sm:px-28 mb-8 sm:-mt-28 sm:text-white z-10">
      {title && <h1 className="mb-4 text-2xl">{title}</h1>}
      <UIShelf>
        {[...Array(pagesNumber)].map((x, page) => {
          const firstItem = page * mediaItemsPerPage

          return (
            <section className="flex h-28" key={page}>
              {products!
                .slice(firstItem, firstItem + mediaItemsPerPage)
                .map((product: ProductSummary_ProductFragment, idx: number) => (
                  <ProductSummary
                    key={idx}
                    product={product}
                    variant={variant}
                  />
                ))}
            </section>
          )
        })}
      </UIShelf>
    </section>
  )
}
