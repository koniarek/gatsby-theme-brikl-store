import React from "react"
import Layout from "../components/Layout"
import CollectionProducts from "../components/CollectionProducts"

const Collection = ({ pageContext }) => {
  const collection = pageContext.collection

  try {
    return (
      <Layout>
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

export default Collection
