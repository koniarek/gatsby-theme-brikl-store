import React from "react"
import Layout from "../components/layout"
import FeaturedProducts from "../components/featuredproducts"
import Banner from "../components/banner"
import { Container } from "@material-ui/core"
import CollectionList from "../components/collectionlist"
import SEO from "../components/seo"

const ShopTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  const collections = pageContext.shop.collections.edges

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Home" />
      <Banner />
      <Container maxWidth="lg">
        <FeaturedProducts products={products} />
        <CollectionList collections={collections} />
      </Container>
    </Layout>
  )
}

export default ShopTemplate
