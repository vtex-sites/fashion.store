import React, { lazy, Suspense, SuspenseList } from 'react'
import type { Props as PageProps } from 'src/pages/index'
import { Button } from '@vtex/store-ui'

const Seo = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      './Seo'
    )
)

export type Props = PageProps

function View(props: Props) {
  // Send event to analytics
  // usePixelSendEvent(() => {
  //   const event: PageViewData = {
  //     pageType: 'home',
  //     pageUrl: window.location.href,
  //     pageTitle: document.title,
  //     referrer: '',
  //     accountName: process.env.GATSBY_STORE_ID!,
  //   }

  //   return { type: 'vtex:pageView', data: event }
  // })

  return (
    <SuspenseList>
      {/* Seo Components */}
      <Suspense fallback={null}>
        <Seo {...props} />
      </Suspense>

      {/* Visual Sections */}
      <Suspense fallback={null}>
        <div className="flex flex-col">
          <span>carousel</span>
          <div className="bg-[#f5f6fa] text-primary flex flex-col items-center py-14">
            <img
              alt="Bags to everyday"
              src="https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-bags-to-everday-v3___1d749e240d536af22e58fadb181a7a29.png"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl my-6">Bags to everyday</h2>
              <Button className="bg-primary text-white uppercase text-sm font-medium py-3 px-10">
                Shop Now
              </Button>
            </div>
          </div>
          <span>shelf</span>
          <div className="pt-14">
            <div className="pb-36 text-primary sm:bg-primary sm:text-white flex items-center flex-col sm:flex-row">
              <img
                alt="Summer Collection"
                className="w-full sm:w-1/2 -mt-14"
                src="https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-summer-collection___3d2dc6de19751ce047b361867c20d046.png"
              />
              <div className="flex flex-1 flex-col items-center my-10 sm:my-0">
                <h2 className="text-2xl sm:text-4xl">Summer Collection</h2>
                <p className="opacity-60 max-w-xs text-center my-6">
                  Our slimmest trench coat, with narrow shoulders and a
                  nipped-in waist.
                </p>
                <Button className="bg-pink-light text-pink sm:bg-pink sm:text-white uppercase text-sm font-medium py-3 sm:px-10 w-full sm:w-auto">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <span>shelf</span>
          <span>shelf</span>
          <div className="text-primary flex flex-col items-center py-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <h2 className="text-4xl sm:text-5xl">Choose only the best.</h2>
              <p className="text-xl my-6">
                <span className="opacity-60">You only live once. </span>
                <a href="/#" className="text-pink">
                  Enjoy.
                </a>
              </p>
            </div>
            <div className="space-y-14 sm:space-y-0 flex flex-col sm:flex-row w-full sm:items-center sm:mt-14">
              <div className="w-full sm:h-3/4 flex justify-start sm:justify-center">
                <img
                  alt="Choose only the best."
                  className="w-3/4 sm:w-auto"
                  src="https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-the-best-1___b4f82c4492198a3d5e97b4e2fb2ac13b.png"
                />
              </div>
              <div className="w-full flex justify-end sm:justify-center">
                <img
                  alt="Choose only the best."
                  className="w-3/4 sm:w-auto"
                  src="https://fashioneurope.vtexassets.com/assets/vtex/assets-builder/fashioneurope.theme/2.7.0/images/banner-the-best-2___4eb53ca5387f4d077dccdeb9fae211e3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </SuspenseList>
  )
}

export default View
