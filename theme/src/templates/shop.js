import React from "react"
import Layout from "../components/Layout"
import FeaturedProducts from "../components/FeaturedProducts"
import BannerContainer from "../components/BannerContainer"
import { Container } from "@material-ui/core"
import CollectionList from "../components/CollectionList"
import SEO from "../components/SEO"
import PageTitle from "../components/PageTitle"

const ShopTemplate = ({ pageContext }) => {
  const products = pageContext.shop.products.edges
  const collections = pageContext.shop.collections.edges
  let langCode = pageContext.languages || "en_UK"
  let urlPrefix = pageContext.urlPrefix

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Home" />
      <BannerContainer urlPrefix={urlPrefix} />
      <Container maxWidth="lg">
        <PageTitle title="Featured" />
        <FeaturedProducts
          langCode={langCode}
          urlPrefix={urlPrefix}
          products={products}
        />
        <PageTitle title="Collections" />
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
