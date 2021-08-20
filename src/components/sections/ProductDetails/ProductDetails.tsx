import React from 'react'
import { graphql } from 'gatsby'
import type { ProductDetailsFragment_ProductFragment } from 'src/views/product/__generated__/ProductViewFragment_product.graphql'
import { useBuyButton } from 'src/sdk/buy/useBuyButton'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product }: Props) {
  const item = product.items?.[0]
  const offer = item?.sellers?.[0]?.commercialOffer
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
    <>
      <h1>{product.productName}</h1>
      <button {...btnProps}>Buy Now</button>
    </>
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
