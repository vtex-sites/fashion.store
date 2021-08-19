exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig }, stage }) => {
  const profiling = process.env.GATSBY_STORE_PROFILING

  if (stage === 'build-javascript' && profiling === true) {
    setWebpackConfig({
      optimization: {
        minimize: false,
        moduleIds: 'named',
        chunkIds: 'named',
        concatenateModules: false,
      },
    })
  }
}

exports.onCreatePage = async (args) => {
  const {
    page,
    actions: { createPage, deletePage },
  } = args

  /**
   * Adds context to home page
   */
  if (
    page.path === '/' ||
    (page.context !== undefined &&
      typeof page.context.originalPath === 'string' &&
      page.context.originalPath === '/')
  ) {
    // Add context to home page
    deletePage(page)
    createPage({
      ...page,
      context: {
        from: 0,
        to: 3,
        collection: '143',
        orderBy: 'OrderByBestDiscountDESC',
        hideUnavailableItems: true,
      },
    })
  }
}
