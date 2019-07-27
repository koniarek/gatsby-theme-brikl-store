exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      brikl {
        shop(id: "${process.env.GATSBY_BRIKL_SHOP_ID}"){
          id
          languages
          languageWithoutUrlPrefix
          currencies
          defaultCurrency
          defaultLanguage
          name
          collections {
            edges {
              node {
                id
                mainBanner
                no
                description {
                  id
                  text {
                    content
                    langCode
                  }
                }
                thumbnail
                slugs {
                  content
                  langCode
                }
                title {
                  id
                  text {
                    content
                    langCode
                  }
                }
                products {
                  collectionId
                  featured
                  productId
                  sortOrder
                  product {
                    id
                    inventory
                    media {
                      id
                      image
                      isThumbnail
                      isBanner
                      productId
                    }
                    no
                    price {
                      value
                      currency
                      includesTax
                      taxPercent
                    }
                    status
                    slugs {
                      content
                      langCode
                    }
                    title {
                      id
                      text {
                        content
                        langCode
                      }
                    }
                    description {
                      id
                      text {
                        content
                        langCode
                      }
                    }
                  }
                }
              }
            }
          }
          products(shopId:"${process.env.GATSBY_BRIKL_SHOP_ID}"){
            edges {
              node {
                id
                inventory
                no
                media{
                  id
                  image
                  sortOrder
                }
                price {
                  currency
                  value
                  taxPercent
                  includesTax
                }
                slugs {
                  content
                  langCode
                }
                status
                description {
                  id
                  text {
                    content
                    langCode
                  }
                }
                title {
                  id
                  text {
                    content
                    langCode
                  }
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

    // generate home page
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

      // generate product pages
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

      const collections = shop.collections.edges

      // generate collection pages
      collections.forEach(collectionNode => {
        const collection = collectionNode.node
        if (collection.slugs) {
          if (
            collection.slugs &&
            collection.slugs.find(e => e.langCode === language)
          ) {
            actions.createPage({
              path: `/${urlPrefix}${
                collection.slugs.find(e => e.langCode === language).content
              }`,
              component: require.resolve("./src/templates/collection.js"),
              context: {
                langCode: language,
                slugs: collection.slugs,
                collection: collection,
                urlPrefix,
                shop,
                collectionId: collection.id,
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
      return ""
    } else {
      return language.substring(0, 2) + "/"
    }
  } catch (error) {
    console.log("Error setting url prefix")
    return ""
  }
}
