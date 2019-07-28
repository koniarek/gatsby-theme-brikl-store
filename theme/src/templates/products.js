import React from "react"
import Layout from "../components/Layout"
import ProductList from "../components/ProductList"
import { Container } from "@material-ui/core"

const ProductsTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  return (
    <Layout pageContext={pageContext}>
      <Container maxWidth="lg">
        <ProductList products={products} />
      </Container>
    </Layout>
  )
}

export default ProductsTemplate
