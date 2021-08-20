import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { useMemo } from 'react'
import imagesConf from 'src/images/config'

import type { ProductViewFragment_ProductFragment } from '../__generated__/ProductViewFragment_product.graphql'

type Props = {
  product?: ProductViewFragment_ProductFragment
  skuId?: string
}

export const useImageGallery = (props: Props) => {
  const getThumborImageData = useGetThumborImageData()

  return useMemo(
    () => ({
      desktop: (props.product?.items![0]?.images ?? []).map((item) =>
        getThumborImageData({
          baseUrl: item?.imageUrl ?? '',
          ...imagesConf['galleryImage.desktop'],
        })
      ),
      mobile: (props.product?.items![0]?.images ?? []).map((item) =>
        getThumborImageData({
          baseUrl: item?.imageUrl ?? '',
          ...imagesConf['galleryImage.mobile'],
        })
      ),
    }),
    [getThumborImageData, props]
  )
}
