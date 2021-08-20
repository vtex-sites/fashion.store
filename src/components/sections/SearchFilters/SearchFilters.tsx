import '@reach/accordion/styles.css'

import type { PropsWithChildren } from 'react'
import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@reach/accordion'
import { Checkbox } from '@vtex/store-ui'
import { graphql } from 'gatsby'
import { useSearch } from 'src/sdk/search/useSearch'
import type { SearchSort } from '@vtex/store-sdk/dist/search/state'

import * as styles from './SearchFilters.module.css'
import type { SearchFilterFragment_FacetsFragment } from './__generated__/SearchFilterFragment_facets.graphql'

interface Props {
  facets: SearchFilterFragment_FacetsFragment[]
}

const selectOptions = [
  ['score-desc', 'Relevance'],
  ['price-desc', 'Price: High to Low'],
  ['price-asc', 'Price: Low to High'],
  ['orders-desc', 'Sales'],
  ['name-desc', 'Name: A-Z'],
  ['name-asc', 'Name: Z-A'],
  ['release-desc', 'Release date'],
  ['discount-desc', 'Discount'],
]

function SearchFilters({ facets }: Props) {
  const { toggleFacet, setSort } = useSearch()

  return (
    <div className={styles.container}>
      <Accordion collapsible>
        {facets.map((facet, idx) => (
          <AccordionItem key={`${facet.name}${idx}`}>
            <h3>
              <AccordionButton>{facet.name}</AccordionButton>
            </h3>
            <AccordionPanel>
              <ul>
                {facet.values?.map(
                  (value, id) =>
                    value && (
                      <li key={`${value.key}${id}`}>
                        <Checkbox
                          checked={value.selected!}
                          id={value.name!}
                          onChange={() => toggleFacet(value as any)}
                        />
                        <label htmlFor={value.name!}>{value.name!}</label>
                      </li>
                    )
                )}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <div className={styles.sort}>
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          onChange={(e) => setSort(e.target.value as SearchSort)}
        >
          {selectOptions.map(([value, name]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button
        className={styles.filtersButton}
        onClick={() => window.alert('TODO')}
      >
        Filters
      </button>
    </div>
  )
}

export const fragment = graphql`
  fragment SearchFilterFragment_facets on VTEX_Facet {
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

export default SearchFilters
