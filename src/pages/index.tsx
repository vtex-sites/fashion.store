import React from 'react'
import { graphql } from 'gatsby'
import View from 'src/views/home'
import Layout from 'src/views/Layout'
import type { PageProps } from 'gatsby'

import type { HomePageQueryQuery } from './__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  return (
    <Layout>
      <View {...props} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery(
    $from: Int!
    $to: Int!
    $collection: String!
    $orderBy: String!
    $hideUnavailableItems: Boolean!
  ) {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    vtex {
      products(
        from: $from
        to: $to
        collection: $collection
        orderBy: $orderBy
        hideUnavailableItems: $hideUnavailableItems
      ) {
        ...ProductSummary_product
      }
    }
  }
`

export default Page
