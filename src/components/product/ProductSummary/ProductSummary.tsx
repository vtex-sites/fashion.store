import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { Button, Icon, Price } from '@vtex/store-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import WishlistIcon from 'src/components/common/WishlistIcon/WishlishIcon'
import imageConf from 'src/images/config'

import type { ProductSummary_ProductFragment } from './__generated__/ProductSummary_product.graphql'
import './ProductSummary.module.css'

interface Props {
  product?: ProductSummary_ProductFragment
  variant?: 'simple' | 'advanced'
}

function usePriceFormatter(price: number) {
  return useMemo(() => {
    const formattedPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(price)

    return formattedPrice
  }, [price])
}

function ProductSummarySimple({ product }: Props) {
  const image = useThumborImageData({
    ...imageConf['product.summary'],
    baseUrl: product?.items?.[0]?.images?.[0]?.imageUrl ?? '',
  })

  return (
    <div
      data-store-p-s-container
      className="px-28 pb-2 h-full inline-flex flex-col relative"
    >
      <div
        data-store-p-s-image-container
        className="h-72 w-72 relative flex flex-col justify-center"
      >
        <GatsbyImage
          alt={product?.items?.[0]?.images?.[0]?.imageText ?? ''}
          image={image}
          objectFit="contain"
          data-store-p-s-image
          className="max-w-full max-h-full w-auto"
        />
        <div
          data-store-p-s-badge
          className="absolute top-0 right-0 px-2 bg-pink-600 text-xs text-white"
        >
          -39%
        </div>
      </div>
      <div
        data-store-p-s-info-container
        className="w-72 relative flex flex-col justify-center"
      >
        <span className="text-center break-all mt-6 mb-1">
          {product?.productName}
        </span>
        <div
          data-store-p-s-prices
          className="text-center flex flex-row justify-center"
        >
          <Price
            value={
              product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ?? 0
            }
            formatter={usePriceFormatter}
            variant="selling"
          />
          <div className="mx-4" />
          <Price
            value={
              product?.items?.[0]?.sellers?.[0]?.commertialOffer?.ListPrice ?? 0
            }
            formatter={usePriceFormatter}
            variant="listing"
            className="line-through opacity-30"
          />
        </div>
      </div>

      <Button
        data-store-p-s-wishlist-button
        className="rounded-full absolute p-2 bg-white left-5 top-6"
      >
        <Icon
          data-store-p-s-wishlist-icon
          component={<WishlistIcon />}
          className="text-gray-500"
        />
      </Button>
      <div
        data-store-p-s-bg
        style={{ top: '15%', zIndex: -1 }}
        className="absolute bg-blue-50 left-0 bottom-0 right-0"
      />
    </div>
  )
}

function ProductSummaryAdvanced({ product }: Props) {
  return null
}

function ProductSummary({ product, variant }: Props) {
  if (variant === 'advanced') {
    return <ProductSummaryAdvanced product={product} />
  }

  return <ProductSummarySimple product={product} />
}

export const fragment = graphql`
  fragment ProductSummary_product on VTEX_Product {
    productId
    productName
    items {
      itemId
      name
      images {
        imageUrl
        imageText
      }
      sellers {
        sellerId
        sellerDefault
        commertialOffer {
          ListPrice
          Price
          AvailableQuantity
        }
      }
    }
  }
`

export default ProductSummary
