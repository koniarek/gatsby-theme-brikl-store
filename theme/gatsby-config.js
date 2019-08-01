const env = require("dotenv").config()
const fs = require("fs")
const { buildSchema } = require("graphql")

module.exports = themeOptions => {
  try {
    const clientId =
      themeOptions && themeOptions.clientId
        ? themeOptions.clientId
        : process.env.GATSBY_BRIKL_CLIENT_ID
    const userId =
      themeOptions && themeOptions.userId
        ? themeOptions.userId
        : process.env.GATSBY_BRIKL_USER_ID
    const shopId =
      themeOptions && themeOptions.shopId
        ? themeOptions.shopId
        : process.env.GATSBY_BRIKL_SHOP_ID
    return {
      siteMetadata: {
        title: "Gatsby Theme BrikL Store",
        titleTemplate: "%s · Gatsby Theme BrikL Store",
        description: "A starter template for BrikL storefronts",
        siteUrl: "http://localhost:8000",
      },
      plugins: [
        {
          resolve: "gatsby-source-graphql",
          options: {
            typeName: "Brikl",
            fieldName: "brikl",
            // Url to query from
            url: "https://api.mybrikl.com/graphql",
            // HTTP headers
            headers: {
              // Learn about environment variables: https://gatsby.dev/env-vars
              Authorization: userId,
              "x-brikl-shop-id": shopId,
              "x-brikl-client-id": clientId,
            },
            createSchema: async () => {
              const sdl = fs
                .readFileSync(`${__dirname}/brikl-schema.gql`)
                .toString()
              return buildSchema(sdl)
            },
            // Additional options to pass to node-fetch
            // fetchOptions: {},
          },
        },
        {
          resolve: "gatsby-plugin-material-ui",
        },
        {
          resolve: "gatsby-plugin-typescript",
        },
        {
          resolve: "gatsby-plugin-react-helmet",
        },
        {
          resolve: "gatsby-plugin-html-attributes",
          options: {
            lang: "en",
          },
        },
        {
          resolve: "gatsby-plugin-robots-txt",
          options: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
        {
          resolve: "gatsby-plugin-web-font-loader",
          options: {
            google: {
              families: ["Roboto"],
            },
          },
        },
      ],
    }
  } catch (error) {
    throw new Error("Theme configuration failed")
  }
}
