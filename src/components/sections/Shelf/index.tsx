import React from 'react'
import type { FC } from 'react'
import { Carousel as UIShelf } from '@vtex/store-ui'
import useMediaQuery from 'src/utils/useMediaQuery'

import * as styles from './Shelf.module.css'

interface Props {
  items: string[]
  itemsPerPage: number[]
  title?: string
}

const Shelf: FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  className,
  items,
  itemsPerPage,
  title,
}) => {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const mediaItemsPerPage = isDesktop ? itemsPerPage[1] : itemsPerPage[0]

  const pagesNumber = Math.ceil(items.length / mediaItemsPerPage)

  return (
    <section className={`${styles.container} ${className}`}>
      {title && <h1 className="mb-4">{title}</h1>}
      <UIShelf>
        {[...Array(pagesNumber)].map((x, page) => {
          const firstItem = page * mediaItemsPerPage

          return (
            <section className="flex wrap" key={page}>
              {items
                .slice(firstItem, firstItem + mediaItemsPerPage)
                .map((value) => (
                  <div
                    key={value}
                    className="h-96 text-center flex-grow text-2xl"
                  >
                    {value}
                  </div>
                ))}
            </section>
          )
        })}
      </UIShelf>
    </section>
  )
}

export default Shelf
