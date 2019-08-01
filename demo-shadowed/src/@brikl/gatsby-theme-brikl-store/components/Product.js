import React from "react"
import { getTextFromLanguage } from "@brikl/gatsby-theme-brikl-store/src/utils/utils"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"

const NewProduct = ({ product, langCode, urlPrefix }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
      <h1>{getTextFromLanguage(product.title.text, langCode)}</h1>
      <h5>{getTextFromLanguage(product.description.text, langCode)}</h5>
      <h3>
        price: ${product.price.value} {product.price.currency}
      </h3>
      <Link
        to={
          `${urlPrefix}/products/` +
          getTextFromLanguage(product.slugs, langCode)
        }
      >
        Details
      </Link>
    </Grid>
  )
}

export default NewProduct
