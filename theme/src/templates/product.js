import React from "react"
import Layout from "../components/Layout"
import ImageGallery from "../components/ImageGallery"
import ProductDetails from "../components/ProductDetails"
import { Grid } from "@material-ui/core"
import SEO from "../components/SEO"
import { getTextFromLanguage } from "../utils/utils"

const ProductTemplate = ({ pageContext }) => {
  let product = pageContext.product
  let langCode = pageContext.languages

  return (
    <Layout pageContext={pageContext}>
      <SEO title={`${getTextFromLanguage(product.title.text, langCode)}`} />
      <Grid spacing={3} justify="center" container>
        <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
          <ImageGallery media={product.media} />
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
          <ProductDetails langCode={langCode} product={product} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProductTemplate
