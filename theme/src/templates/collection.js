import React from "react"
import Layout from "../components/Layout"
import CollectionProducts from "../components/CollectionProducts"

const CollectionTemplate = ({ pageContext }) => {
  const collection = pageContext.collection

  try {
    return (
      <Layout pageContext={pageContext}>
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
