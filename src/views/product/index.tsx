import React from 'react'
import { useLocation } from '@reach/router'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import ImageGallery from 'src/components/sections/ImageGallery'
import ProductDetails from 'src/components/sections/ProductDetails'

import { useImageGallery } from './hooks/useImageGallery'
import { useProduct } from './hooks/useProduct'
import Seo from './Seo'
import type { ProductSeoFragment_SiteFragment } from './Seo/__generated__/ProductSeoFragment_site.graphql'
import type { ProductViewFragment_ProductFragment } from './__generated__/ProductViewFragment_product.graphql'

interface Props {
  site: ProductSeoFragment_SiteFragment
  product: ProductViewFragment_ProductFragment
}

function View({ product: serverData, site }: Props) {
  const location = useLocation()
  const { skuId } = queryString.parse(location.search)

  /**
   * serverProduct data is stale and incomplete (because we SSRed it).
   * Let's use it's value as placeholder while we fetch the rest of the data
   * on the browser
   */
  const { data } = useProduct(
    { slug: serverData.slug as string },
    { vtex: { product: serverData } }
  )

  const product = data?.vtex.product
  const images = useImageGallery({ product, skuId: skuId as string })

  // useProductPixelEffect({ product: { id: product?.id ?? 'unknown' } })

  if (product == null) {
    return null
  }

  return (
    <>
      {/* Seo */}
      <Seo product={product} site={site} />

      {/* Visual Sections */}
      <div className="flex flex-col sm:flex-row">
        <ImageGallery images={images} alt={product.productName ?? ''} />
        <ProductDetails product={product} />
      </div>
    </>
  )
}

export const fragment = graphql`
  fragment ProductViewFragment_product on StoreProduct {
    id: productId
    slug: linkText

    ...ProductSeoFragment_product
    ...ProductDetailsFragment_product
  }
`

export default View
