import React from "react"
import Layout from "../components/Layout"
import ProductList from "../components/ProductList"
import { Container } from "@material-ui/core"
import SEO from "../components/SEO"
import PageTitle from "../components/PageTitle"

const ProductsTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Products" />
      <PageTitle title="Products" />
      <Container maxWidth="lg">
        <ProductList
          langCode={langCode}
          urlPrefix={urlPrefix}
          products={products}
        />
      </Container>
    </Layout>
  )
}

export default ProductsTemplate
