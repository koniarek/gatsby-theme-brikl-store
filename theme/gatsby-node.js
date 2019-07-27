exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      brikl {
        shop(id: "${process.env.GATSBY_BRIKL_SHOP_ID}"){
          id
          languages
          languageWithoutUrlPrefix
          products(shopId:"${process.env.GATSBY_BRIKL_SHOP_ID}"){
            edges{
              node{
                id
                no
                title {
                  id
                  text {
                    content
                    langCode
                  }
                }
                slugs{
                  content
                  langCode
                }
              }
            }
          }
        }
      }
    }
  `)

  const shop = result.data.brikl.shop

  const basePath = "/"
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/shop.js"),
    context: {
      shop,
    },
  })

  try {
    const languageWithoutUrlPrefix = shop.languageWithoutUrlPrefix

    shop.languages.forEach(language => {
      const urlPrefix = setUrlPrefix(languageWithoutUrlPrefix, language)

      actions.createPage({
        path: basePath + urlPrefix,
        component: require.resolve("./src/templates/shop.js"),
        context: {
          shop,
        },
      })

      const products = shop.products.edges

      products.forEach(productNode => {
        const product = productNode.node
        if (product.slugs) {
          if (
            product.slugs &&
            product.slugs.find(e => e.langCode === language)
          ) {
            actions.createPage({
              path: `/${urlPrefix}${
                product.slugs.find(e => e.langCode === language).content
              }`,
              component: require.resolve("./src/templates/product.js"),
              context: {
                langCode: language,
                slugs: product.slugs,
                product: product,
                urlPrefix,
                shop,
                productId: product.id,
              },
            })
          }
        }
      })
    })
  } catch (error) {
    console.log("error", error)
  }
}

const setUrlPrefix = (languageWithoutUrlPrefix, language) => {
  try {
    if (languageWithoutUrlPrefix && languageWithoutUrlPrefix === language) {
      // console.log('no prefix')
      return ""
    } else {
      // console.log('language.substring(0,2)', language.substring(0,2)+'/')
      return language.substring(0, 2) + "/"
    }
  } catch (error) {
    console.log("Error setting url prefix")
    return ""
  }
}
