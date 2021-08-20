import type { PropsWithChildren } from 'react'
import React, { Fragment, useMemo } from 'react'
import { Heart } from 'react-feather'
import { graphql, Link } from 'gatsby'
import { Button, Icon, Price } from '@vtex/store-ui'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import imageConf from 'src/images/config'

import type { ProductSummary_ProductFragment } from './__generated__/ProductSummary_product.graphql'
import './ProductSummary.module.css'

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
    <div data-p-s-simple-container>
      <div data-p-s-image-container>
        <GatsbyImage
          alt={product?.items?.[0]?.images?.[0]?.imageText ?? ''}
          image={image}
          objectFit="contain"
          data-p-s-image
        />
        {discount !== 0 ? (
          <div data-p-s-badge>
            <Price
              value={discount}
              variant="savings"
              formatter={discountFormatter}
            />
          </div>
        ) : null}
      </div>
      <div data-p-s-simple-info-container>
        <span data-p-s-simple-product-name>{product?.productName}</span>
        <div data-p-s-prices>
          <Price
            value={
              product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ?? 0
            }
            formatter={usePriceFormatter}
            variant="selling"
          />
          <div data-p-s-prices-divider />
          <Price
            value={
              product?.items?.[0]?.sellers?.[0]?.commertialOffer?.ListPrice ?? 0
            }
            formatter={usePriceFormatter}
            variant="listing"
          />
        </div>
      </div>

      <Button data-p-s-simple-wishlist-button aria-label="Add to wishlist">
        <Icon data-p-s-wishlist-icon component={<Heart />} />
      </Button>
      <div data-p-s-bg />
    </div>
  )
}

function ProductSummaryAdvanced({ product, image, discount }: VariantProps) {
  return (
    <>
      <div data-p-s-advanced-container>
        <div data-p-s-image-container>
          <GatsbyImage
            alt={product?.items?.[0]?.images?.[0]?.imageText ?? ''}
            image={image}
            objectFit="contain"
            data-p-s-image
          />
          {discount !== 0 ? (
            <div data-p-s-badge>
              <Price
                value={discount}
                variant="savings"
                formatter={discountFormatter}
              />
            </div>
          ) : null}
        </div>

        <Button data-p-s-advanced-wishlist-button aria-label="Add to wishlist">
          <Icon data-p-s-wishlist-icon component={<Heart />} />
        </Button>
      </div>
      <div data-p-s-advanced-info-container>
        <span data-p-s-advanced-product-name>{product?.productName}</span>
        <Button aria-label="Select product color" data-p-s-sku-selector />
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

  const Wrapper = product?.linkText
    ? ({ children }: PropsWithChildren<unknown>) => (
        <Link to={`/${product?.linkText}/p` ?? ''}>{children}</Link>
      )
    : Fragment

  if (variant === 'simple') {
    return (
      <Wrapper>
        <ProductSummaryAdvanced
          image={image}
          discount={discount}
          product={product}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ProductSummarySimple
        image={image}
        discount={discount}
        product={product}
      />
    </Wrapper>
  )
}

export const fragment = graphql`
  fragment ProductSummary_product on VTEX_Product {
    productId
    productName
    linkText
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
