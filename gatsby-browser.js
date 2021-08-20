import {
  CartProvider,
  CartValidator,
  SessionProvider,
  UIProvider,
} from '@vtex/store-sdk'
import React from 'react'
import 'tailwindcss/tailwind.css'

import { validateCart } from './src/sdk/cart/validateCart'
import ErrorBoundary from './src/sdk/error/ErrorBoundary'
import uiProviderConfig from './src/sdk/globalState/config'

export const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    <UIProvider {...uiProviderConfig}>
      <SessionProvider>
        <CartProvider>
          <CartValidator onValidateCart={validateCart}>{element}</CartValidator>
        </CartProvider>
      </SessionProvider>
    </UIProvider>
  </ErrorBoundary>
)
