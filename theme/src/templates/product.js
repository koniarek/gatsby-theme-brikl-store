import React from "react"
import Layout from "../components/layout"
import ImageGallery from "../components/imagegallery"
import ProductDetails from "../components/productdetails"
import { Grid } from "@material-ui/core"
import SEO from "../components/seo"
import { getTextFromLanguage } from "../utils/utils"

const ProductTemplate = ({ pageContext }) => {
  let product = pageContext.product

  return (
    <Layout pageContext={pageContext}>
      <SEO title={`${getTextFromLanguage(product.title.text, "en_UK")}`} />
      <Grid spacing={3} justify="center" container>
        <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
          <ImageGallery media={product.media} />
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProductTemplate
