import React from "react"
import Layout from "../components/Layout"
import CollectionProducts from "../components/CollectionProduct"
import { getTextFromLanguage } from "../utils/utils"
import SEO from "../components/SEO"

const CollectionTemplate = ({ pageContext }) => {
  const collection = pageContext.collection
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  try {
    return (
      <Layout pageContext={pageContext}>
        <SEO
          title={`${getTextFromLanguage(collection.title.text, langCode)}`}
        />
        <CollectionProducts
          pageContext={pageContext}
          langCode={langCode}
          urlPrefix={urlPrefix}
          products={collection.products}
        />
      </Layout>
    )
  } catch (error) {
    console.log(error)
  }
}

export default CollectionTemplate
