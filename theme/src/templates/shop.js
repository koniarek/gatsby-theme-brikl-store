import React from "react"
import Layout from "../components/Layout"
import FeaturedProducts from "../components/FeaturedProducts"
import Banner from "../components/Banner"
import { Container } from "@material-ui/core"
import CollectionList from "../components/CollectionList"
import SEO from "../components/SEO"

const ShopTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  const collections = pageContext.shop.collections.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix
    ? pageContext.urlPrefix.split("/")[0]
    : "en"

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Home" />
      <Banner />
      <Container maxWidth="lg">
        <FeaturedProducts
          langCode={langCode}
          urlPrefix={urlPrefix}
          products={products}
        />
        <CollectionList
          langCode={langCode}
          urlPrefix={urlPrefix}
          collections={collections}
        />
      </Container>
    </Layout>
  )
}

export default ShopTemplate
