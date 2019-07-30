import React from "react"
import Layout from "../components/layout"
import ProductList from "../components/productlist"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"

const ProductsTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  return (
    <Layout pageContext={pageContext}>
      <SEO title="Products" />
      <Container maxWidth="lg">
        <ProductList products={products} />
      </Container>
    </Layout>
  )
}

export default ProductsTemplate
