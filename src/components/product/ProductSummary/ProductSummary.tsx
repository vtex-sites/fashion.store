import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { Button, Icon, Price } from '@vtex/store-ui'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import WishlistIcon from 'src/components/common/WishlistIcon/WishlishIcon'
import imageConf from 'src/images/config'

import type { ProductSummary_ProductFragment } from './__generated__/ProductSummary_product.graphql'

interface Props {
  product?: ProductSummary_ProductFragment
  variant?: 'simple' | 'advanced'
}

interface VariantProps {
  product?: Props['product']
  image: IGatsbyImageData
  discount: number
}

function usePriceFormatter(price: number) {
  return useMemo(() => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(price)
  }, [price])
}

function discountFormatter(discount: number) {
  return `-${discount.toFixed(0)}%`
}

function ProductSummarySimple({ product, image, discount }: VariantProps) {
  return (
    <div
      data-store-p-s-container
      className="px-28 h-full inline-flex flex-col relative"
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
        {discount !== 0 ? (
          <div
            data-store-p-s-badge
            className="absolute top-0 right-0 px-2 bg-pink-600 text-xs text-white"
          >
            <Price
              value={discount}
              variant="savings"
              formatter={discountFormatter}
            />
          </div>
        ) : null}
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
            className="line-through opacity-60"
          />
        </div>
      </div>

      <Button
        data-store-p-s-wishlist-button
        className="rounded-full absolute p-2 bg-white left-5 top-6"
        aria-label="Add to wishlist"
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

function ProductSummaryAdvanced({ product, image, discount }: VariantProps) {
  return (
    <>
      <div
        data-store-p-s-container
        className="px-12 h-full inline-flex flex-col relative"
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
          {discount !== 0 ? (
            <div
              data-store-p-s-badge
              className="absolute top-0 right-0 px-2 bg-pink-600 text-xs text-white"
            >
              <Price
                value={discount}
                variant="savings"
                formatter={discountFormatter}
              />
            </div>
          ) : null}
        </div>

        <Button
          data-store-p-s-wishlist-button
          className="rounded-full absolute p-2 bg-white left-8 top-6"
          aria-label="Add to wishlist"
        >
          <Icon
            data-store-p-s-wishlist-icon
            component={<WishlistIcon />}
            className="text-gray-500"
          />
        </Button>
      </div>
      <div
        data-store-p-s-info-container
        className="px-6 w-72 relative flex flex-col justify-center"
      >
        <span className="break-all mt-6 mb-4">{product?.productName}</span>
        <Button className="rounded-full border-t border-l border-r border-b border-black bg-gray-50 h-6 w-6" />
        <Price
          value={product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ?? 0}
          formatter={usePriceFormatter}
          variant="selling"
        />
      </div>
    </>
  )
}

function ProductSummary({ product, variant = 'simple' }: Props) {
  const image = useThumborImageData({
    ...imageConf['product.summary'],
    baseUrl: product?.items?.[0]?.images?.[0]?.imageUrl ?? '',
  })

  const sellingPrice = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price
  const listingPrice =
    product?.items?.[0]?.sellers?.[0]?.commertialOffer?.ListPrice

  let discount = 0

  if (sellingPrice && listingPrice) {
    discount = Math.floor((1 - sellingPrice / listingPrice) * 100)
  }

  if (variant === 'advanced') {
    return (
      <ProductSummaryAdvanced
        image={image}
        discount={discount}
        product={product}
      />
    )
  }

  return (
    <ProductSummarySimple image={image} discount={discount} product={product} />
  )
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
