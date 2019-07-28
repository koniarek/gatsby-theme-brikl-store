import React from "react"
import Layout from "../components/Layout"
import FeaturedProducts from "../components/FeaturedProducts"
import Banner from "../components/Banner"
import { Container } from "@material-ui/core"
import CollectionList from "../components/CollectionList"

const ShopTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  const collections = pageContext.shop.collections.edges

  return (
    <Layout pageContext={pageContext}>
      <Banner />
      <Container maxWidth="lg">
        <FeaturedProducts products={products} />
        <CollectionList collections={collections} />
      </Container>
    </Layout>
  )
}

export default ShopTemplate
