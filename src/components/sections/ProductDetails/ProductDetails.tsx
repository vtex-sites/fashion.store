import { useLocation } from '@reach/router'
import { Button, Input, Price } from '@vtex/store-ui'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import { default as React } from 'react'
import { useBuyButton } from 'src/sdk/buy/useBuyButton'
import { useFormattedPrice } from 'src/sdk/price/useFormattedPrice'
import type { ProductViewFragment_ProductFragment } from 'src/views/product/__generated__/ProductViewFragment_product.graphql'

import * as styles from './ProductDetails.module.css'

interface Props {
  product: ProductViewFragment_ProductFragment
}

function ProductDetails({ product }: Props) {
  const item = product.items?.[0]
  const offer = item?.sellers?.[0]?.commercialOffer
  const location = useLocation()
  const { skuId } = queryString.parse(location.search)
  const itemSelected = product?.items?.find(
    (selected) => selected?.itemId === skuId
  )

  const btnProps = useBuyButton(
    offer && {
      id: product.id!,
      price: offer.spotPrice!,
      listPrice: offer.listPrice!,
      quantity: {
        selling: 1,
        gift: 0,
      },
      name: product.productName!,
      brand: product.brand!,
      facets:
        item?.variations?.map((variation) => ({
          key: variation!.name!,
          value: variation!.values![0]!,
        })) ?? [],
      image: {
        src: item?.images?.[0]?.src ?? '',
        alt: item?.images?.[0]?.alt ?? '',
      },
    }
  )

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <span className={clsx(styles.label, styles.brand)}>
            {product.brand}
          </span>
          <span className={styles.label}>REFERENCE: {itemSelected?.ean}</span>
        </div>
        <h1 className={styles.title}>{product.productName}</h1>
        <Price
          className={styles.price}
          formatter={useFormattedPrice}
          value={offer?.listPrice ?? 0}
        />
      </div>
      <Button {...btnProps} className={styles.addToCart}>
        Add to Cart
      </Button>
      <div className="flex flex-col">
        <span className="text-primary text-xl mb-4">Delivery & pick-up</span>
        <form className="flex items-center">
          <Input
            placeholder="Type your postal code"
            className="border-b w-full py-2"
          />
          <Button className="pl-2 uppercase text-gray-600">Ok</Button>
        </form>
        <Button className="bg-pink-50 text-pink-dark py-3 uppercase mt-8">
          Or choose store
        </Button>
      </div>
    </div>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productId
    productName
    brand

    items {
      variations {
        name
        values
      }
      images {
        src: imageUrl
        alt: imageText
      }
      sellers {
        commercialOffer: commertialOffer {
          spotPrice
          listPrice: ListPrice
        }
      }
    }
  }
`

export default ProductDetails
