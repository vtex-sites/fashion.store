import React from 'react'

import ProductSummary from '../ProductSummary'
import type { ProductSummary_ProductFragment } from '../ProductSummary/__generated__/ProductSummary_product.graphql'
import * as styles from './ProductGrid.module.css'

interface Props {
  products: ProductSummary_ProductFragment[]
  variant?: 'simple' | 'advanced'
}

function ProductGrid({ products, variant }: Props) {
  return (
    <div className={styles.root}>
      {products.map((product, idx) => (
        <ProductSummary
          key={`${product.productId}-${idx}`}
          product={product}
          variant={variant}
        />
      ))}
    </div>
  )
}

export default ProductGrid
