
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
export type CollectionPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CollectionPageQueryQuery = { site: Maybe<{ siteMetadata: Maybe<{ titleTemplate: Maybe<string>, title: Maybe<string>, description: Maybe<string> }> }>, storeCollection: Maybe<{ seo: { title: string, description: string }, meta: { selectedFacets: Array<{ key: string, value: string }> } }> };


// Query Related Code

export const CollectionPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query CollectionPageQuery($id: String!) {\n  site {\n    siteMetadata {\n      titleTemplate\n      title\n      description\n    }\n  }\n  storeCollection(id: {eq: $id}) {\n    seo {\n      title\n      description\n    }\n    meta {\n      selectedFacets {\n        key\n        value\n      }\n    }\n  }\n}\n",
  sha256Hash: "24c83915f2af65190fca81f449c086a4113bc2fe5eacbfecdaf9ddce7c6ec31e",
  operationName: "CollectionPageQuery",
}

