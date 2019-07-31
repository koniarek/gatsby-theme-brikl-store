exports.createPages = async ({ actions, graphql }, themeOptions) => {
  console.log("themeOptions", themeOptions)
  const result = await graphql(`
    query {
      brikl {
        shop(id: "${themeOptions.shopId}"){
          id
          languages
          languageWithoutUrlPrefix
          currencies
          defaultCurrency
          defaultLanguage
          name
          salesChannels {
            edges {
              node {
                id
                products {
                  edges {
                    node {
                      product {
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
          }
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
          products(shopId:"${themeOptions.shopId}"){
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

  try {
    const shop = result.data.brikl.shop
    const defaultLanguage = shop.defaultLanguage.split("_")[0]

    const basePath = "/"
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/shop.js"),
      context: {
        shop,
      },
    })

    actions.createRedirect({
      fromPath: `/`,
      toPath: `/en`,
      redirectInBrowser: true,
      isPermanent: true,
    })

    try {
      const languageWithoutUrlPrefix = shop.languageWithoutUrlPrefix

      // generate home page
      shop.languages.forEach(language => {
        const urlPrefix = setUrlPrefix(languageWithoutUrlPrefix, language)

        // cart page
        actions.createPage({
          path: basePath + urlPrefix + "cart",
          component: require.resolve("./src/templates/cart.js"),
          context: {
            shop,
            languages: language,
            urlPrefix,
          },
        })

        // all collections page
        actions.createPage({
          path: basePath + urlPrefix + "collections",
          component: require.resolve("./src/templates/collections.js"),
          context: {
            shop,
            languages: language,
            urlPrefix,
          },
        })

        // all products page
        actions.createPage({
          path: basePath + urlPrefix + "products",
          component: require.resolve("./src/templates/products.js"),
          context: {
            shop,
            languages: language,
            urlPrefix,
          },
        })

        actions.createPage({
          path: basePath + urlPrefix,
          component: require.resolve("./src/templates/shop.js"),
          context: {
            shop,
            languages: language,
            urlPrefix,
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
                path: `/${urlPrefix}products/${
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
                  languages: language,
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
                path: `/${urlPrefix}collections/${
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
                  languages: language,
                },
              })
            }
          }
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  } catch (error) {
    throw new Error(error)
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
