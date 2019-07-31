/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@brikl/gatsby-theme-brikl-store`,
      options: {
        clientId: process.env.GATSBY_BRIKL_CLIENT_ID,
        shopId: process.env.GATSBY_BRIKL_SHOP_ID,
        userId: process.env.GATSBY_BRIKL_USER_ID,
      },
    },
  ],
}
