import React, { lazy, Suspense, SuspenseList } from 'react'
import type { FC } from 'react'
import type { Props as PageProps } from 'src/pages/index'
import type { ProductSummary_ProductFragment } from 'src/components/product/ProductSummary/__generated__/ProductSummary_product.graphql'

const ByLookShelf = React.lazy(() =>
  import('src/components/sections/Shelf').then((module) => ({
    default: module.ByLookShelf,
  }))
)
// const FindInShelf = React.lazy(()=> import('src/components/sections/Shelf').then(module=>({default:module.FindInShelf})))

// const ShelfNews = lazy(
//   () =>
//     import(
//       /* webpackMode: "eager" */
//       'src/components/sections/ShelfNews'
//     )
// )

const Seo = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      './Seo'
    )
)

const BagsSection = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      '../../components/sections/Bags'
    )
)

const SummerCollectionSection = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      '../../components/sections/SummerCollection'
    )
)

const ChooseSection = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      '../../components/sections/Choose'
    )
)

const CarouselSection = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      'src/components/sections/Carousel'
    )
)

export type Props = PageProps

const View: FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <SuspenseList>
        {/* Seo Components */}
        <Suspense fallback={null}>
          <Seo {...props} />
        </Suspense>

        {/* Visual Sections */}
        <Suspense fallback={null}>
          <CarouselSection
            title="I'm looking for awesome styles for:"
            links={[
              {
                name: 'Women',
                href: '/women',
              },
              {
                name: 'Men',
                href: '/men',
              },
              {
                name: 'Children',
                href: '/children',
              },
            ]}
            items={[
              {
                desktop:
                  'https://fashioneurope.vtexassets.com/assets/vtex.file-manager-graphql/images/6fb2c12f-e156-45c8-99d6-0610f09110e6___f068f9f7f5f75d7c3556fae19818a092.jpg',
                mobile:
                  'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-full-home-mobile___e3667fef07d08dbaf530aa1f516c7a33.png',
                alt: 'image 1',
              },
              {
                desktop:
                  'https://fashioneurope.vtexassets.com/assets/vtex.file-manager-graphql/images/0d0853d7-4436-443d-b020-5d64db3435dd___4c60a00b7ed28c9f29ac5c3fff0b019a.jpg',
                mobile:
                  'https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-full-home-mobile-2___ee74b62ba8e7e7f35dfa3312e77dd2eb.png',
                alt: 'image 2',
              },
            ]}
          />
        </Suspense>

        <Suspense fallback={null}>
          <BagsSection />
          <ByLookShelf
            products={
              props.data.vtex.products as ProductSummary_ProductFragment[]
            }
            productsPerPage={[1, 3]}
            title="Shop by look"
          />
          <SummerCollectionSection />
          {/* <FindInShelf
            products={props.data.vtex?.products ?? undefined}
            productsPerPage={[2, 4]}
            title="Find in..."
            variant="advanced"
          /> */}
          {/* <ShelfNews
            products={props.data.vtex?.products ?? undefined}
            productsPerPage={[2, 4]}
          /> */}
          <ChooseSection />
        </Suspense>
      </SuspenseList>
    </div>
  )
}

export default View
