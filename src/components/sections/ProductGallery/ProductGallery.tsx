import React from 'react'
import { gql } from '@vtex/gatsby-plugin-graphql'
import { useSearch } from 'src/sdk/search/useSearch'

import GalleryPage from './ProductGalleryPage'
import type { GalleryQueryQuery } from './__generated__/GalleryQuery.graphql'
import type { ProductGallery_FacetsFragment } from './__generated__/ProductGallery_facets.graphql'
import type { ProductGallery_ProductSearchFragment } from './__generated__/ProductGallery_productSearch.graphql'

interface Props {
  initialData?: GalleryQueryQuery
  facets: ProductGallery_FacetsFragment[]
  productSearch: ProductGallery_ProductSearchFragment
}

function ProductGallery({
  initialData,
  productSearch: { totalCount },
  facets,
}: Props) {
  const {
    searchParams,
    pageInfo: {
      nextPage: next,
      prevPage: prev,
      pages,
      addNextPage: setNextPage,
      addPreviousPage: setPrevPage,
    },
  } = useSearch()

  return (
    <>
      {/* Controls */}
      <div>Total Products: {totalCount}</div>
      <div>Number of Facets Found: {facets.length}</div>

      {/* Add link to previous page. This helps on SEO */}
      {prev !== false && (
        <a onClick={setPrevPage} href={prev.link} rel="prev">
          Previous Page
        </a>
      )}

      {/* Render ALL products */}
      {pages.map((page) => (
        <GalleryPage
          key={`gallery-page-${page}`}
          initialData={page === searchParams.page ? initialData : undefined}
          page={page}
        />
      ))}

      {/* Add link to next page. This helps on SEO */}
      {next !== false && (
        <a onClick={setNextPage} href={next.link} rel="next">
          Show More
        </a>
      )}

      {/* Prefetch Previous and Next pages */}
      {prev !== false && <GalleryPage page={prev.cursor} display={false} />}
      {next !== false && <GalleryPage page={next.cursor} display={false} />}
    </>
  )
}

export const fragment = gql`
  fragment ProductGallery_productSearch on VTEX_ProductSearch {
    totalCount: recordsFiltered
  }
  fragment ProductGallery_facets on VTEX_Facet {
    name
    type
    values {
      key
      name
      value
      selected
      quantity
      range {
        from
        to
      }
    }
  }
`

export default ProductGallery
