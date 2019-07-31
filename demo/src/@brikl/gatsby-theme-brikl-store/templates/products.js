import React from "react"
import ProductList from "@brikl/gatsby-theme-brikl-store/src/components/ProductList"
import Layout from "../components/Layout"

const ProductsPage = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  return (
    <Layout pageContext={pageContext}>
      <h1>shadow</h1>
      <ProductList
        langCode={langCode}
        urlPrefix={urlPrefix}
        products={products}
      />
    </Layout>
  )
}

export default ProductsPage
