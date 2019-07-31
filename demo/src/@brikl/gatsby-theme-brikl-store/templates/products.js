import React from "react"
import ProductList from "@brikl/gatsby-theme-brikl-store/src/components/ProductList"
import Layout from "../components/Layout"
import SEO from "@brikl/gatsby-theme-brikl-store/src/components/SEO"
import PageTitle from "@brikl/gatsby-theme-brikl-store/src/components/PageTitle"

const ProductsPage = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Products" />
      <PageTitle title="Products" />
      <ProductList
        langCode={langCode}
        urlPrefix={urlPrefix}
        products={products}
      />
    </Layout>
  )
}

export default ProductsPage
