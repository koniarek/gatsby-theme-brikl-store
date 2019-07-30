import React from "react"
import Layout from "../components/layout"
import CollectionList from "../components/collectionlist"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"

const CollectionsTemplate = ({ pageContext }) => {
  const collections = pageContext.shop.collections.edges
  return (
    <Layout pageContext={pageContext}>
      <SEO title="Collections" />
      <Container maxWidth="lg">
        <CollectionList collections={collections} />
      </Container>
    </Layout>
  )
}

export default CollectionsTemplate
