import React, { lazy, Suspense, SuspenseList } from 'react'
import type { Props as PageProps } from 'src/pages/index'

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

export type Props = PageProps

function View(props: Props) {
  return (
    <SuspenseList>
      {/* Seo Components */}
      <Suspense fallback={null}>
        <Seo {...props} />
      </Suspense>

      {/* Visual Sections */}
      <div className="flex flex-col">
        <Suspense fallback={null}>
          <span>carousel</span>
          <BagsSection />
          <span>shelf</span>
          <SummerCollectionSection />
          <span>shelf</span>
          <span>shelf</span>
          <ChooseSection />
        </Suspense>
      </div>
    </SuspenseList>
  )
}

export default View
