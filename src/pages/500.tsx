import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React, { useMemo } from 'react'
import Layout from 'src/views/Layout'
import type { PageProps } from 'gatsby'

type Props = PageProps

const useErrorState = (location: Location) =>
  useMemo(() => {
    const params = new URLSearchParams(location.search)
    const errorId = params.get('errorId')
    const fromUrl = params.get('from')

    return {
      errorId,
      fromUrl,
    }
  }, [location.search])

function Page({ location }: Props) {
  const { errorId, fromUrl } = useErrorState(location)

  return (
    <Layout>
      <GatsbySeo noindex nofollow />

      <h1>500</h1>
      <h2>Internal Server Error</h2>

      <div>
        The server errored with id {errorId} when visiting page {fromUrl}
      </div>
    </Layout>
  )
}

export default Page
