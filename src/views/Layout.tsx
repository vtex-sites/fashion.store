import React, { lazy, Suspense, SuspenseList } from 'react'
import type { PropsWithChildren } from 'react'
import { useGlobalUIState } from '@vtex/store-sdk'

const Navbar = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      'src/components/common/Navbar'
    )
)

const Footer = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      'src/components/common/Footer'
    )
)

const CartSidebar = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      'src/components/cart/CartSidebar'
    )
)

const MenuSidebar = lazy(
  () =>
    import(
      /* webpackMode: "eager" */
      'src/components/common/MenuSidebar'
    )
)

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart, displayMenuSidebar } = useGlobalUIState()

  return (
    <SuspenseList revealOrder="together">
      <Suspense fallback={null}>
        {displayMenuSidebar && <MenuSidebar />}
      </Suspense>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={null}>
        <main className="min-h-screen">{children}</main>
      </Suspense>
      <Suspense fallback={<div className="h-14" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>{displayMinicart && <CartSidebar />}</Suspense>
    </SuspenseList>
  )
}

export default Layout
