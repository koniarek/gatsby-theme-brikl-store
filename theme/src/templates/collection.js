import React from "react"
import Layout from "../components/Layout"
import CollectionProducts from "../components/CollectionProduct"
import { getTextFromLanguage } from "../utils/utils"
import SEO from "../components/SEO"

const CollectionTemplate = ({ pageContext }) => {
  const collection = pageContext.collection

  try {
    return (
      <Layout pageContext={pageContext}>
        <SEO title={`${getTextFromLanguage(collection.title.text, "en_UK")}`} />
        <CollectionProducts
          pageContext={pageContext}
          products={collection.products}
        />
      </Layout>
    )
  } catch (error) {
    console.log(error)
  }
}

export default CollectionTemplate
