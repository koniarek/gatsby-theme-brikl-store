import React from "react"
import Layout from "../components/Layout"
import CollectionList from "../components/CollectionList"
import { Container } from "@material-ui/core"
import SEO from "../components/SEO"

const CollectionsTemplate = ({ pageContext }) => {
  const collections = pageContext.shop.collections.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Collections" />
      <Container maxWidth="lg">
        <CollectionList
          langCode={langCode}
          urlPrefix={urlPrefix}
          collections={collections}
        />
      </Container>
    </Layout>
  )
}

export default CollectionsTemplate
