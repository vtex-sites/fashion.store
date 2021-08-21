import { useGlobalUIState } from '@vtex/store-sdk'
import React, { lazy, Suspense } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import type { PropsWithChildren } from 'react'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))
const MenuSidebar = lazy(() => import('src/components/common/MenuSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart, displayMenuSidebar } = useGlobalUIState()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {displayMenuSidebar && (
        <Suspense fallback={null}>
          <MenuSidebar />
        </Suspense>
      )}
      {displayMinicart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}
    </>
  )
}

export default Layout
