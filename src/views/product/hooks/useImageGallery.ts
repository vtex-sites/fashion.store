import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { useMemo } from 'react'
import imagesConf from 'src/images/config'

import type { ProductViewFragment_ProductFragment } from '../__generated__/ProductViewFragment_product.graphql'

type Props = {
  product?: ProductViewFragment_ProductFragment
  skuId: string
}

export const useImageGallery = (props: Props) => {
  const getThumborImageData = useGetThumborImageData()

  const items = useMemo(
    () =>
      props.product?.items?.find((item) => item?.itemId === props.skuId)
        ?.images ?? [],
    [props.product, props.skuId]
  )

  return useMemo(
    () => ({
      desktop: items.map((item) =>
        getThumborImageData({
          baseUrl: item?.imageUrl ?? '',
          ...imagesConf['galleryImage.desktop'],
        })
      ),
      mobile: items.map((item) =>
        getThumborImageData({
          baseUrl: item?.imageUrl ?? '',
          ...imagesConf['galleryImage.mobile'],
        })
      ),
    }),
    [getThumborImageData, items]
  )
}
