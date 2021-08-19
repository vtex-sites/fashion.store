
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type ProductSummary_ProductFragment = { productId: Maybe<string>, productName: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, name: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, sellerDefault: Maybe<boolean>, commertialOffer: Maybe<{ ListPrice: Maybe<number>, Price: Maybe<number>, AvailableQuantity: Maybe<number> }> }>>> }>>> };


// Query Related Code

