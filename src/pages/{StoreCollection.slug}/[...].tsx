import React, { useMemo } from 'react'
import Layout from 'src/views/Layout'
import View from 'src/views/collection'
import { graphql } from 'gatsby'
import { parseSearchParamsState } from '@vtex/store-sdk'
import type { PageProps } from 'gatsby'
import CollectionBanner from 'src/components/sections/CollectionBanner'

import type {
  BrowserCollectionPageQueryQuery,
  BrowserCollectionPageQueryQueryVariables,
} from './__generated__/BrowserCollectionPageQuery.graphql'

export type Props = PageProps<
  BrowserCollectionPageQueryQuery,
  BrowserCollectionPageQueryQueryVariables & { slug: string }
>

const useSearchParams = ({ href }: Location) =>
  useMemo(() => href && parseSearchParamsState(new URL(href)), [href])

function Page(props: Props) {
  const searchParams = useSearchParams(props.location)

  return (
    <Layout>
      <CollectionBanner
        image={{
          desktop:
            'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/search-banner___b133a2e011b0a025cdc7f9fb02645848.jpg',
          mobile:
            'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/search-banner___b133a2e011b0a025cdc7f9fb02645848.jpg',
          alt: 'Collection Image',
        }}
        title={props.data.storeCollection?.seo.title ?? 'Collection'}
        description="explore the collection"
      />

      {searchParams && <View {...props} searchParams={searchParams} />}
    </Layout>
  )
}

/**
 * This query is run during SSG
 * */
export const query = graphql`
  query BrowserCollectionPageQuery($id: String!) {
    site {
      ...CollectionSeoFragment_site
    }

    storeCollection(id: { eq: $id }) {
      ...CollectionSeoFragment_storeCollection
      meta {
        selectedFacets {
          key
          value
        }
      }
    }
  }
`

export default Page
