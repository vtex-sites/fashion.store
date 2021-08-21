import { graphql } from 'gatsby'
import React from 'react'
import Layout from 'src/views/Layout'
import View from 'src/views/product'
import type { PageProps } from 'gatsby'

import type {
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
} from './__generated__/ProductPageQuery.graphql'

export type Props = PageProps<
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables
>

function Page(props: Props) {
  const {
    data: { product, site },
  } = props

  if (product == null || site == null) {
    throw new Error('Something went wrong while fetching page data')
  }

  return (
    <Layout>
      <View {...props} site={site} product={product} />
    </Layout>
  )
}

export const query = graphql`
  query ProductPageQuery($id: String!) {
    site {
      ...ProductSeoFragment_site
    }

    product: storeProduct(id: { eq: $id }) {
      ...ProductViewFragment_product
    }
  }
`

export default Page
