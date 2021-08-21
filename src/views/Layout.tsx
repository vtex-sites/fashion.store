import React, { lazy, Suspense } from 'react'
import { useGlobalUIState } from '@vtex/store-sdk'
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
      <Suspense fallback={null}>
        {displayMenuSidebar && <MenuSidebar />}
        {displayMinicart && <CartSidebar />}
      </Suspense>
    </>
  )
}

export default Layout
